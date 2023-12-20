const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const product = mongoose.model("Product", Product);

module.exports = product;
