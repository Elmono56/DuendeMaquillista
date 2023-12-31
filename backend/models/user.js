const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
name: {
    type: String,
    required: true,
    default: null
},
lastName: {
    type: String,
    required: true,
    default: null
},
email:{
    type: String,
    unique: true,
    required: true
},
password:{
    type: String,
    required: true
},
status:{
    type: String,
    required: true
},
isAdmin:{
    type: Boolean,
    default: false
}
});
module.exports = mongoose.model("User", userSchema);