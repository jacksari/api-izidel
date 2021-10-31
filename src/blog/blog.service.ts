import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog, BlogDocument } from './schema/blog.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import slugify from 'slugify';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}
  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    return await this.blogModel.create({
      ...createBlogDto,
      slug: slugify(createBlogDto.name),
    });
  }

  async findAll(): Promise<Blog[]> {
    return await this.blogModel
      .find()
      .populate({
        path: 'category',
        select: 'name description',
      })
      .populate({
        path: 'user',
        select: 'name lastname image',
      })
      .exec();
  }

  async findOne(id: string): Promise<Blog> {
    return this.blogModel
      .findById(id)
      .populate({
        path: 'category',
        select: 'name description',
      })
      .populate({
        path: 'user',
        select: 'name lastname image',
      });
  }
  async findOneByName(name: string): Promise<Blog> {
    return this.blogModel.findOne({ name: name }).populate({
      path: 'category',
      select: 'name description',
    });
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  async remove(id: string): Promise<string> {
    await this.blogModel.findByIdAndDelete(id);
    return `El blog con #${id} fue eliminado`;
  }
}
