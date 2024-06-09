import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async validate(token: string) {
    try {
      const decoded = this.jwtService.verify(token, {
        secret: 'SECRET',
      });
      console.log(decoded);
      return decoded;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
