import { UsersService } from './../users.service';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import {MessageEnum} from '../../../common/enums/message.enum'



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService : UsersService) {
        super();        
    }

    async validate(username: string, password: string): Promise<any>{
        
        const user = await this.usersService.validateUser(username, password);
        
        if (!user) {
         throw new UnauthorizedException(MessageEnum.invalidCredentials);
        }
        return user;
    }
}