const mongoose =    require('mongoose');
const categoryShopSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
});
module.exports = mongoose.model('CategoryShop', categoryShopSchema);