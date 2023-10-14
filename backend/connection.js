const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const portDefault = 4000;
dotenv.config();
const app = express();
const port = process.env.PORT || portDefault;

//rutas
const userRoutes = require("./routes/usersRoute");
const productRoutes = require("./routes/productsRoute");
app.get("/", (req, res) => {
  res.send("API for Duende Maquillista");
});

//middlewares
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api" ,productRoutes);

//mongodb connection
mongoose.connect("mongodb+srv://axelchavesr:tGfpOZBhreznmEQU@cluster0.jqlfuzl.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
app.listen(port, () => console.log(`Server running on port ${port}`));
