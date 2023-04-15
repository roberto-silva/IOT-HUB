import { Module } from '@nestjs/common';
import { FackeIotService } from './facke-iot.service';
import { FackeIotController } from './facke-iot.controller';
import { HttpModule, HttpService } from "@nestjs/axios";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [
    HttpModule
  ],
  controllers: [FackeIotController],
  providers: [FackeIotService]
})
export class FackeIotModule {}
