export class StoppingPointDto {

  private id: number;

  private startPoint: number;

  private endPoint: number;

  private duration: number;

  private reason: string;

  constructor(stoppingPointDTO: StoppingPointDto) {
    this.id = stoppingPointDTO.id;
    this.startPoint = stoppingPointDTO.startPoint;
    this.endPoint = stoppingPointDTO.endPoint;
    this.duration = stoppingPointDTO.duration;
    this.reason = stoppingPointDTO.reason;
  }
}
