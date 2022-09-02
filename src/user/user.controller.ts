import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from './../guard/jwt.guard';

@Controller('user')
export class UserController {
  //Protecting first this endpoint to protect it
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    console.log({
      user: req.user,
    });
    return req.user;
  }
}
