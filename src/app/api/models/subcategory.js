const mongoose = require('mongoose');
const subcategorySchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    upperC: {
        type: Number,
        required: true
    }
});