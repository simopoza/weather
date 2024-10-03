import { Controller, Get } from '@nestjs/common';

@Controller('weather')
export class WeatherController {
  @Get('current')
  getCurrentWeather() {
    const weatherData = this.generateWeatherData();
    return weatherData;
  }

  generateWeatherData() {
    const temperature = (Math.random() * 40).toFixed(2);
    const wind = (Math.random() * 100).toFixed(2);
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)];
    return { temperature, wind, conditions };
  }
}
