import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @ApiProperty()
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  name: string;

  @ApiProperty()
  @Prop()
  description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
