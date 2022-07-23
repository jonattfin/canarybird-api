import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeasurementsModule } from './measurements/measurements.module';
// import { Measurement, Device, City } from './_shared/entities';
import { DevicesModule } from './devices/devices.module';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   port: 3306,
    //   ...getConnection(),
    //   entities: [Device, Measurement, City],
    //   // synchronize: true,
    // }),
    MeasurementsModule,
    DevicesModule,
    CitiesModule,
    CacheModule.register()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

function getConnection() {
  return {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };
}
