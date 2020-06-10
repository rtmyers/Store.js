import { Controller, Get, Param, Patch, Body, Query, Put } from '@nestjs/common';
import { CartsService } from './carts.service';
// import { Carts } from './interfaces/carts.interface';
import { UpdateCartsDto } from './dto/update-carts.dto';

@Controller('carts')
export class CartsController {
    constructor(private cartsService: CartsService) {}

    @Get()
    async getCarts() {
        return await this.cartsService.findAll();
    }

    @Put()
    async create(@Body() updateCartsDto: UpdateCartsDto) {
        console.log("updateCartsssss", updateCartsDto);
        const result = await this.cartsService.create(updateCartsDto);
        console.log("RESULT",  result);
        return result;
    }

    @Patch('/:id')
    async update(
            @Param('id') id,
            @Body() updateCartsDto: UpdateCartsDto
        ) {
            console.log("updateCarts", updateCartsDto, id);

            const result = await this.cartsService.update(id, updateCartsDto);

            console.log("WATWATED", result);
        
            return result;
        }
}
