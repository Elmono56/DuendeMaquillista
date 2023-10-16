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

module.exports = router;
