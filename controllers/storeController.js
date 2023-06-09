const Store = require("../models/Store");

exports.addStoreInfo = async (req, res) => {
  try {
    // Extract necessary information from the request body
    const { address, gst, logo, timings } = req.body;

    // Create a new store
    const newStore = new Store({
      address,
      gst,
      logo,
      timings,
    });
    await newStore.save();

    res.status(201).json({ message: "Store info added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
