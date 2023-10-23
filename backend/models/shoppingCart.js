const mongoose = require("mongoose");
const shoppingCartSchema = mongoose.Schema({
    id:
{
    type: Number,
    required: false,
},
user_id:
{
    type: Number,
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
    default: "No finalizado"
}

});