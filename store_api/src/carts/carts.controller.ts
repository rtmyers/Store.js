import {
    Controller,
    Get,
    Param,
    Patch,
    Body,
    Put,
    HttpException
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { UpdateCartsDto } from './dto/update-carts.dto';

@Controller('carts')
export class CartsController {
    constructor(private cartsService: CartsService) { }

    @Get()
    async getCarts() {
        return this.cartsService.findAll();
    }

    @Get('/:id')
    async getCart(@Param('id') id) {
        if (!id) throw new HttpException('Missing ID parameter', 400);
        const tt = await this.cartsService.findById(id);
        return tt;
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
        if (!id) throw new HttpException('Missing ID parameter', 400);
        return this.cartsService.update(id, updateCartsDto);
    }
}
