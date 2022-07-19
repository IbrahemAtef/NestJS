import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../common/constants/repository.constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    let result = await this.userRepository.create<User>({...user});
    return result;
  }

  async findOneByEmail(email: string): Promise<User> {
    let result = await this.userRepository.findOne<User>({ where: { email } });
    return result;
  }

  // need to change the id type if not working
  async findOneById(id: number): Promise<User> {
    let result = this.userRepository.findOne<User>({ where: { id } });
    return result;
  }
}
