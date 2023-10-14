const mongoose = require("mongoose");
const galleryPhotoSchema = mongoose.Schema({
    id:
{
    type: Number,
    required: true
},
url:{
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
dateR:{
    type: Date,
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