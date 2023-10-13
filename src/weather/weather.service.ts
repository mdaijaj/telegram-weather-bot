import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class WeatherService {
  private readonly apiKey = '0e221b8217f91ed1da5ed6a11391327a';
  private logger=new Logger(WeatherService.name)


  async getWeather(city: string): Promise<string> {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
      );
      
      const weatherData = response.data;
      // this.logger.debug("response", weatherData)

      // const temperature = weatherData.main.temp;
      // const description = weatherData.weather[0].description;
        return weatherData;
      // return `Weather in ${city}: ${description}, Temperature: ${temperature}°C`;
    } catch (error) {
      return `Sorry, I couldn't fetch weather data for ${city}.`;
    }
  }
}