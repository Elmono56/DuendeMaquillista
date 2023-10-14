const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    cantStock:{
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    image: {
        type: String, //cambiar por Image
        required: true

    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    subcategory:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Product", productSchema);