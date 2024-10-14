const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

const User = require("../model/user");

const secretKey = process.env.JWT_SECRET; // Replace with your actual secret

// Function to hash the password
// const hashPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

// Controller to create a user and generate a token
exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    // const hashedPassword = await hashPassword(password);
     // Log the hashed password

    // Create a new user with the hashed password
    user = new User({
      email,
      password: password, // Store hashed password
    });

    // Save the user to the database
    await user.save();

    // Create a token
    const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, {
      expiresIn: "1h",
    });

    // Respond with the token
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Log the hashed password from the database
    console.log("Password from DB:", user.password);

    // Compare passwords (trim the input password)
    const isMatch = await bcrypt.compare(password.trim(), user.password);
    console.log("Input Password:", password); // Log the input password
    console.log("Password match:", isMatch); // Log the result of the comparison

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create and sign the JWT
    const token = jwt.sign({ id: user._id }, secretKey, {
      expiresIn: "1h", // Token expiration
    });

    // Send the token back to the client
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
