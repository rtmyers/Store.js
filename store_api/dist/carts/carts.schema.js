"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsSchema = void 0;
const mongoose = require("mongoose");
exports.CartsSchema = new mongoose.Schema({
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
});
//# sourceMappingURL=carts.schema.js.map