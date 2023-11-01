const express = require("express");
const subcategorySchema = require("../models/subcategoryShop");
const categorySchema = require("../models/categoryShop");
const Database = require("../routes/singleton");
const database = Database.getInstance();

const router = express.Router();

//create subCategory
router.post("/createShopSubCategory", async (req, res) => {
  await database.connect();
  const subC = subcategorySchema(req.body);
  const { name, upperC } = req.body;
  const cat = await categorySchema.findOne({ name: upperC });

  if (cat) {
    const subCatExists = await subcategorySchema.findOne({ name });
    if (subCatExists) {
      res.status(400).json({ ErrorN: 1 });
    } else {
      subC
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    }
  }
  else {
    res.status(400).json({ ErrorN: 2 });
  }
});

//get all subcategories
router.get("/getShopSubCategories", async (req, res) => {
  await database.connect();
  const subcategories = await subcategorySchema.find();
  if (subcategories) {
    res.status(200).json(subcategories);
  } else {
    res.status(404).json({ Mensaje: "No hay subcategorías registradas" });
  }
});

//get all subcategories from a category
router.get("/getShopSubCategoriesFromCategory", async (req, res) => {
  await database.connect();
  const { category } = req.query;
  const subcategories = await subcategorySchema.find({ upperC: category });
  if (subcategories) {
    res.status(200).json(subcategories);
  } else {
    res.status(404).json([], { Mensaje: "No hay subcategorías registradas" });
  }
});

module.exports = router;