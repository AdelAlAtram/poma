const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const teamRoutes = require("./routes/team");
const app = express();
app.use(cors());
// Middleware to parse JSON
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
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
app.get("/", (req, res) => {
  res.send("Server is up and running");
});

// Start the server
const PORT = 5000; // You can replace 5000 with any other port if needed
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
