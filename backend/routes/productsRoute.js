const express = require("express");
const productSchema = require("../models/product");
const multer = require("multer");
const router = express.Router();
const storage = multer.memoryStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage }).single("image");


//add product
router.post("/addProduct", (req, res) => {
  upload(req,res,(err) => {
    if(err){
      console.log(err);
    }
    else{
      const newProduct = new productSchema({
        name: req.body.name,
        price: req.body.price,
        cantStock: req.body.cantStock,
        status: req.body.status,
        description: req.body.description,
        category: req.body.category,
        subCategory: req.body.subCategory,
        imageURL:{
          data: req.file.buffer,
          contentType: "image/png"
        }
      });
      newProduct.save()
      .then(() =>res.status(200).json({message: "Producto agregado"}))
      .catch((err) => res.status(400).json({message: err}));
    }
  })
});

// get all products
router.get("/getProducts", async (req, res) => {
  try {
    const products = await productSchema.find();
    res.status(200).json(products.name);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//modify a product
router.put("/modifyProduct", async (req, res) => {
  const {
    name,
    price,
    cantStock,
    status,
    image,
    description,
    category,
    subCategory,
  } = req.body;
  const product = await productSchema.findOne({ name });
  if (product) {
    await productSchema.updateOne(
      { _id: product._id },
      {
        $set: { price, cantStock, status, image, description, category, subCategory },
      }
    );
    res.status(200).json({ Mensaje: "Producto Actualizado" });
  } else {
    res.status(400).json({ Mensaje: "No se pudo actulizar el producto" });
  }
});

//get a single product
router.get("/getProduct", async (req, res) => {
  const { name } = req.body;
  const product = await productSchema.findOne({ name });
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ Mensaje: "Producto no encontrado" });
  }
});

//change visibility
router.put("/setProductVisible", async (req, res) => {
  const { name, status } = req.body;
  const product = await productSchema.findOne({ name });
  if (product) {
    await productSchema.updateOne({ _id: product._id }, { $set: { status } });
    res.status(200).json({ Mensaje: "Visibilidad del Producto Actualizada" });
  } else {
    res.status(404).json({ Mensaje: "No se encontró el producto" });
  }
});

//update quantity
router.put("/updateQuantity", async (req, res) => {
  const { name, flag } = req.body;
  const product = await productSchema.findOne({ name });
  if (product) {
    var quantity = product.cantStock;
    if (flag) {
      quantity = quantity + 1;
    } else {
      quantity = quantity - 1;
      if (quantity == -1) {
        return res
          .status(400)
          .json({ Mensaje: "No hay más unidades disponibles" });
      }
    }
    await productSchema.updateOne(
      { _id: product._id },
      { $set: { cantStock: quantity } }
    );
    res
      .status(200)
      .json({
        Mensaje: "Visibilidad del Producto Actualizada",
        "Cantidad actual": quantity,
      });
  } else {
    res.status(404).json({ Mensaje: "No se encontró el producto" });
  }
});

module.exports = router;
