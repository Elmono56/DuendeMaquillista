const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//crear user
router.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// actualizar/recuperar contraseña
router.put("/updateP", async (req, res)=>{
  const {email,newPassword} = req.body;
  const user = await userSchema.findOne({email});
  if (user){
    await userSchema.updateOne({ _id: user._id }, { $set: { password: newPassword } });
    res.status(200).json({Mensaje: "Contraseña actualizada"});
  }

});

module.exports = router;
