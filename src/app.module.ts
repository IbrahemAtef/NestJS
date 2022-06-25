import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
})
export class AppModule {}
