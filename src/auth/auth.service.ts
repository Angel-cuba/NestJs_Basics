import { Injectable } from '@nestjs/common';
import { User, BookMark } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login() {
    return 'First service login';
  }

  signup() {
    return 'First service signup';
  }
}
