const mongoose = require('mongoose');
const subcategoryGalSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    upperC: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('SubcategoryGal', subcategoryGalSchema);
