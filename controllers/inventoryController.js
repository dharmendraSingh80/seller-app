const Inventory = require("../models/Inventory");

const addInventory = async (req, res) => {
  try {
    // Extract necessary information from the request body
    const { categoryId, subcategoryId, productName, mrp, sp, quantity } =
      req.body;

    // Create a new inventory item
    const newInventory = new Inventory({
      categoryId,
      subcategoryId,
      productName,
      mrp,
      sp,
      quantity,
    });
    await newInventory.save();

    res.status(201).json({ message: "Inventory added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getInventoryBySeller = async (req, res) => {
  try {
    // Fetch inventory items for a specific seller
    res.status(200).json({ inventory: [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch inventory" });
  }
};

module.exports = {
  addInventory,
  getInventoryBySeller,
};
