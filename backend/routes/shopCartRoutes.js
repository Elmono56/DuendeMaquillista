const express = require("express");
const shopCartSchema = require("../models/shoppingCart.js");
const Database = require("../routes/singleton");
const database = Database.getInstance();

const router = express.Router();
//create shopCart
router.post("/createShopCart", async (req, res) => {
  await database.connect();
  const shopCart = shopCartSchema(req.body);
  shopCart
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//modify a product
router.put("/changeSCstatus", async (req, res) => {
  await database.connect();
  const { user_id, status } = req.body;
  const shopCart = await shopCartSchema.findOne({ user_id });
  if (shopCart) {
    await shopCartSchema.updateOne({ _id: product._id }, { $set: { status } });
    res.status(200).json({ Mensaje: "Estado del Carrito ha sido actualizado" });
  }
  else {
    res.status(400).json({ Mensaje: "No se pudo actulizar el estado del carrito" });
  }
});
module.exports = router;