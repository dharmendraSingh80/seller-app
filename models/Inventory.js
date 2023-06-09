const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategory",
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  sp: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Inventory", inventorySchema);
