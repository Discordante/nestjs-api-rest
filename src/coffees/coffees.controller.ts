import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavours')
  findAll() {
    return 'This action returns all coffees';
  }

  /* @Get(':id')
  findOne(@Param() params) {
    return `This action returns #${params.id} coffee`;
  } */

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }
}
