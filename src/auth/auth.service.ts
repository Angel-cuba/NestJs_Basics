import { Injectable } from '@nestjs/common';
import { User, BookMark } from '@prisma/client';

@Injectable({})
export class AuthService {
  login() {
    return 'First service login';
  }

  signup() {
    return 'First service signup';
  }
}
