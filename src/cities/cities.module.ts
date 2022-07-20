import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CitiesController } from './cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from 'src/_shared/entities';
import { WebCitiesService } from './web-cities.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([City]),
    HttpModule
  ],
  controllers: [CitiesController],
  providers: [WebCitiesService]
})
export class CitiesModule {}
