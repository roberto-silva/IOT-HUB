import { StoppingPointDto } from "./stopping-point.dto";
import { ProductionDto } from "./production.dto";

export class MachineDto {

  private id: number;

  private name: string;

  private productions: ProductionDto[] = [];

  private stoppingPoints: StoppingPointDto[] = [];

  private piecesPerMinute: number;

  private maximumProductionCapacity: number;

  private workingTime: number;

  constructor(machineDto: MachineDto) {
    this.id = machineDto.id;
    this.name = machineDto.name;
    this.productions = machineDto.productions;
    this.stoppingPoints = machineDto.stoppingPoints;
    this.piecesPerMinute = machineDto.piecesPerMinute;
    this.maximumProductionCapacity = machineDto.maximumProductionCapacity;
    this.workingTime = machineDto.workingTime;
  }
}
