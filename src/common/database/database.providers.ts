import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
// import { Todo } from 'src/modules/todos/todo.model';
import { User } from 'src/modules/users/user.model';
import { SEQUELIZE } from '../constants/config.constants';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({ ...configService.get('database') });
      sequelize.addModels([User]);
      return sequelize;
    },
    inject: [ConfigService],
  },
];
