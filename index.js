const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/mydatabase");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connection to db"));

db.once("open", () => {
  console.log("Connected to db");
});

app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
