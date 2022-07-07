import { User } from './user.model';
import { USER_REPOSITORY } from '../../common/constants/repository.constants';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
