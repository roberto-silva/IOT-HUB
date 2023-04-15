// @ts-ignore

import { Inject, Injectable } from "@nestjs/common";
import { interval, map, Subject, takeUntil, takeWhile } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { MachineDto } from "./domain/machine.dto";
import { ShiftDto } from "./domain/shift.dto";

@Injectable()
export class FackeIotService {

  statusFackeIot: boolean;
  time: string = "3000";

  componentDestroyed$: Subject<null> = new Subject();

  constructor(
    @Inject(HttpService)
    private httpService: HttpService) {
    this.statusFackeIot = false;
  }

  status(): string {
    return `The status is ${this.statusFackeIot ? "online" : "offline"}`;
  }

  start(): string {
    if (this.statusFackeIot) {
      return "facke-iot is started";
    } else {
      this.statusFackeIot = true;
      this.whenSendInformation();
      return "starting facke-iot";
    }
  }

  stop(): string {
    if (!this.statusFackeIot) {
      return "facke-iot is stoped";
    } else {
      this.statusFackeIot = false;
      this.whenSendInformation();
      return "stoping facke-iot";
    }
  }

  configuration(configuration: any): string {
    const time = this.time;
    this.time = String(configuration.time);
    return `The time is ${time} and now it's ${this.time}`;
  }

  whenSendInformation(): void {
    let numberOfRequest: number = 1;
    interval(Number(this.time))
      .pipe(takeWhile(() => this.statusFackeIot))
      .pipe(takeUntil(this.componentDestroyed$)).subscribe(async () => {
      numberOfRequest = this.sendInformation(numberOfRequest);
    });
  }

  sendInformation(numberOfRequest: number): number {
    let request: number = numberOfRequest;
    const maquina = new MachineDto({});
    const paradas: ShiftDto[] = [new ShiftDto({}), new ShiftDto({}), new ShiftDto({})];
    maquina.paradas = paradas;
    this.httpService.post("http://host.docker.internal:1880/facke-iot", { maquina: maquina })
      .pipe(map((response: any) => response.data.response))
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: (result: any) => {
          console.log(`Resquest number of: ${numberOfRequest}`);
          request++;
          console.log("Response: ", result);
        }, error: (error: any) => {
          this.statusFackeIot = false;
          console.log(error);
        }
      });
    return request;
  }
}

