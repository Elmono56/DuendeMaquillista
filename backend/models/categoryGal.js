const mongoose =    require('mongoose');
const categoryGalSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
});
module.exports = mongoose.model('CategoryGal', categoryGalSchema);