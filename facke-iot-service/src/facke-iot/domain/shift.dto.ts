export class ShiftDto {
  inicio: Date;
  fim: Date;

  motivo: string;

  constructor(shift: ShiftDto | any, numberOfRequest: number) {
      const date: any = this.randomDate(numberOfRequest);

      this.inicio = shift.inicio ? shift.inicio : date.start;
      this.fim = shift.fim ? shift.fim : date.end;
      this.motivo = shift?.motivo ? shift?.motivo : "Qual o problema?";
  }

  randomDate(start: number) {
    let start_date: Date = new Date();
    let end_date: Date = new Date();
    start_date.setHours((start - 3), 0, 0, 0);
    end_date.setHours((start - 2), 0, 0, 0);

    return {start: start_date, end: end_date};
  }
}
