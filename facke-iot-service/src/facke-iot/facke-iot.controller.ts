import { Body, Controller, Get, Post } from "@nestjs/common";
import { FackeIotService } from "./facke-iot.service";

@Controller("facke-iot")
export class FackeIotController {
  constructor(private readonly fackeIotService: FackeIotService) {
  }

  @Get("status")
  statusFackeIot(): string {
    return this.fackeIotService.status();
  }

  @Get("start")
  startFackeIot(): string {
    return this.fackeIotService.start();
  }

  @Get("stop")
  stopFackeIot(): string {
    return this.fackeIotService.stop();
  }

  @Post("config")
  configuration(@Body() configuration: any) {
    return this.fackeIotService.configuration(configuration);
  }

}
