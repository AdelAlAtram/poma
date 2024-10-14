const express = require("express");
const { createUser, login } = require("../controller/user");
const hashPasswordMiddleware = require("../middleware/hashPasswordMiddleware");
const router = express.Router();

// Route to create user with password hashing middleware
router.post("/signup", hashPasswordMiddleware, createUser);
router.post("/login", login);

module.exports = router;
