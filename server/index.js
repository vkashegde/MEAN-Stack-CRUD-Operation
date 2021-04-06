const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
const route = require("./route/route.js");

mongoose.connect("mongodb://localhost:27017/shoppinglist");
mongoose.connection.on("connected", () => {
  console.log("Conected to mongodb");
});

mongoose.connection.on("error", (err) => {
  console.log("Cant connect to datbase", err);
});

app.use(cors());
app.use(bodyparser.json());

app.use("/api", route);

app.get("/", (req, res) => {
  res.send("Roger thart");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
