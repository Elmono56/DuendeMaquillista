const mongoose = require("mongoose");
const agendaEventSchema = mongoose.Schema({
    id:
{
    type: Number,
    required: true
},
date: {
    type: Date,
    required: true
},
user: {
    type: Number,
    required: true
},
location: {
    type: Number,
    required: true
},
duration: {
    type: Number,
    required: true
},
startTime: {
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