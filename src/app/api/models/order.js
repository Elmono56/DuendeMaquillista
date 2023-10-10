const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
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
  },
  status: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Order", orderSchema);
