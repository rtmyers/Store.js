import { Document } from 'mongoose';
export interface Carts extends Document {
    items: [ArrayBuffer];
    readonly created_at: Date;
}
