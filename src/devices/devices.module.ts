import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City, Device } from 'src/_shared/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Device, City])],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {}
