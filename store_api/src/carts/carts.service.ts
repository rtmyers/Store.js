import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Carts } from './interfaces/carts.interface';
import { UpdateCartsDto } from './dto/update-carts.dto';

@Injectable()
export class CartsService {
	constructor(@InjectModel('Carts') private readonly cartsModel: Model<Carts>) { }

	async findAll(): Promise<Carts[]> {
		return await this.cartsModel.find().exec();
	}

	async findById(id: string): Promise<Carts> {
		return await this.cartsModel.findById(id).exec();
  }

  async add(updateCartsDto: UpdateCartsDto): Promise<void> {
		const newCart = await new this.cartsModel({ items: [ updateCartsDto]});
		newCart.save();
	}

	async create(updateCartsDto: UpdateCartsDto): Promise<void> {
		const newCart = await new this.cartsModel({ items: [ UpdateCartsDto ]});
		newCart.save();
	}

  async remove(id: string): Promise<any> {
		const removedCart = await this.cartsModel
			.findByIdAndRemove(id).exec();
		return removedCart;
	}

}
