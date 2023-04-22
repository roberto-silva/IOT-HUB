import { Body, Controller, Param, Patch, Post, Put } from "@nestjs/common";
import { FackeIotService } from "./facke-iot.service";
import { MachineDto } from "./domain/machine.dto";
import { StoppingPointDto } from "./domain/stopping-point.dto";
import { ProductionDto } from "./domain/production.dto";

@Controller("facke-iot")
export class FackeIotController {
  constructor(private readonly fackeIotService: FackeIotService) {
  }


  @Post("machine")
  saveMachine(@Body() machine: MachineDto): any {
    return this.fackeIotService.saveMachine(machine);
  }

  @Post("machine/:id")
  updateMachine(@Param("id") id: any, @Body() machine: MachineDto): any {
    return this.fackeIotService.updateMachine(id, machine);
  }

  @Post("machine/:id/stoppoing-point")
  saveStoppoingPoint(@Param("id") id: any, @Body() stoppingPointDto: StoppingPointDto): any {
    return this.fackeIotService.saveStoppoingPoint(id, stoppingPointDto);
  }

  @Post("machine/:id/production")
  saveProduction(@Param("id") id: any, @Body() productionDto: ProductionDto): any {
    return this.fackeIotService.saveProduction(id, productionDto);
  }

}
