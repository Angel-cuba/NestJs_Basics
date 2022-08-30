import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthBody } from './body';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body('email') email: string, @Body('password') password: string) {
    console.log({
      email,
      typeOfEmail: typeof email,
      password,
      typeOfPassword: typeof password,
    });
    return this.authService.signup();
  }

  @Post('login')
  login() {
    return this.authService.login();
  }
}
