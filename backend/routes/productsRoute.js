const express = require("express");
const productSchema = require("../models/product");

const router = express.Router();

//add product
router.post("/addProduct", (req, res) => {
    const product = productSchema(req.body);
    product
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// get all products
router.get("/getProducts",async (req,res)=>{
  const productos = await productSchema.find();
  if (productos){
    res.status(200).json(productos);
  }
  else{
    res.status(404).json({Mensaje:"No hay productos registrados"})
  }
});

//modify a product
router.put("/modifyProduct", async (req, res)=>{
  const {name, price, cantStock, status, image, description, category, brand} = req.body;
  const product = await productSchema.findOne({name});
  if (product){
    await productSchema.updateOne({ _id: product._id }, { $set: { price, cantStock, status, image, description, category, brand } });
    res.status(200).json({Mensaje: "Producto Actualizado"});
  }
  else{
    res.status(400).json({Mensaje: "No se pudo actulizar el producto"});
  }
});

//get a single product
router.get("/getProduct", async (req,res)=>{
  const {name} = req.body;
  const product = await productSchema.findOne({name});
  if (product){
    res.status(200).json(product);
  }
  else{
    res.status(404).json({Mensaje:"Producto no encontrado"});
  }
})

module.exports = router;