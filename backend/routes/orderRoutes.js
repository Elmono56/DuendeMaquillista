const express = require("express");
const orderSchema = require("../models/order.js");
const Database = require("../routes/singleton");
const database = Database.getInstance();

const router = express.Router();

//add product
router.post("/createOrder", async (req, res) => {
  await database.connect();
  const { user_id, products, address, pay, voucher } = req.body;
  console.log(req.body);
  const order = orderSchema(req.body);
  order
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
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
  console.log(req.body);
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