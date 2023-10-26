const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create user
router.post("/createUser", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update/recover password
router.put("/updatePassword", async (req, res)=>{
  const {email,newPassword} = req.body;
  const user = await userSchema.findOne({email});
  if (user){
    await userSchema.updateOne({ _id: user._id }, { $set: { password: newPassword } });
    res.status(200).json({Mensaje: "Contraseña actualizada"});
  }

});

// update user
router.put("/updateUser", async (req, res) => {
  const updateFields = {};
  const { id, name, lastName, email, password } = req.body;

  // Verificar si los campos no son vacíos y actualizar el objeto updateFields
  if (name) updateFields.name = name;
  if (lastName) updateFields.lastName = lastName;
  if (email) updateFields.email = email;
  if (password) updateFields.password = password;

  const user = await userSchema.findById(id);

  if (user) {
    await userSchema.updateOne({ _id: user._id }, { $set: updateFields });
    res.status(200).json({ Mensaje: "Usuario actualizado" });
  } else {
    res.status(404).json({ Mensaje: "Usuario no encontrado" });
  }
});


// get user
router.get("/getUser", async (req, res) => {
  const { id } = req.query;
  const user = await userSchema.findById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ Mensaje: "Usuario no encontrado" });
  }
});

//"delete" user
router.put("/deleteProfile", async (req,res)=>{
  const {email} = req.body;
  const user = await userSchema.findOne({email});
  if (user){
    await userSchema.updateOne({ _id: user._id }, { $set: { status: "Eliminado"  } });
    res.status(200).json({Mensaje: "Perfil Eliminado"});
  }
  else{
    res.status(404).json({Mensaje:"Usuario no encontrado"})
  }
})

module.exports = router;
