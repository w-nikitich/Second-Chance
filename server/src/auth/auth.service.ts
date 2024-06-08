import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/database/Users/create-user.dto';
import { UsersService } from 'src/database/Users/users.service';
import { Users } from 'src/database/models/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(user: CreateUserDto) {
    const dbUser = await this.usersService.create({
      ...user,
    });

    const payload = {
      nickname: dbUser.nickname,
      deviceId: dbUser.deviceId,
      userId: dbUser.id,
    };
    const accessToken = this.jwtService.sign(payload);
    return { access_token: accessToken };
  }

  async validateUser(nickname: string, deviceId: string): Promise<any> {
    const user = await this.usersService.findUserByNickname(nickname);

    if (user.deviceId === deviceId) {
      return this.generateToken(user);
    }
    return null;
  }

  async generateToken(user: Users) {
    const payload = {
      nickname: user.nickname,
      id: user.id,
      deviceId: user.deviceId,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateToken(token: string) {
    return this.jwtService.verify(token);
  }
}
