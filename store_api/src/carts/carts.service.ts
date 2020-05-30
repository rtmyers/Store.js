import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Carts } from './interfaces/carts.interface';
import { UpdateCartsDto } from './dto/update-carts.dto';
// import { CartsSchema } from './schemas/carts.schema';

@Injectable()
export class CartsService {
	constructor(@InjectModel('Carts') private cartsModel: Model<Carts>) { }
	// private readonly carts: Carts[] = [];

	async findAll(): Promise<Carts[]> {
		const tt = await this.cartsModel.find().exec();
		return tt;
	}

	async findById(id: string): Promise<Carts> {
		return await this.cartsModel.findById(id).exec();
  	}

  	async add(updateCartsDto: UpdateCartsDto): Promise<Carts> {
		console.log('updateCartsDto', updateCartsDto);
		// const carts = await this.findAll();
		const newCart = new this.cartsModel({ items: [ updateCartsDto]});
		const { items } = newCart;
		console.log(newCart, items);
		return await newCart.save();
	}

	async create(updateCartsDto: UpdateCartsDto): Promise<Carts> {
		console.log('updateCartsDtooo', updateCartsDto);
		const newCart = new this.cartsModel({ items: [ updateCartsDto ]});
		// await newCart.save();
		return await newCart.save();
	}


  async remove(id: string): Promise<any> {
		const removedCart = await this.cartsModel
			.findByIdAndRemove(id).exec();
		return removedCart;
	}

}
