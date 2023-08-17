import { configDotenv } from 'dotenv';
import { Dialect } from 'sequelize';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

configDotenv();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    async useFactory() {
      const config: SequelizeOptions = {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: process.env.DB_DIALECT as Dialect,
      };

      const sequelize = new Sequelize(config);
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
