import { IsNotEmpty, MinLength, IsEmail, IsEnum, IsString, Matches } from 'class-validator';
import { MessageEnum } from '../../../common/enums/message.enum'
import {GenderEnum} from '../../../common/enums/gender.enum'
import {PATTERN} from '../../../common/constants/constants'

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  @MinLength(6)
  @Matches(PATTERN, {message: MessageEnum.WEAK_PASSWORD})
  password: string;

  @IsNotEmpty()
  @IsEnum(GenderEnum, {
    message: MessageEnum.checkGender,
  })
  gender: GenderEnum;
}
