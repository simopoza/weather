import { Module } from '@nestjs/common';
import { WeatherGateway } from './app.gateway';
import { WeatherController } from './app.controller';

@Module({
  controllers: [WeatherController],
  providers: [WeatherGateway],
})
export class AppModule {
  constructor(private weatherGateway: WeatherGateway) {
    this.weatherGateway.sendWeatherUpdates();
  }
}
