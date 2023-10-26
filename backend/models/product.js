const { File } = require("buffer");
const mongoose = require("mongoose");
const { default: Image } = require("next/image");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cantStock: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
