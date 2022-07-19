import { IsNotEmpty, MinLength, IsBoolean, IsString } from 'class-validator';

export class TodoDto {
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
