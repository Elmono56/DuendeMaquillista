const express = require("express");
const shopCartSchema = require("../models/shoppingCart.js");
const Database = require("../routes/singleton");
const database = Database.getInstance();

const router = express.Router();
router.post("/updateShopCart", async (req, res) => {
  const { user_id, products } = req.body;

  try {
    await database.connect();

    // Buscar el carrito de compras existente del usuario con estado "En Espera"
    const existingShopCart = await shopCartSchema.findOne({ user_id, status: "En Espera" });

    if (existingShopCart) {
      // Si el carrito "En Espera" ya existe, agrega los nuevos productos
      existingShopCart.products = existingShopCart.products.concat(products);
      await existingShopCart.save();
      res.json(existingShopCart);
    } else {
      // Si no existe un carrito "En Espera" para el usuario, crea uno nuevo
      const newShopCart = new shopCartSchema({
        user_id,
        products,
        status: "En Espera",
      });

      await newShopCart.save();
      res.json(newShopCart);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


//modify a product
router.put("/changeSCstatus", async (req, res) => {
  await database.connect();
  const { user_id, status } = req.body;
  const shopCart = await shopCartSchema.findOne({ user_id });
  if (shopCart) {
    await shopCartSchema.updateOne({ _id: shopCart._id }, { $set: { status } });
    res.status(200).json({ Mensaje: "Estado del Carrito ha sido actualizado" });
  }
  else {
    res.status(400).json({ Mensaje: "No se pudo actulizar el estado del carrito" });
  }
});

//get shoppingCart for user
router.get("/getShopCart", async (req, res) => {
  await database.connect();
  const { user_id } = req.query;
  const shopCart = await shopCartSchema.findOne({ user_id, status: "En Espera" });
  if (shopCart) {
    res.status(200).json(shopCart);
  } else {
    res.status(400).json({ Mensaje: "No se pudo encontrar el carrito" });
  }
});

module.exports = router;