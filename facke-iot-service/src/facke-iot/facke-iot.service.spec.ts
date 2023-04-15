import { Test, TestingModule } from '@nestjs/testing';
import { FackeIotService } from './facke-iot.service';

describe('FackeIotService', () => {
  let service: FackeIotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FackeIotService],
    }).compile();

    service = module.get<FackeIotService>(FackeIotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
