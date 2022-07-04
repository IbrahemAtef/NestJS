// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Param,
//   Body,
//   NotFoundException,
//   UseGuards,
//   Request,
// } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { TodosService } from './todos.service';
// import { Todo as TodoEntity } from './todo.model';
// import { TodoDto } from './dto/todo.dto';

// @Controller('todos')
// export class TodosController {
//   constructor(private readonly todoService: TodosService) {}

//   @Get(':userId')
//   async findUserTodos(@Param('userId') userId: number): Promise<TodoEntity[]> {
//     // get all todos for a user in the db
//     return await this.todoService.findUserTodos(userId);
//   }

//   // @Get(':id')
//   // async findOne(@Param('id') id: number): Promise<TodoEntity> {
//   //   // find the todo with this id
//   //   const todo = await this.todoService.findOne(id);

//   //   // if the todo doesn't exit in the db, throw a 404 error
//   //   if (!todo) {
//   //     throw new NotFoundException("This todo doesn't exist");
//   //   }

//   //   // if todo exist, return the todo
//   //   return todo;
//   // }

//   @UseGuards(AuthGuard('jwt'))
//   @Post()
//   async create(@Body() todo: TodoDto, @Request() req): Promise<TodoEntity> {
//     // create a new todo and return the newly created todo
//     return await this.todoService.create(todo, req.user.id);
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Put(':id')
//   async update(@Param('id') id: number, @Body() todo: TodoDto, @Request() req) {
//     // get the number of row affected and the updated todo
//     const { numberOfAffectedRows } = await this.todoService.update(
//       id,
//       todo,
//       req.user.id,
//     );
//     // if the number of row affected is zero,
//     // it means the todo doesn't exist in our db
    
//     if (numberOfAffectedRows === 0) {
//       throw new NotFoundException("This Todo doesn't exist or you need to change something");
//     }

//     // return the updated todo
//     return 'Successfully updated';
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Delete(':id')
//   async remove(@Param('id') id: number, @Request() req) {
//     // delete the todo with this id
//     const deleted = await this.todoService.delete(id, req.user.id);

//     // if the number of row affected is zero,
//     // then the todo doesn't exist in our db
//     if (deleted === 0) {
//       throw new NotFoundException("This Todo doesn't exist");
//     }

//     // return success message
//     return 'Successfully deleted';
//   }
// }
