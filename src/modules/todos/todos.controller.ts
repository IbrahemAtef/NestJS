import { UpdateTodoDto } from './dto/update-todo.dto';
import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  NotFoundException,
  UseGuards,
  Request,
  Patch,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TodosService } from './todos.service';
import { Todo as TodoEntity } from './todo.model';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}
  
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findUserTodos(@Request() req): Promise<TodoEntity[]> {
    // get all todos for a user in the db    
    return this.todoService.findUserTodos(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() todo: CreateTodoDto, @Request() req): Promise<TodoEntity> {
    // create a new todo and return the newly created todo    
    return await this.todoService.create(todo, req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(@Param('id') id: number, @Body() todo: UpdateTodoDto, @Request() req) {
    // get the number of row affected and the updated todo
    return await this.todoService.update(id,todo,req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    // delete the todo with this id
    return await this.todoService.delete(id, req.user.id);
  }
}
