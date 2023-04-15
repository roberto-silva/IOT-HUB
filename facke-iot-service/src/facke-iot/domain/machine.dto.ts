import { ShiftDto } from "./shift.dto";
import { ProductionDto } from "./production.dto";

export class MachineDto {
  programaca_producao: number;
  equipamento: string;
  peca_minuto: number;
  capacidade_producao: number;
  paradas: ShiftDto[];
  producao: ProductionDto;


  constructor(machine: MachineDto | any) {
    this.programaca_producao = machine?.programaca_producao ? machine?.programaca_producao : this.getRandomInt(24);
    this.equipamento = machine?.equipamento ? machine?.equipamento : "Torno";
    this.peca_minuto = machine?.peca_minuto ? machine?.peca_minuto : this.getRandomInt(3);
    this.capacidade_producao = machine?.capacidade_producao ? machine?.capacidade_producao :  this.getRandomInt(1000);
    this.paradas = machine?.paradas?.length
      ? machine?.paradas.map((item: ShiftDto) => {
        return new ShiftDto(item);
      })
      : [];
    this.producao = new ProductionDto(machine?.producao);
  }


  getRandomInt(max): number {
    return Math.floor(Math.random() * max);
  }

}
