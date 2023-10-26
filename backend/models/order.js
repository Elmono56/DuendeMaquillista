const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  shopCartID: {
    type: String,
    required: true,
    unique: true,
  },
  delivery: {
    type: Date,
    required: true,
  },
  pay: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "En revision",
  },
});
module.exports = mongoose.model("Order", orderSchema);
