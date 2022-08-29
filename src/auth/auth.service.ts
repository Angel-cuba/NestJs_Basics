import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return 'First service login';
  }

  signup() {
    return 'First service signup';
  }
}
