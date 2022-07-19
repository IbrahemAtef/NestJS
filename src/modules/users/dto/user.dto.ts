import { IsNotEmpty, MinLength, IsEmail, IsEnum, IsString } from 'class-validator';

import {GenderEnum} from '../../../common/enums/gender.enum'

export class UserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsEnum(GenderEnum, {
    message: 'gender must be either MALE or FEMALE',
  })
  gender: GenderEnum;
}
