const express = require("express");
const shopCartSchema = require("../models/shoppingCart.js");
const Database = require("../routes/singleton");
const database = Database.getInstance();

const router = express.Router();
// //create shopCart
// router.post("/createShopCart", async (req, res) => {
//   await database.connect();
//   const shopCart = shopCartSchema(req.body);
//   shopCart
//     .save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

router.post("/updateShopCart", async (req, res) => {
  const { user_id, products } = req.body;

  try {
    await database.connect();

    console.log("user_id: " + user_id);

    // Buscar el carrito de compras existente del usuario
    const existingShopCart = await shopCartSchema.findOne({user_id});

    if (existingShopCart) {
      // Si el carrito ya existe, agrega los nuevos productos
      existingShopCart.products = existingShopCart.products.concat(products);
      await existingShopCart
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
    } else {
      // Si no existe un carrito para el usuario, crea uno nuevo
      const newShopCart = new shopCartSchema({
        user_id,
        products,
        status: "En Espera",
      });

      await newShopCart
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
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
    await shopCartSchema.updateOne({ _id: product._id }, { $set: { status } });
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
  const shopCart = await shopCartSchema.findOne({ user_id });
  if (shopCart) {
    res.status(200).json(shopCart);
  } else {
    res.status(400).json({ Mensaje: "No se pudo encontrar el carrito" });
  }
});

module.exports = router;