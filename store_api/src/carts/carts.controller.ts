import { Controller, Get, Param, Patch, Body, Query, Put } from '@nestjs/common';
import { CartsService } from './carts.service';
import { UpdateCartsDto } from './dto/update-carts.dto';

@Controller('carts')
export class CartsController {
    constructor(private cartsService: CartsService) {}

    @Get()
    async getCarts() {
      return this.cartsService.findAll();
    }

    @Put()
    async create(@Body() updateCartsDto: UpdateCartsDto) {
	    return this.cartsService.create(updateCartsDto);
    }

    @Patch('/:id')
    async update(
	    @Param('id') id,
	    @Body() updateCartsDto: UpdateCartsDto
    ) {
        const result = await this.cartsService.add(updateCartsDto);
        return {
            _id: '1',
            created_at: result,
            items: [result]
        };
    }
}
