const express = require("express");
const productSchema = require("../models/product");

const router = express.Router();

//add product
router.post("/product", (req, res) => {
    const product = productSchema(req.body);
    product
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// get todos productos
router.get("/getProducts",async (req,res)=>{
  const productos = await productSchema.find();
  if (productos){
    res.status(200).json(productos);
  }
  else{
    res.status(404).json({Mensaje:"No hay productos registrados"})
  }
})


module.exports = router;