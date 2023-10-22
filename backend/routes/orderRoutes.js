const express = require("express");
const orderSchema = require("../models/order.js");

const router = express.Router();

//add product
router.post("/createOrder", (req, res) => {
    const order = orderSchema(req.body);
    order
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// get all products
router.get("/getOrders",async (req,res)=>{
  const orders = await orderSchema.find();
  if (orders){
    res.status(200).json(orders);
  }
  else{
    res.status(404).json({Mensaje:"No hay ordenes registradas"})
  }
});

//get a single product
router.get("/getOrder", async (req,res)=>{
    const {shopCartID} = req.body;
    const order = await orderSchema.findOne({shopCartID});
    if (order){
      res.status(200).json(order);
    }
    else{
      res.status(404).json({Mensaje:"Orden no encontrado"});
    }
  });

  //change visibility to visible
router.put("/updateOrderStatus", async (req, res)=>{
    const {shopCartID, status} = req.body;
    const order = await orderSchema.findOne({shopCartID});
    if (order){
      await orderSchema.updateOne({ _id: order._id }, { $set: {status} });
      res.status(200).json({Mensaje: "Estado del producto actualizado a: ", status});
    }
    else{
      res.status(404).json({Mensaje: "No se encontró la orden"});
    }
  });

module.exports = router;