const mongoose = require("mongoose");
const { Schema } = mongoose;

export default new Schema({
  image: String,
  name: String,
  discount: Number,
  discountPrice: Number,
  price: Number,
  rating: Number
});
