import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtAuthGuard } from '../config/jwt-auth.guard';
import { UserService } from '../user/user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private userService: UserService,
  ) {}

  //@UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async profile(@Request() req) {
    console.log('123', req.user);
    const userDB = await this.userService.findOneByEmail(req.user.email);
    return userDB;
  }
}
