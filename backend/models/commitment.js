const mongoose = require('mongoose');
const commitmentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String, // 'Entrega', 'Maquillaje' o 'Curso/Taller'
        required: true
    },
    description:{
        type: String,
        required: false
    },
    userDetail:{
        type: Array,
        required: false
    },
    deadline:{
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: false
    },
    status:{
        type: String,
        required: true
    },

});
module.exports = mongoose.model('Commitment', commitmentSchema);