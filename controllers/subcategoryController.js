const Subcategory = require("../models/Subcategory");

exports.addSubcategory = async (req, res) => {
  try {
    // Extract necessary information from the request body
    const { categoryId, subcategoryName } = req.body;

    // Create a new subcategory
    const newSubcategory = new Subcategory({
      categoryId,
      subcategoryName,
    });
    await newSubcategory.save();

    res.status(201).json({ message: "Subcategory added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
