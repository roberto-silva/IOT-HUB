export class ShiftDto {
  inicio: Date;
  fim: Date;

  motivo: string;

  constructor(shift: ShiftDto | any) {
      this.inicio = shift.inicio ? shift.inicio : this.randomDate(new Date(2023, 0, 1), new Date());
      this.fim = shift.fim ? shift.fim : this.randomDate(new Date(2023, 0, 2), new Date());
      this.motivo = shift?.motivo ? shift?.motivo : "Qual o problema?";
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
