import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { City, Device } from 'src/_shared/entities';
import { WebDevicesService } from './web-devices.service ';

@Module({
  imports: [
    TypeOrmModule.forFeature([Device, City]),
    HttpModule
  ],
  controllers: [DevicesController],
  providers: [DevicesService, WebDevicesService],
})
export class DevicesModule {}
