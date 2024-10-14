const express = require("express");
const router = express.Router();
const supportController = require("../controller/support");

// GET request to fetch all support
router.get("/", supportController.getSupports);

/// POST request to create a new support with image upload
router.post("/", supportController.createSupport);

module.exports = router;
