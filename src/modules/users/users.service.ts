// import { Injectable, Inject } from '@nestjs/common';
// import { User } from './user.model';
// import { UserDto } from './dto/user.dto';
// import { USER_REPOSITORY } from '../../common/constants/repository.constants';

// @Injectable()
// export class UsersService {
//   constructor(
//     @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
//   ) {}

//   async create(user: UserDto): Promise<User> {
//     return await this.userRepository.create<User>(user);
//   }

//   async findOneByEmail(email: string): Promise<User> {
//     return await this.userRepository.findOne<User>({ where: { email } });
//   }

//   // need to change the id type if not working
//   async findOneById(id: number): Promise<User> {
//     return await this.userRepository.findOne<User>({ where: { id } });
//   }
// }
