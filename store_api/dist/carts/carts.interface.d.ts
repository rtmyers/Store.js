import { Document } from 'mongoose';
export interface Carts extends Document {
    readonly items: [object];
}
