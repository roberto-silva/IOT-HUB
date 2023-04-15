import { Test, TestingModule } from '@nestjs/testing';
import { FackeIotController } from './facke-iot.controller';
import { FackeIotService } from './facke-iot.service';

describe('FackeIotController', () => {
  let controller: FackeIotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FackeIotController],
      providers: [FackeIotService],
    }).compile();

    controller = module.get<FackeIotController>(FackeIotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
