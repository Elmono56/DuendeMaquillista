const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  products: {
    type: Array, //{{productName,quantity},{productName,quantity}}
    required: false,
    default: [],
  },
  address: {
    type: String,
    required: true,
  },
  pay: {
    type: Number,
    required: true,
  },
  voucher: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "En Espera",
  },
});
module.exports = mongoose.model("Order", orderSchema);
