import { Titles } from '../models/titles.entity';

export const titlesProviders = [
  {
    provide: 'TITLES_REPOSITORY',
    useValue: Titles,
  },
];
