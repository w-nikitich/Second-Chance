import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { Users } from './models/users.entity';
dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([Users]);
      //   sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
