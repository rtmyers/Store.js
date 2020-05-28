import { Injectable, HttpException } from '@nestjs/common';
// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';
import { Carts } from './interfaces/carts.interface';

@Injectable()
export class CartsService {
    private readonly carts: Carts[] = [];

    find(): Carts[] {
        return this.carts;
    }

    findById(id): Carts[] {
        return this.find().filter(c => c.id === id)
    }

    create(cart: Carts) {
        this.carts.push(cart)
    }

    add(id, cartIn): Promise<any> {
        return new Promise(res => {
            this.carts.push(cartIn)
            res({ items: [...this.carts]});
        })
    }

    remove(id) : Promise<any> {
        return new Promise(resolve => {
            const index = this.carts.findIndex(cart => cart.id === id);
            this.carts.splice(1, index);
            resolve(this.carts);
        });
    }

}
