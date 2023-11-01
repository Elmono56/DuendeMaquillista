const express = require("express");
const addressSchema = require("../models/address.js");
const Database = require("../routes/singleton");
const database = Database.getInstance();

const router = express.Router();

//create address
router.post("/createAddress", async (req, res) => {
    await database.connect();
    const address = addressSchema(req.body);
    address
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//modify addres
router.put("/updateAddress", async (req, res)=>{
    await database.connect();
    const {userID, city, district, details} = req.body;
    const address = await addressSchema.findOne({userID});
    if (address){
      await addressSchema.updateOne({ _id: address._id }, { $set: {city, district, details} });
      res.status(200).json({Mensaje: "Dirección de entrega actualizada"});
    }
    else{
      res.status(404).json({Mensaje: "No se encontró la dirección"});
    }
  });

module.exports = router;