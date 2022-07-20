import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { WebDevicesService } from './web-devices.service ';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: WebDevicesService) {}

  @Get(':city')
  findOne(@Param('city') city: string) {
    return this.devicesService.findOne(city);
  }
}
