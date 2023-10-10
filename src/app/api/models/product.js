const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
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
    imageURL: {
        type: String,
        required: true

    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: Number,
        required: true
    },
    subcategory:{
        type: Number,
        required: true
    }
});
