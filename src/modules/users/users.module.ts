import { JwtStrategy } from './controllers/jwt.strategy';
import { LocalStrategy } from './controllers/local.strategy';
import { AuthController } from './controllers/auth.controller';
import { Module } from '@nestjs/common';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

require('dotenv').config()

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
  providers: [UsersService, ...usersProviders, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [UsersService],
})
export class UsersModule {}
