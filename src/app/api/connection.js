const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(express.json());

//routes
app.get("/", (req,res) => {
    res.send("API for Duende Maquillista")
})

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
app.listen(port, () => console.log(`Server running on port ${port}`));