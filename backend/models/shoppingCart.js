const mongoose = require("mongoose");
const shoppingCartSchema = mongoose.Schema({
user_id:
{
    type: String,
    required: true
},
products:
{
    type: Array, //{{productName,quantity},{productName,quantity}}
    required: false,
    default: []
},
status:
{
    type: String,
    required: true,
    default: "En Espera"
}

});
module.exports = mongoose.model("ShoppingCart", shoppingCartSchema);