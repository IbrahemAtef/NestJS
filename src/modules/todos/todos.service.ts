// import { Injectable, Inject } from '@nestjs/common';
// import { Todo } from './todo.model';
// import { TodoDto } from './dto/todo.dto';
// import { User } from '../users/user.model';
// import { TODO_REPOSITORY } from '../../common/constants/repository.constants';

// @Injectable()
// export class TodosService {
//   constructor(
//     @Inject(TODO_REPOSITORY) private readonly todoRepository: typeof Todo,
//   ) {}

//   async create(todo: TodoDto, userId): Promise<Todo> {
//     return await this.todoRepository.create<Todo>({
//       ...todo,
//       userId,
//     });
//   }

//   async findUserTodos(userId): Promise<Todo[]> {
//     return await this.todoRepository.findAll<Todo>({
//       where: { userId },
//       include: [{ model: User, attributes: { exclude: ['password'] } }],
//     });
//   }

//   // async findOne(id): Promise<Todo> {
//   //   return await this.todoRepository.findOne({
//   //     where: { id },
//   //     include: [{ model: User, attributes: { exclude: ['password'] } }],
//   //   });
//   // }

//   async delete(id, userId) {
//     return await this.todoRepository.destroy({ where: { id, userId } });
//   }

//   async update(id, data, userId) {
//     const res = await this.todoRepository.update(
//       { ...data },
//       { where: { id, userId }, returning: true },
//     );

//     return { numberOfAffectedRows: Number(res[1]) };
//   }
// }
