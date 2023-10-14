const mongoose = require("mongoose");
const shoppingCartSchema = mongoose.Schema({
    id:
{
    type: Number,
    required: true
},
user_id:
{
    type: Number,
    required: true
},

});