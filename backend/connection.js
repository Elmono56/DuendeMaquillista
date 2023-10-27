const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const portDefault = 4000;
dotenv.config();
const app = express();
const port = process.env.PORT || portDefault;

//rutas
const userRoutes = require("./routes/usersRoute");
const productRoutes = require("./routes/productsRoute");
const loginRoute = require("./routes/loginRoute");
const galPhoto = require("./routes/galPhotoRoutes");
const galCategory = require("./routes/categoryGalRoutes");
const galSubCategory = require("./routes/subCategoryGalRoutes");
const shopCategory = require("./routes/categoryShopRoutes");
const shopSubCategory = require("./routes/subCategoryShopRoutes");
const orderRoutes = require("./routes/orderRoutes");
const addressRoutes = require("./routes/addressRoutes");
const shopCartRoutes = require("./routes/shopCartRoutes");
const multer = require("multer");
app.get("/", (req, res) => {
  res.send("API for Duende Maquillista");
});

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api" ,productRoutes);
app.use("/api", loginRoute);
app.use("/api", galPhoto);
app.use("/api",galCategory);
app.use("/api",galSubCategory);
app.use("/api",shopCategory);
app.use("/api",shopSubCategory);
app.use("/api",orderRoutes);
app.use("/api",addressRoutes);
app.use("/api", shopCartRoutes);
//mongodb connection
mongoose.connect("mongodb+srv://axelchavesr:tGfpOZBhreznmEQU@cluster0.jqlfuzl.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
app.listen(port, () => console.log(`Server running on port ${port}`));
