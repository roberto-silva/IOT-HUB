export class ProductionDto {
  tipo_produto: string;
  turno: string;
  horario: number;
  quantidade_producao: number;
  pecas_boas: number;
  pecas_ruins: number;

  constructor(product: ProductionDto, numberOfRequest: number) {
    this.tipo_produto = product?.tipo_produto ? product?.tipo_produto : 'Porca';
    this.turno = product?.turno
      ? product?.turno
      : this.getShift(numberOfRequest);
    this.horario = product?.horario ? product?.horario : 1;
    this.quantidade_producao = product?.quantidade_producao
      ? product?.quantidade_producao
      : this.getRandomInt(10000);
    this.pecas_boas = product?.pecas_boas
      ? product?.pecas_boas
      : this.getRandomInt(10000);
    this.pecas_ruins = product?.pecas_ruins
      ? product?.pecas_ruins
      : this.getRandomInt(10000);
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * max);
  }

  getShift(numberOfRequest: number): string {
    if (numberOfRequest <= 8) {
      return 'Turno 1';
    } else if (numberOfRequest <= 16) {
      return 'Turno 2';
    } else {
      return 'Turno 3';
    }
  }
}
