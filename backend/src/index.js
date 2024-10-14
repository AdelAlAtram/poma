const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require('dotenv').config(); // Load environment variables

const teamRoutes = require("./routes/team");
const supportRoutes = require("./routes/support");
const authRoutes = require("./routes/user"); // Import the auth route

const app = express();
app.use(cors());

// Middleware to parse JSON
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Accessing the JWT secret from environment variables
const jwtSecret = process.env.JWT_SECRET;
console.log("JWT Secret:", jwtSecret); // You can remove this later

// Hardcoded MongoDB connection string
mongoose
  .connect("mongodb://localhost:27017/poma", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

// Routes
app.use("/team", teamRoutes);
app.use("/support", supportRoutes);
app.use("/auth", authRoutes); // Add the auth route

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

// Start the server
const PORT = 5000; // You can replace 5000 with any other port if needed
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
