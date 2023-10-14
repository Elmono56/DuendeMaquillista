const mongoose = require("mongoose");
const addressSchema = mongoose.Schema({
    id:
{
    type: Number,
    required: true
},
city:{
    type: String,
    required: true
},
district: {
    type: String,
    required: true
},
details: {
    type: String,
    required: true
},

});
module.exports = mongoose.model("Address", addressSchema);