const express = require("express");
const subCategory = require("../models/subcategory.js");

const router = express.Router();

//create subCategory
router.post("/createSubCategory", (req, res) => {
    const subC  = subCategory(req.body);
    subC
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;