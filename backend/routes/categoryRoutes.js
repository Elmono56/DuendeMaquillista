const express = require("express");
const category = require("../models/category.js");

const router = express.Router();

//create category
router.post("/createCategory", (req, res) => {
    const cat  = category(req.body);
    cat
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;