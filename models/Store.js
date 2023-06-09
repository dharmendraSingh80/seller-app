const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  gst: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  timings: {
    type: String,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Store", storeSchema);
