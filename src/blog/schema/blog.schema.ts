import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Category } from '../../category/schema/category.schema';
import * as mongoose from 'mongoose';
import { User } from '../../auth/user/schema/user.schema';
import { ApiProperty } from '@nestjs/swagger';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
  @ApiProperty()
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  name: string;

  @ApiProperty()
  @Prop()
  subtitle: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop()
  content: string;

  @ApiProperty()
  @Prop({
    default: 0,
  })
  views: number;

  @ApiProperty()
  @Prop({
    default: 0,
  })
  reading: number;

  @ApiProperty()
  @Prop({
    default: 0,
  })
  likes: number;

  @ApiProperty()
  @Prop()
  slug: string;

  @ApiProperty()
  @Prop()
  image: string;

  @ApiProperty()
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  })
  category: Category;

  @ApiProperty()
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  user: User;

  @ApiProperty()
  @Prop({
    default: false,
  })
  status: boolean;

  @ApiProperty()
  @Prop({
    default: Date.now(),
  })
  created_atd: Date;

  @ApiProperty()
  @Prop({
    default: Date.now(),
  })
  updated_at: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
