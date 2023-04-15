import { ShiftDto } from "./shift.dto";

export class ProductionDto {
  tipo_produto: string;
  turno: ShiftDto;
  horario: number;
  quantidade_producao: number;
  pecas_boas: number;
  pecas_ruins: number;

  constructor(product: ProductionDto) {
    this.tipo_produto = product?.tipo_produto ? product?.tipo_produto : "Porca";
    this.turno = product?.turno ? new ShiftDto(product?.turno) : new ShiftDto({});
    this.horario = product?.horario ? product?.horario : this.getRandomInt(1);
    this.quantidade_producao = product?.quantidade_producao ? product?.quantidade_producao : this.getRandomInt(10000);
    this.pecas_boas = product?.pecas_boas ? product?.pecas_boas : this.getRandomInt(10000);
    this.pecas_ruins = product?.pecas_ruins ? product?.pecas_ruins : this.getRandomInt(10000);
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * max);
  }
}
