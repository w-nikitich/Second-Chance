import { Module } from '@nestjs/common';
import { TitlesController } from './titles.controller';
import { TitlesService } from './titles.service';
import { titlesProviders } from './titles.providers';
import { DatabaseModule } from '../module';

@Module({
  imports: [DatabaseModule],
  controllers: [TitlesController],
  providers: [TitlesService, ...titlesProviders],
})
export class TitlesModule {}
