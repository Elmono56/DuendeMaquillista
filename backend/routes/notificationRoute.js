const express = require("express");
const notificationSchema = require("../models/notification");

const router = express.Router();
const Database = require("../routes/singleton");
const database = Database.getInstance();

// create a notification
router.post("/createNotification", async (req, res) => {
  await database.connect();
  const notification = notificationSchema(req.body);
  notification
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all notifications
router.get("/getAllNotifications", async (req, res) => {
  await database.connect();
  const notification = await notificationSchema.find();
  if (notification) {
    res.status(200).json(notification);
  } else {
    res.status(404).json({ Mensaje: "No hay notificaciones" });
  }
});



module.exports = router;