import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from '../google.stragy'; // Create this file

@Module({
  imports: [
    PassportModule.register({ session: true }),
  ],
  providers: [GoogleStrategy],
})
export class AuthModule {}
