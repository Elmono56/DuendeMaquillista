const mongoose = require("mongoose");
const agendaEventSchema = mongoose.Schema({
    id:
{
    type: Number,
    required: true
},
userID: {
    type: String,
    required: true
},
addresID: {
    type: String,
    required: true
},
startTime: {
    type: Date,
    required: true
},
finishTime:{
    type: Date,
    required: true
},
type:
{
    type: String,
    required: true
},
});
module.exports = mongoose.model("AgendaEvent", agendaEventSchema);