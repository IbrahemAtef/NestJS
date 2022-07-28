import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.model';
import { CreateTodoDto } from './dto/create-todo.dto';
import { User } from '../users/user.model';
import { TODO_REPOSITORY } from '../../common/constants/repository.constants';
import { MessageEnum } from 'src/common/enums/message.enum';

@Injectable()
export class TodosService {
  constructor(
    @Inject(TODO_REPOSITORY) private readonly todoRepository: typeof Todo,
  ) {}

  async create(todo: CreateTodoDto, userId): Promise<Todo> {
    let result = await this.todoRepository.create<Todo>({
      ...todo,
      userId,
    });
    return result;
  }

  async findUserTodos(userId): Promise<Todo[]> {
    let result =  await this.todoRepository.findAll<Todo>({
      where: { userId },
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
    return result;
  }

  async delete(id, userId) {
    let result =  await this.todoRepository.destroy({ where: { id, userId } });
    
    // if the number of row affected is zero,
    // then the todo doesn't exist in our db
    if (result === 0) {
      throw new NotFoundException(MessageEnum.deleteFailed);
    }

    // return success message
    return MessageEnum.deleteSucceeded;
  }

  async update(id, data, userId) {
    const res = await this.todoRepository.update(
      { ...data },
      { where: { id, userId }, returning: true },
    );
    // if the number of row affected is zero,
    // it means the todo doesn't exist in our db
    if (Number(res[1]) === 0) {
      throw new NotFoundException(MessageEnum.updateFailed);
    }
    // else it updated
    return MessageEnum.updateSucceeded;
  }
}
