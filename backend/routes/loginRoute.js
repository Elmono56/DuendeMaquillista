const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//do log in
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userSchema.findOne({ email });

  //usuario existe
  if (user) {
    //contraseña no coinciden (deberíamos cifrarlas)
    if (password !== user.password) {
      console.log(password);
      console.log(user.password);
      res.status(401).json({ Mensaje: "La contraseña no es válida" });
    }
    //todo bien
    else{
      res.status(200).json(user);
    }
  }
  //no existe el usuario (email)
  else {
    res.status(404).json({ Mensaje: "Usuario no existe / email no coincide" });
  }
});

module.exports = router;