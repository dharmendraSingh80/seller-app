const User = require("../models/User");
// Generate a unique URL for the seller
const generateUniqueUrl = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let url = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    url += characters[randomIndex];
  }

  return url;
};
const signUp = async (req, res) => {
  try {
    const { email, businessName, password, confirmPassword } = req.body;
    if (password != confirmPassword) {
      return res
        .status(401)
        .json({ error: "password confirm password doesn't match !!" });
    }
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Generate a unique URL for the seller
    const uniqueUrl = generateUniqueUrl();

    // Create a new user with the unique URL
    const newUser = new User({
      email,
      businessName,
      password,
      uniqueUrl,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  signUp,
};
