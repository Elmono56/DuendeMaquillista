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
status:
{
    type: String,
    required: true
},
tags: {
    type: String,
    required: true
},
category: {
    type: String,
    required: true
},
subCategory: {
    type: String,
    required: true
}
});
module.exports = mongoose.model("GalleryPhoto", galleryPhotoSchema);