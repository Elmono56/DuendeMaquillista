const express = require("express");
const subCategorySchema = require("../models/subcategory");

const router = express.Router();

//create subCategory
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