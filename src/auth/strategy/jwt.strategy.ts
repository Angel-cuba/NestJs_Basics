import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(config: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET_KEY'),
    });
  }

  //JwtPayload
  async validate(payload: {
    sub: number;
    email: string;
    iat: number;
    exp: number;
  }) {
    const { sub } = payload;
    const user = await this.prisma.user.findUnique({
      where: {
        id: sub,
      },
    });
    delete user.hash;
    return user;
  }
}
