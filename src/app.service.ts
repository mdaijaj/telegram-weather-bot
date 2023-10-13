import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }
  private logger=new Logger(AppService.name)


  googleLogin(req: any) {
    this.logger.debug("req.user", req.user)
    if (!req.user) {
      return 'No user from google'
    }
    return {
      message: 'User Info from Google',
      user: req.user
    }
  }



  
}
