const express = require("express");
const subcategorySchema = require("../models/subcategory");
const categorySchema = require("../models/category");
const subCategorySchema = require("../models/subcategory");

const router = express.Router();

//create subCategory
router.post("/createSubCategory", async (req, res) => {
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
router.get("/getSubCategories", async (req, res) => {
  const subcategories = await subcategorySchema.find();
  if (subcategories) {
    res.status(200).json(subcategories);
  } else {
    res.status(404).json({ Mensaje: "No hay subcategorías registradas" });
  }
});

//get all subcategories from a category
router.get("/getSubCategoriesFromCategory", async (req, res) => {
  const { category } = req.query;
  const subcategories = await subcategorySchema.find({ upperC: category });
  if (subcategories) {
    res.status(200).json(subcategories);
  } else {
    res.status(404).json([], { Mensaje: "No hay subcategorías registradas" });
  }
});
router.post("/createSubCategory", async (req, res) => {
  const newSubCat  = subCategorySchema(req.body);
  const {name} = req.body;
  const subcat = await subCategorySchema.findOne({name});
  if (!subcat){
    newSubCat
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  }
  else{
    res.status(400).json({Mensaje: "La subcategoría ya existe"});
  }
  
});

module.exports = router;