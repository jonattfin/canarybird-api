import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sensor } from 'src/_shared/entities';
import { Repository } from 'typeorm';

import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@Injectable()
export class SensorsService {
  constructor(
    @InjectRepository(Sensor)
    private sensorsRepository: Repository<Sensor>,
  ) {}

  create(createSensorDto: CreateSensorDto) {
    return 'This action adds a new sensor';
  }

  async findAll(): Promise<Sensor[]> {
    return this.sensorsRepository.find();
  }

  async findOne(id: number): Promise<Sensor> {
    return this.sensorsRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateSensorDto: UpdateSensorDto) {
    return `This action updates a #${id} sensor`;
  }

  async remove(id: number): Promise<void> {
    await this.sensorsRepository.delete(id);
  }
}
