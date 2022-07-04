import { MeasurementType } from 'src/_shared/entities';

export class CreateMeasurementDto {
  type: MeasurementType;

  timestamp: number;

  value: number;

  device: number;
}
