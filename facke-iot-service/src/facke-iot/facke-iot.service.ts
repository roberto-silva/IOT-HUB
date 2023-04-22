// @ts-ignore

import { Body, Inject, Injectable, Param, Patch, Post, Put } from "@nestjs/common";
import { map, Subject, takeUntil } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { MachineDto } from "./domain/machine.dto";
import { StoppingPointDto } from "./domain/stopping-point.dto";
import { ProductionDto } from "./domain/production.dto";

@Injectable()
export class FackeIotService {

  componentDestroyed$: Subject<null> = new Subject();

  constructor(
    @Inject(HttpService)
    private httpService: HttpService) {
  }


  saveMachine(machine: MachineDto): any {
    const dockerHost: string = "http://host.docker.internal:1880/facke-iot";
    return this.sendToNodeRed("machine", machine);
  }

  updateMachine(id: any, machine: MachineDto): any {
    return this.sendToNodeRed(`machine/id`, machine, id);
  }

  saveStoppoingPoint(id: any, stoppingPointDto: StoppingPointDto): any {
    return this.sendToNodeRed(`machine/id/stoppoing-point`, stoppingPointDto, id);
  }

  saveProduction(id: any, productionDto: ProductionDto): any {
    return this.sendToNodeRed(`machine/id/production`, productionDto, id);
  }

  sendToNodeRed(request: string, body: any, id: any = null): any {
    this.httpService.post('http://localhost:1880/facke-iot', body, {
      headers: {point: request, id}
    })
      .pipe(map((response: any) => response.data.response))
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: (result: any) => {
          return result;
        }, error: (error: any) => {
          throw error;
        }
      });
  }
}

