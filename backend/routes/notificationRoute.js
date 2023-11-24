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

// get all notifications for user
router.get("/getNotifications", async (req, res) => {
  await database.connect();
  const { userId } = req.query;
  const notifications = await notificationSchema.find({ userId });
  if (notifications) {
    res.status(200).json(notifications);
  }
  else {
    res.status(404).json({ Mensaje: "No hay notificaciones" })
  }
});



module.exports = router;