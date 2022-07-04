import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Device, Measurement } from 'src/_shared/entities';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';

@Injectable()
export class MeasurementsService {
  constructor(
    @InjectRepository(Measurement)
    private measurementsRepository: Repository<Measurement>,
    @InjectRepository(Device)
    private devicesRepository: Repository<Device>,
  ) {}

  async create(createMeasurementDto: CreateMeasurementDto) {
    const measurement = new Measurement();
    measurement.timestamp = createMeasurementDto.timestamp;
    measurement.type = createMeasurementDto.type;
    measurement.value = createMeasurementDto.value;
    measurement.device = await this.devicesRepository.findOne({
      where: { id: createMeasurementDto.device },
    });

    return this.measurementsRepository.save(measurement);
  }

  async findAll(): Promise<Measurement[]> {
    return this.measurementsRepository.find();
  }

  async findOne(id: number): Promise<Measurement> {
    return this.measurementsRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateMeasurementDto: UpdateMeasurementDto) {
    return `This action updates a #${id} measurement`;
  }

  async remove(id: number): Promise<void> {
    await this.measurementsRepository.delete(id);
  }
}
