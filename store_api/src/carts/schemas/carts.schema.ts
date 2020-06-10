import * as mongoose from 'mongoose'

export const CartsSchema = new mongoose.Schema(
  {
    id: String,
    items: [
      {
        _id: String,
        name: String,
        description: String,
        price: String,
        image: String,
        type: String
      }
    ],
    created_at: { $type: Date, default: Date.now }
  }, { typeKey: '$type' }
)
