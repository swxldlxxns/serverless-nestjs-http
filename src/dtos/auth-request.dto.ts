import { IsNotEmpty, IsString } from 'class-validator';

export class AuthRequestDto {
  @IsString()
  @IsNotEmpty()
  readonly string: string;
}
