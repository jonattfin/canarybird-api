import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((_) => Device, (device) => device.city)
  devices: Device[];
}

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => City, (city) => city.devices)
  public city: City;

  @OneToMany((_) => Measurement, (measure) => measure.device)
  measurements: Measurement[];
}

@Entity()
export class Measurement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  type: MeasurementType;

  @Column()
  timestamp: number;

  @Column()
  value: number;

  @ManyToOne(() => Device, (device) => device.measurements)
  public device: Device;
}

export enum MeasurementType {
  Pm10,
  Pm25,
  Temperature,
  Humidity,
  Noise,
}
