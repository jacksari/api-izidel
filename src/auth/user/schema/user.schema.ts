import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  lastname: string;

  @Prop()
  slug: string;

  @Prop()
  image: string;

  @Prop({
    default: false,
  })
  status: boolean;

  @Prop({
    default: Date.now(),
  })
  created_atd: Date;

  @Prop({
    default: Date.now(),
  })
  updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
