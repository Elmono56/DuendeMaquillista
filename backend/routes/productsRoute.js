const express = require("express");
const productSchema = require("../models/product");
const categorySchema = require("../models/categoryShop");
const subCategorySchema = require("../models/subcategoryShop");
const Database = require("../routes/singleton");
const database = Database.getInstance();
const multer = require("multer");
const router = express.Router();
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage }).single("image");


//add product
router.post("/addProduct", async (req, res) => {
  await database.connect();
  const { name, price, cantStock, status, imageURL, description, category, subCategory } = req.body;
  const categoryExists = await categorySchema.findOne({ name: category });
  if (!categoryExists) return res.status(400).json({ message: "La categoría no existe" });

  const subCategoryExists = await subCategorySchema.findOne({ name: subCategory, upperC: category });
  if (!subCategoryExists) return res.status(400).json({ message: "La subcategoría especificada no existe o no es una subcategoría de la categoría proporcionada." });

  const productNameExists = await productSchema.findOne({ name });
  if (productNameExists) return res.status(400).json({ message: "El producto ya existe" });

  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all products
router.get("/getProducts", async (req, res) => {
  await database.connect();
  try {
    const products = await productSchema.find({status: true});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//modify a product
router.put("/modifyProduct", async (req, res) => {
  await database.connect();
  const {
    name,
    price,
    cantStock,
    status,
    imageURL,
    description,
    category,
    subCategory,
  } = req.body;
  const product = await productSchema.findOne({ name });
  if (product) {
    await productSchema.updateOne(
      { _id: product._id },
      {
        $set: { price, cantStock, status, imageURL, description, category, subCategory },
      }
    );
    res.status(200).json({ Mensaje: "Producto Actualizado" });
  } else {
    res.status(400).json({ Mensaje: "No se pudo actulizar el producto" });
  }
});

//get a single product
router.get("/getProduct", async (req, res) => {
  await database.connect();
  const { name } = req.body;
  const product = await productSchema.findOne({ name });
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ Mensaje: "Producto no encontrado" });
  }
});

// get product by id
router.get("/getProductById", async (req, res) => {
  await database.connect();
  const { id } = req.query;
  const product = await productSchema.findById(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ Mensaje: "Producto no encontrado" });
  }
});

//change visibility
router.put("/setProductVisible", async (req, res) => {
  await database.connect();
  const { id, status } = req.body;
  console.log(id, status)
  const product = await productSchema.findById(id);
  if (product) {
    await productSchema.updateOne({ _id: product._id }, { $set: { status } });
    res.status(200).json({ Mensaje: "Visibilidad del Producto Actualizada" });
  } else {
    res.status(404).json({ Mensaje: "No se encontró el producto" });
  }
});

//update quantity
router.put("/updateQuantity", async (req, res) => {
  await database.connect();
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
