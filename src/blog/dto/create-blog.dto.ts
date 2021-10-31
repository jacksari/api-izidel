import { Category } from '../../category/schema/category.schema';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../auth/user/schema/user.schema';

export class CreateBlogDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  subtitle: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  reading: number;
  @ApiProperty()
  image: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  category: Category;
  @ApiProperty()
  user: User;
}
