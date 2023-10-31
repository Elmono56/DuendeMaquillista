const express = require("express");
const galPhoto = require("../models/galleryPhoto");
const router = express.Router();

//add image
router.post("/addGalPhoto", (req, res) => {
    const product = galPhoto(req.body);
    product
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


//modify a photo in gallery
router.put("/modifyGalPhoto", async (req, res)=>{
  const {name, imageURL, description, dateUpload, status, tags, categories, subCateogries} = req.body;
  const photo = await galPhoto.findOne({name});
  if (photo){
    await galPhoto.updateOne({ _id: photo._id }, { $set: { imageURL, description, dateUpload, status, tags, categories, subCateogries} });
    res.status(200).json({Mensaje: "Imagen Actualizada"});
  }
  else{
    res.status(400).json({Mensaje: "No se pudo actulizar la imagen"});
  }
});

//get all gallery photos
router.get("/getGalPhotos", async (req,res)=>{
  const photos = await galPhoto.find();
  if (photos){
    res.status(200).json(photos);
  }
  else{
    res.status(404).json({Mensaje: "No se encontraron imagenes"});
  }
});

//get a single gallery photo
router.get("/getGalPhoto", async (req,res)=>{
  const {id} = req.query;
  const photo = await galPhoto.findById(id);
  if (photo){
    res.status(200).json(photo);
  }
  else{
    res.status(404).json({Mensaje:"Imagen no encontrado"});
  }
});

//change visibility to visible
router.put("/setImageVisibility", async (req, res)=>{
  const {name, status} = req.body;
  const photo = await galPhoto.findOne({name});
  if (photo){
    await galPhoto.updateOne({ _id: photo._id }, { $set: {status} });
    res.status(200).json({Mensaje: "Visibilidad de la Imagen fue Actualizada"});
  }
  else{
    res.status(404).json({Mensaje: "No se encontró la imagen"});
  }
});

module.exports = router;