// @ts-ignore

import { Inject, Injectable } from "@nestjs/common";
import { interval, map, Subject, takeUntil, takeWhile } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { MachineDto } from "./domain/machine.dto";
import { ShiftDto } from "./domain/shift.dto";

@Injectable()
export class FackeIotService {

  statusFackeIot: boolean;
  time: number = 1000;

  limitOfRequest: number = 24;

  numberOfRequest: number = 0;

  componentDestroyed$: Subject<null> = new Subject();

  shifts: ShiftDto[] = [
    new ShiftDto({}, 8),
    new ShiftDto({}, 16),
    new ShiftDto({}, 24)];

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
      this.numberOfRequest = 1;
      this.statusFackeIot = true;
      this.whenSendInformation();
      return "starting facke-iot";
    }
  }

  stop(): string {
    if (!this.statusFackeIot) {
      return "facke-iot is stoped";
    } else {
      this.numberOfRequest = 0;
      this.statusFackeIot = false;
      this.whenSendInformation();
      return "stoping facke-iot";
    }
  }

  configuration(configuration: any): string {
    const time = this.time = Number(configuration?.time || 1000);
    const limit = this.limitOfRequest = Number(configuration?.limit || 24);
    return `The time is ${time} and now it's ${time}. The limit of request it's ${limit}`;
  }

  whenSendInformation(): void {
    interval(Number(this.time))
      .pipe(takeWhile(() => (this.statusFackeIot)))
      .pipe(takeUntil(this.componentDestroyed$)).subscribe(async () => {
      if (this.numberOfRequest > this.limitOfRequest) {
        this.stop();
      } else {
        this.sendInformation();
      }
    });
  }

  getMachine(): any {
    const maquina = new MachineDto({}, this.numberOfRequest);
    maquina.paradas = this.shifts;
    return { maquina };
  }

  sendInformation(): void {
    this.httpService.post("http://host.docker.internal:1880/facke-iot", this.getMachine())
      .pipe(map((response: any) => response.data.response))
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: (result: any) => {
          console.log(`Resquest number of: ${this.numberOfRequest}`);
          this.numberOfRequest++;
          console.log("Response: ", result);
        }, error: (error: any) => {
          this.statusFackeIot = false;
          console.log(error);
        }
      });
  }
}

