import { Injectable, Inject } from '@nestjs/common';
import { CreateTitleDto } from './create-title.dto';
import { Titles } from '../models/titles.entity';

@Injectable()
export class TitlesService {
  constructor(
    @Inject('TITLES_REPOSITORY')
    private titlesRepository: typeof Titles,
  ) {}

  async findAll(): Promise<Titles[]> {
    return this.titlesRepository.findAll<Titles>();
  }

  async findOne(id: number): Promise<Titles> {
    return this.titlesRepository.findOne<Titles>({ where: { id } });
  }

  async create(data: CreateTitleDto): Promise<Titles> {
    return this.titlesRepository.create<Titles>({
      name: data.name,
      picture: data.picture,
    });
  }

  async update(id: number, data: CreateTitleDto): Promise<Titles> {
    await this.titlesRepository.update<Titles>(data, { where: { id } });
    return this.titlesRepository.findOne<Titles>({ where: { id } });
  }
}
