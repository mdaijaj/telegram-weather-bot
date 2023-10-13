// src/telegram/telegram.service.ts

import { Injectable, Logger } from '@nestjs/common';
import { WeatherService } from '../weather/weather.service';
const TelegramBot=require("node-telegram-bot-api")
const TelegramToken="6697973701:AAFNABGHOOArVUe_DSN7ysC1E257TUc97LQ"
const userId="1125651519"


@Injectable()
export class TelegramService {
  private readonly bot: any
  private logger=new Logger(TelegramService.name)

  constructor(private readonly WeatherService: WeatherService) {
     this.bot= new TelegramBot(TelegramToken, {polling: true})
     this.bot.on("message", this.OnReceiveMessage)

     let weartherReport= this.WeatherService.getWeather("delhi")
     weartherReport
     .then((data)=>{
      let main= JSON.stringify(data)
      // this.logger.debug("main", main)

      let mainObj = JSON.parse(main);
      // this.logger.debug("mainObj", mainObj)

      let temperature= mainObj.temp;
      let description= mainObj.weather[0].description
      let humanity= mainObj.humidity
      this.bot.sendMessage(userId, `Weather in ${humanity}: Description: ${description}, Temperature: ${temperature}°C`)
     })
     .catch((err)=>{
      console.log(err.message)
     })

  }


  OnReceiveMessage=(msg: any)=>{
    // this.logger.debug("msg", msg)
  }


  sendMessage=(userId: string, message: string)=>{
    // this.logger.debug("msg", userId, message)
  }

}