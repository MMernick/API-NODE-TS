import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  senha?: string;

  constructor(data: Partial<UpdateUserDto>) {
    Object.assign(this, data);
  }
}
