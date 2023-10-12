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

router.get("/user",(req, res)=>{
  const {id} = req.params;
  userSchema.remove({__id:id})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

module.exports = router;
