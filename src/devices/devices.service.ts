import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City, Device } from 'src/_shared/entities';
import { Repository } from 'typeorm';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device)
    private devicesRepository: Repository<Device>,
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
  ) {}

  async create(createDeviceDto: CreateDeviceDto) {
    const device = new Device();

    device.isActive = createDeviceDto.isActive;
    device.latitude = createDeviceDto.latitude;
    device.longitude = createDeviceDto.longitude;
    device.name = createDeviceDto.name;

    device.city = await this.citiesRepository.findOne({
      where: { id: createDeviceDto.city },
    });

    return this.devicesRepository.save(device);
  }

  findAll() {
    return this.devicesRepository.find();
  }

  findOne(id: number) {
    return this.devicesRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateDeviceDto: UpdateDeviceDto) {
    // TODO
    //return this.devicesRepository.save(updateDeviceDto);
  }

  async remove(id: number): Promise<void> {
    await this.devicesRepository.delete(id);
  }
}
