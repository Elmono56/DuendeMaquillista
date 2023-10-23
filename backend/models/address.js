const mongoose = require("mongoose");
const addressSchema = mongoose.Schema({
    userID:
{
    type: String,
    required: true,
    unique: true,
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