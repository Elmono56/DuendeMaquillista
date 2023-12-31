const express = require("express");
const categorySchema = require("../models/categoryGal");
const Database = require("../routes/singleton");
const database = Database.getInstance();

const router = express.Router();

//create category
router.post("/createCategory", async (req, res) => {
  await database.connect();
  const newCat = categorySchema(req.body);
  const { name } = req.body;
  const cat = await categorySchema.findOne({ name });
  if (!cat) {
    newCat
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  }
  else {
    res.status(400).json({ Mensaje: "La categoría ya existe" });
  }

});

//get all categories
router.get("/getCategories", async (req, res) => {
  await database.connect();
  const categories = await categorySchema.find();
  if (categories) {
    res.status(200).json(categories);
  } else {
    res.status(404).json({ Mensaje: "No hay categorías registradas" });
  }
});

module.exports = router;