import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile, Get, Param, Res,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName } from './config';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: 'upload',
        filename: editFileName,
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file.path);
    return {
      ok: true,
      path: file.path,
    };
  }

  @Get(':imagepath')
  seeUploadedFile(@Param('imagepath') image: string, @Res() res) {
    return res.sendFile(image, { root: './upload' });
  }
}
