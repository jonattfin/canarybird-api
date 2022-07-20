import { Controller, Get, Param, Query } from '@nestjs/common';
import { WebMeasurementsService } from './web-measurements.service';

class ListAllMeasurements {
  city: string;
  measurementType: string;
  deviceId: string;
}

@Controller('measurements')
export class MeasurementsController {
  constructor(private readonly measurementsService: WebMeasurementsService) {}

  @Get()
  findAll(@Query() query: ListAllMeasurements) {
    const { city, measurementType } = query;
    return this.measurementsService.findAll(city, measurementType);
  }
}


