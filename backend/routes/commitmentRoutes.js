const express = require("express");
const commitmentSchema = require("../models/commitment");
const Database = require("../routes/singleton");
const database = Database.getInstance();
const router = express.Router();

//create a commitment
router.post("/createCommitment", async (req, res) => {
    await database.connect();
    const commitment = commitmentSchema(req.body);
    console.log(commitment);
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

//update a commitment
router.put("/updateCommitment", async (req, res) => {
    await database.connect();
    const updateFields = {};
    const { id, name, type, description, userDetail, deadline, startTime, endTime, status } = req.body;

    // Verificar si los campos no son vacíos y actualizar el objeto updateFields
    if (name) updateFields.name = name;
    if (type) updateFields.type = type;
    if (description) updateFields.description = description;
    if (userDetail) updateFields.userDetail = userDetail;
    if (deadline) updateFields.deadline = deadline;
    if (startTime) updateFields.startTime = startTime;
    if (endTime) updateFields.endTime = endTime;
    if (status) updateFields.status = status;

    const commitment = await commitmentSchema.findById(id);

    if (commitment) {
        await commitmentSchema.updateOne({ _id: commitment._id }, { $set: updateFields });
        res.status(200).json({ Mensaje: "Compromiso actualizado" });
    } else {
        res.status(404).json({ Mensaje: "Compromiso no encontrado" });
    }
});

//change visibility of a commitment
router.put("/changeVisibility", async (req, res) => {
    await database.connect();
    const { id, status } = req.body;
    const commitment = await commitmentSchema.findById(id);
    if (commitment) {
        await commitmentSchema.updateOne({ _id: commitment._id }, { $set: { status: status } });
        res.status(200).json({ Mensaje: "Visibilidad actualizada" });
    } else {
        res.status(404).json({ Mensaje: "Compromiso no encontrado" });
    }
});

module.exports = router;