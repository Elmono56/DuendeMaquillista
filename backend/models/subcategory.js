const mongoose = require('mongoose');
const subcategorySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    upperC: {
        type: String,
        required: true
    }
});