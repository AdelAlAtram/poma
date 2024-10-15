const express = require("express");
const multer = require("multer");
const router = express.Router();
const updatesandinfoController = require("../controller/updatesandinfo");

// Set up Multer for file storage
const storage = multer.memoryStorage(); // Store files in memory (for now)
const upload = multer({ storage: storage });

// GET request to fetch all updatesandinfos
router.get("/", updatesandinfoController.getUpdatesandinfos);

// POST request to create a new updatesandinfo with image upload
router.post("/", upload.single("file"), updatesandinfoController.createUpdatesandinfo);

// PUT request to update a updatesandinfo with image upload
router.put("/:id", upload.single("file"), updatesandinfoController.updateUpdatesandinfo);

// DELETE request to remove a updatesandinfo
router.delete("/:id", updatesandinfoController.removeUpdatesandinfo);

module.exports = router;
