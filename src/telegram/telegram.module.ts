// src/telegram/telegram.module.ts

import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { WeatherService } from 'src/weather/weather.service';

@Module({
  providers: [TelegramService, WeatherService],
})
export class TelegramModule {}
