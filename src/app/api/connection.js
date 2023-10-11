const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const userRoutes = require("./routes/users");
//middlewares
app.use(express.json());
app.use("/api", userRoutes);
//routes
app.get("/", (req, res) => {
  res.send("API for Duende Maquillista");
});
//mongodb connection
mongoose.connect("mongodb+srv://axelchavesr:tGfpOZBhreznmEQU@cluster0.jqlfuzl.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
app.listen(port, () => console.log(`Server running on port ${port}`));
