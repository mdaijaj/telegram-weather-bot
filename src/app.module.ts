import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramModule } from './telegram/telegram.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth/entity/auth.entity';


@Module({
  imports: [TelegramModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
