const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  subcategoryName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Subcategory", subcategorySchema);
