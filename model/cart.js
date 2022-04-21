const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user",
  // },
  
  cartItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      qty: { type: Number, default: 1 },
      price : Number,
      // nameProd : String,
      // image: { type: String},
    },
  ],

  // taxPrice: {
  //   type: Number,
  //   required: true,
  //   default: 0.0,
  // },
  
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  }
  
});

module.exports = mongoose.model("cart", cartSchema);
