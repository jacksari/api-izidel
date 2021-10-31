import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty()
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string;

  @ApiProperty()
  @Prop()
  password: string;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  lastname: string;

  @ApiProperty()
  @Prop()
  slug: string;

  @ApiProperty()
  @Prop()
  image: string;

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

export const UserSchema = SchemaFactory.createForClass(User);
