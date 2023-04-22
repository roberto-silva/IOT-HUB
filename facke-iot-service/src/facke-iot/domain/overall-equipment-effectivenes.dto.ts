export class OverallEquipmentEffectivenesDto {

  oee: number;
  availability: number;
  performance: number;
  quality: number;

  constructor(overallEquipmentEffectivenesDto: OverallEquipmentEffectivenesDto) {
    this.oee = overallEquipmentEffectivenesDto.oee;
    this.availability = overallEquipmentEffectivenesDto.availability;
    this.performance = overallEquipmentEffectivenesDto.performance;
    this.quality = overallEquipmentEffectivenesDto.quality;
  }
}
