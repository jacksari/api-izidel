import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty()
  password: string;
  @ApiProperty()
  email: string;
}
