const express = require("express");
const subcategorySchema = require("../models/subcategory");
const categorySchema = require("../models/category");

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

module.exports = router;