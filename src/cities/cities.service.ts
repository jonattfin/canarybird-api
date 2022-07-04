import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/_shared/entities';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
  ) {}

  create(createCityDto: CreateCityDto) {
    const city = new City();
    city.name = createCityDto.name;

    return this.citiesRepository.save(city);
  }

  findAll() {
    return this.citiesRepository.find();
  }

  findOne(id: number) {
    return this.citiesRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
