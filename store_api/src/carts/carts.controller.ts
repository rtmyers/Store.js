import { Controller, Get, Param, Patch, Body, Query } from '@nestjs/common';
import { CartsService } from './carts.service';
import { Carts } from './interfaces/carts.interface';
import { UpdateCartsDto } from './dto/update-carts.dto';

@Controller('carts')
export class CartsController {
    constructor(private readonly cartService: CartsService) {}

    @Get()
    getCarts(@Query('id') id: string): object {
        return this.cartService.findById(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateCartsDto: UpdateCartsDto) {
        console.log("updateCarts", updateCartsDto);
        
        const result = await this.cartService.add(id, updateCartsDto['items']);

        console.log("WATWATED", result);
        
        return updateCartsDto;
    }
}
