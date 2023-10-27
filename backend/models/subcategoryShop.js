const mongoose = require('mongoose');
const subcategoryShopSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    upperC: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('SubcategoryShop', subcategoryShopSchema);