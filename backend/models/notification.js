const mongoose = require("mongoose");
const notificationSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Notification", notificationSchema);