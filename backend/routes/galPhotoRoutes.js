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

// get all galPhotos
router.get("/getGalPhotos",async (req,res)=>{
  const photos = await galPhoto.find();
  if (photos){
    res.status(200).json(photos);
  }
  else{
    res.status(404).json({Mensaje:"No se encontraron imágenes"})
  }
});

module.exports = router;