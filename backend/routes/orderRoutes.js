const express = require("express");
const orderSchema = require("../models/order.js");
const Database = require("../routes/singleton");
const database = Database.getInstance();

const router = express.Router();

//add product
router.post("/createOrder", async (req, res) => {
  await database.connect();
  const order = orderSchema(req.body);
  order
    .save()
    .then((data) => res.json(data))
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error al guardar datos" });
    }
    );
});

// get all products
router.get("/getOrders", async (req, res) => {
  await database.connect();
  const orders = await orderSchema.find({ status: "En Espera" });
  if (orders) {
    res.status(200).json(orders);
  }
  else {
    res.status(404).json({ Mensaje: "No hay ordenes registradas" })
  }
});

//get all products for users
router.get("/getOrdersById", async (req, res) => {
  await database.connect();
  const { user_id } = req.query;
  const orders = await orderSchema.find({ user_id });
  if (orders) {
    res.status(200).json(orders);
  }
  else {
    res.status(404).json({ Mensaje: "No hay ordenes registradas" })
  }
});

//get a single product
router.get("/getOrder", async (req, res) => {
  await database.connect();
  const { id } = req.query;
  const order = await orderSchema.findById(id);
  if (order) {
    res.status(200).json(order);
  }
  else {
    res.status(404).json({ Mensaje: "Orden no encontrado" });
  }
});

//change visibility to visible
router.put("/updateOrderStatus", async (req, res) => {
  await database.connect();
  const { id, status } = req.body;
  const order = await orderSchema.findById(id);
  if (order) {
    await orderSchema.updateOne({ _id: order._id }, { $set: { status } });
    res.status(200).json({ Mensaje: "Estado del producto actualizado a: ", status });
  }
  else {
    res.status(404).json({ Mensaje: "No se encontró la orden" });
  }
});

module.exports = router;