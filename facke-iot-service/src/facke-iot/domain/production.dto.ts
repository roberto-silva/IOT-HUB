import { Time } from "./time.enum";

export class ProductionDto {

  private id: number;

  private time: Time;

  private product: string;

  private goodPiece: number;

  private badPiece: number;

  private total: string;

  constructor(productionDto: ProductionDto) {
    this.id = productionDto.id;
    this.time = productionDto.time;
    this.product = productionDto.product;
    this.goodPiece = productionDto.goodPiece;
    this.badPiece = productionDto.badPiece;
    this.total = productionDto.total;
  }
}
