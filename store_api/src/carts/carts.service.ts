import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Carts } from './interfaces/carts.interface';
import { UpdateCartsDto } from './dto/update-carts.dto';

@Injectable()
export class CartsService {
	constructor(@InjectModel('Carts') private cartsModel: Model<Carts>) { }

	async findAll(): Promise<Carts[]> {
		return this.cartsModel.find({ new: true }).exec();
	}

	async findById(id): Promise<any> {
		return this.cartsModel.findById(id, { new: true }).exec();
  	}

  	async update(cartsID, updateCartsDto: UpdateCartsDto): Promise<Carts> {
		return this.cartsModel.findByIdAndUpdate(cartsID, updateCartsDto, { new: true }).exec();
	}

	async create(updateCartsDto: UpdateCartsDto): Promise<Carts> {
		return new this.cartsModel(updateCartsDto).save();
	}

  	async remove(id): Promise<any> {
		return this.cartsModel.findByIdAndRemove(id);
	}
}
