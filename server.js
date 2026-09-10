const express = require("express");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();
const flowerRoutes = require("./routes/flowersRoutes");

app.use(express.json());

app.use("/flowers", flowerRoutes);

connectDB().then(
    app.listen(process.env.PORT, console.log("Server ishga tushdi")),
);
