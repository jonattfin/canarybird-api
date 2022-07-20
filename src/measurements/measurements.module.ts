import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MeasurementsController } from './measurements.controller';
import { Device, Measurement } from 'src/_shared/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebMeasurementsService } from './web-measurements.service';

@Module({
  imports: [TypeOrmModule.forFeature([Measurement, Device]), HttpModule],
  controllers: [MeasurementsController],
  providers: [WebMeasurementsService],
})
export class MeasurementsModule {}
