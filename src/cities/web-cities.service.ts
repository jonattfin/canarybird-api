import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class WebCitiesService {
  constructor(private readonly httpService: HttpService) {}
  findAll() {
    return [
      {
        country: 'Germany',
        cities: ['Berlin'],
      },
      {
        country: 'Macedonia',
        cities: ['Bitola', 'Skopje', 'Tetovo'],
      },
      {
        country: 'Romania',
        cities: [
          'Bucharest',
          'Brasov',
          'Cluj-Napoca',
          'Iasi',
          'Oradea',
          'TarguMures',
        ],
      },
    ];
  }
}
