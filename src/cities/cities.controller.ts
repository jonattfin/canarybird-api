import {
  Controller,
  Get,
} from '@nestjs/common';
import { WebCitiesService } from './web-cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: WebCitiesService) {}

  @Get()
  findAll() {
    return this.citiesService.findAll();
  }
}
