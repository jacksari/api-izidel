import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../config/constants';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../config/local.strategy';
import { JwtStrategy } from '../config/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,
    PassportModule,
  ],
  exports: [AuthService],
})
export class AuthModule {}
