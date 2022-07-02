import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Measurement } from 'src/_shared/entities';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';

@Injectable()
export class MeasurementsService {
  constructor(
    @InjectRepository(Measurement)
    private measurementsRepository: Repository<Measurement>,
  ) {}

  create(createMeasurementDto: CreateMeasurementDto) {
    return 'This action adds a new measurement';
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
