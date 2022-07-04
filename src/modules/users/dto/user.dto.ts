// import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

// enum GenderEnum {
//   MALE = 'MALE',
//   FEMALE = 'FEMALE',
// }

// export class UserDto {
//   @IsNotEmpty()
//   readonly name: string;

//   @IsNotEmpty()
//   @IsEmail()
//   readonly email: string;

//   @IsNotEmpty()
//   @MinLength(6)
//   readonly password: string;

//   @IsNotEmpty()
//   @IsEnum(GenderEnum, {
//     message: 'gender must be either MALE or FEMALE',
//   })
//   readonly gender: GenderEnum;
// }
