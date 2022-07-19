import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { TodosModule } from './modules/todos/todos.module';
import configiration from '../config';


@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configiration] }),
    UsersModule,
    AuthModule,
    TodosModule,
  ],
})
export class AppModule {}
