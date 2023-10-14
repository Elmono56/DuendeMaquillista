const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create user
router.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/user/:email", (req, res) => {
  const {email} = req.params;
  const {name, lastName, password, status} = req.body;
  console.log(email);
  userSchema.updateOne({email}, {name, lastName, password, status})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
})
module.exports = router;
