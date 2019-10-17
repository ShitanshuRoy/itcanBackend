const mongoose = require("mongoose");
const { Schema } = mongoose;

export default new Schema({
  items: [String],
  price: Number,
  discountPrice: Number,
  savings: Number
});
