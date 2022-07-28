import { IsNotEmpty, MinLength, IsBoolean, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @MinLength(4)
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

}
