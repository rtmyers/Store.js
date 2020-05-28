import * as mongoose from 'mongoose'

export const CartsSchema = new mongoose.Schema({
  items: [
    {
      id: Number,
      name: String,
      description: String,
      price: Number,
      image: String,
      type: String,
      button: {
        text: String
      }
    }
  ],
  created_at: { type: Date, default: Date.now }
})
