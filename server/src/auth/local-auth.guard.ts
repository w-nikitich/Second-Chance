import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class LocalAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const { nickname, deviceId } = request.body;

    if (!nickname && !deviceId) {
      throw new UnauthorizedException('Username and deviceId are required');
    }

    const user = await this.authService.validateUser(nickname, deviceId);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    request.user = user;
    return true;
  }
}
