import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeansService } from './beans.service';
import { CreateBeanDto } from './dto/create-bean.dto';
import { UpdateBeanDto } from './dto/update-bean.dto';

@Controller('beans')
export class BeansController {
  constructor(private readonly beansService: BeansService) {}

  @Post()
  create(@Body() createBeanDto: CreateBeanDto) {
    return this.beansService.create(createBeanDto);
  }

  @Get()
  findAll() {
    return this.beansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beansService.findOne(id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeanDto: UpdateBeanDto) {
    return this.beansService.update(id, updateBeanDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beansService.remove(id);
  }
}
