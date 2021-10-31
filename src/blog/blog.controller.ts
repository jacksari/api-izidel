import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    const blogExist = await this.blogService.findOneByName(createBlogDto.name);
    if (blogExist) {
      return new NotFoundException({
        ok: false,
        message: 'El nombre de ese blog ya existe',
      });
    }
    return this.blogService.create(createBlogDto);
  }

  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const blogExist = await this.blogService.findOne(id);
    if (!blogExist) {
      return new NotFoundException({
        ok: false,
        message: 'El blog con ese id no existe',
      });
    }
    return blogExist;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const blogExist = await this.blogService.findOne(id);
    if (!blogExist) {
      return new NotFoundException({
        ok: false,
        message: 'El blog con ese id no existe',
      });
    }
    return this.blogService.remove(id);
  }
}
