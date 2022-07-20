import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';

interface IDevice {
  sensorId: string;
  position: string;
  comments: string;
  type: string;
  description: string;
  status: string;
}

@Injectable()
export class WebDevicesService {
  constructor(private readonly httpService: HttpService) {}

  findOne(city: string) {
    return this.httpService
      .get(`https://${city}.pulse.eco/rest/sensor`)
      .pipe(map((response) => response.data));
  }

}
