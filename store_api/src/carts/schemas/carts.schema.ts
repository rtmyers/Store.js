import * as mongoose from 'mongoose'

export const CartsSchema = new mongoose.Schema(
  {
    items: [
      {
        _id: String,
        name: String,
        description: String,
        price: { $type: String, required: true },
        image: String,
        type: String
      }
    ],
    created_at: { $type: Date, default: Date.now }
  }, { typeKey: '$type' }
)
