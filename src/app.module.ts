import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { AuthModule } from './auth/auth/auth.module';
import { UploadModule } from './upload/upload.module';
import { ContactModule } from './contact/contact.module';
import { NewsletterModule } from './newsletter/newsletter.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jacksari:Shingekino123@cluster0.nclr5.mongodb.net/blog-izidel',
    ),
    CategoryModule,
    BlogModule,
    AuthModule,
    UploadModule,
    ContactModule,
    NewsletterModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
