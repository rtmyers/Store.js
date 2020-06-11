import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Carts } from './interfaces/carts.interface';
import { UpdateCartsDto } from './dto/update-carts.dto';

@Injectable()
export class CartsService {
	constructor(@InjectModel('Carts') private cartsModel: Model<Carts>) { }

	async findAll(): Promise<Carts[]> {
		return this.cartsModel.find({ new: true}).exec();
	}

	async findById(id): Promise<any> {
		const cart = await this.cartsModel.findById(id, { new: true}).exec();
		let _cart = [];
		return _cart; //cart;
	}

	async update(cartsID, updateCartsDto: UpdateCartsDto): Promise<Carts> {
		const updatedCart = await this.cartsModel.findByIdAndUpdate(cartsID, updateCartsDto, { new: true }).exec();
		return updatedCart;
	}

	async create(updateCartsDto: UpdateCartsDto): Promise<Carts> {
		const newCart = await new this.cartsModel(updateCartsDto).save();
		return newCart;
	}

	async remove(id): Promise<any> {
		return this.cartsModel.findByIdAndRemove(id);
	}
}
