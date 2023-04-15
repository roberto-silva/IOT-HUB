import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FackeIotModule } from './facke-iot/facke-iot.module';

@Module({
  imports: [FackeIotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
