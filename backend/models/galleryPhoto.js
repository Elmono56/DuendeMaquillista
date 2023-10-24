const mongoose = require("mongoose");
const galleryPhotoSchema = mongoose.Schema({

name:{
    type: String,
    required: true,
    unique: true,
},

imageURL:{
    type: String,
    required: true,
},
description: {
    type: String,
    required: true
},
dateUpload:{
    type: Date, //'yy-mm-dd'
    required: true
},
status:
{
    type: String,
    required: true
},
tags: {
    type: Array,
    required: true
},
categories: {
    type: Array,
    required: true
},
subCategories: {
    type: Array,
    required: true
}
});
module.exports = mongoose.model("GalleryPhoto", galleryPhotoSchema);