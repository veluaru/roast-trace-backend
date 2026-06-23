import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TastingsService } from './tastings.service';
import { CreateTastingDto } from './dto/create-tasting.dto';
import { UpdateTastingDto } from './dto/update-tasting.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('tastings')
export class TastingsController {
  constructor(private readonly tastingsService: TastingsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createTastingDto: CreateTastingDto, @GetUser() user: { userId: string; email: string }) {
    return this.tastingsService.create(createTastingDto, user.userId);
  }

  @Get()
  findAll() {
    return this.tastingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tastingsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTastingDto: any) {
    return this.tastingsService.update(id, updateTastingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tastingsService.remove(id);
  }
}
