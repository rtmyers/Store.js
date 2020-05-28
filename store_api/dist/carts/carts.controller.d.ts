import { CartsService } from './carts.service';
import { UpdateCartsDto } from './dto/update-carts.dto';
export declare class CartsController {
    private readonly cartService;
    constructor(cartService: CartsService);
    getCarts(id: string): object;
    update(id: string, updateCartsDto: UpdateCartsDto): Promise<UpdateCartsDto>;
}
