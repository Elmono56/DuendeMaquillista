const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//do logging
router.get("/users: email, password", (req, res) => {
    const {emai} = req.params;
    const {password} = req.params;
    userSchema.
        findbyEmailPass(email,password).
        then((data)=>res.json(data)).
        catch((error)=>res.json({message: error}));
});

module.exports = router;