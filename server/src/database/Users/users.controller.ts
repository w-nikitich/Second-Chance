import { Controller, Patch, Get, Param, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): object {
    return this.usersService.findAll();
  }

  @Get('byNickname/:nickname')
  @UseGuards(JwtAuthGuard)
  findUserByNickname(@Param('nickname') nickname: string): object {
    return this.usersService.findUserByNickname(nickname);
  }

  @Get('byDeviceId/:deviceId')
  @UseGuards(JwtAuthGuard)
  findUserByDeviceId(@Param('deviceId') deviceId: string): object {
    return this.usersService.findUserByDeviceId(deviceId);
  }

  @Get('byId/:id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number): object {
    return this.usersService.findOne(id);
  }

  // @Post('/register')
  // create(@Body() data: CreateUserDto): object {
  //   return this.usersService.create(data);
  // }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() data: CreateUserDto): object {
    return this.usersService.update(id, data);
  }
}
