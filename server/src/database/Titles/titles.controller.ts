import { Controller, Patch, Post, Get, Param, Body } from '@nestjs/common';
import { TitlesService } from './titles.service';
import { CreateTitleDto } from './create-title.dto';

@Controller('titles')
export class TitlesController {
  constructor(private readonly titlesService: TitlesService) {}

  @Get()
  findAll(): object {
    return this.titlesService.findAll();
  }

  @Get('byId/:id')
  findOne(@Param('id') id: number): object {
    return this.titlesService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateTitleDto): object {
    return this.titlesService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: CreateTitleDto): object {
    return this.titlesService.update(id, data);
  }
}
