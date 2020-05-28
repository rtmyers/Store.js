import { Carts } from './interfaces/carts.interface';
export declare class CartsService {
    private readonly carts;
    find(): Carts[];
    findById(id: any): Carts[];
    create(cart: Carts): void;
    add(id: any, cartIn: any): Promise<any>;
    remove(id: any): Promise<any>;
}
