const Category = require("../models/Category");

exports.addCategory = async (req, res) => {
  try {
    // Extract necessary information from the request body
    const { categoryName } = req.body;

    // Create a new category
    const newCategory = new Category({
      categoryName,
    });
    await newCategory.save();

    res.status(201).json({ message: "Category added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
