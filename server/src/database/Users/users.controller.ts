import { Controller, Patch, Post, Get, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): object {
    return this.usersService.findAll();
  }

  @Get('byId/:id')
  findOne(@Param('id') id: number): object {
    return this.usersService.findOne(id);
  }

  @Post('/register')
  create(@Body() data: CreateUserDto): object {
    return this.usersService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: CreateUserDto): object {
    return this.usersService.update(id, data);
  }
}
