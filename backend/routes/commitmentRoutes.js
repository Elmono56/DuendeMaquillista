const express = require("express");
const commitmentSchema = require("../models/commitment");
const Database = require("../routes/singleton");
const database = Database.getInstance();
const router = express.Router();

//create a commitment
router.post("/createCommitment", async (req, res) => {
    await database.connect();
    const commitment = commitmentSchema(req.body);
    commitment
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all commitments
router.get("/getCommitments", async (req, res) => {
    await database.connect();
    const commitments = await commitmentSchema.find();
    if (commitments) {
        res.status(200).json(commitments);
    } else {
        res.status(404).json({ Mensaje: "No hay compromisos" });
    }
});