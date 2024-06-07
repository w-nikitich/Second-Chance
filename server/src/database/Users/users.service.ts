import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { Users } from '../models/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof Users,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.usersRepository.findAll<Users>();
  }

  async findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne<Users>({ where: { id } });
  }

  async create(data: CreateUserDto): Promise<Users> {
    return this.usersRepository.create<Users>({
      nickname: data.nickname,
      deviceId: data.deviceId,
      password: data.password,
      usedTitleId: data.usedTitleId,
    });
  }

  async update(id: number, data: CreateUserDto): Promise<Users> {
    await this.usersRepository.update<Users>(data, { where: { id } });
    return this.usersRepository.findOne<Users>({ where: { id } });
  }
}