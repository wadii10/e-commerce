const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nameProd : String,
    price : Number,
    category : String,
    subCategory : String,
    image : String,
    description : String
});

module.exports = mongoose.model("product", productSchema);