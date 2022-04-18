const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  
  orderItems: [
    {
      nameProd: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "product",
      },
    },
  ],

  taxPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  }
  
});

module.exports = mongoose.model("cart", cartSchema);
