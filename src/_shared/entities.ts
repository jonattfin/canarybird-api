import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Sensor {
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

  @OneToMany((_) => Measurement, (measure) => measure.sensor)
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

  @ManyToOne(() => Sensor, (sensor) => sensor.measurements)
  public sensor!: Sensor;
}

enum MeasurementType {
  Pm10,
  Pm25,
  Temperature,
  Humidity,
  Noise,
}
