import { Document } from 'mongoose';

export interface Carts extends Document {
  readonly _id: String;
  items: [{
    _id: String,
    name: String,
    description: String,
    price: String,
    image: String,
    type: String
  }],
  readonly created_at: Date;
}