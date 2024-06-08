import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/database/Users/create-user.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Body() loginDto: any) {
    const user = await this.authService.validateUser(
      loginDto.nickname,
      loginDto.deviceId,
    );
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.generateToken(user);
  }
}
