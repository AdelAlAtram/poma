const express = require("express");
const multer = require("multer");
const router = express.Router();
const publicationsController = require("../controller/publications");

// Set up Multer for file storage
const storage = multer.memoryStorage(); // Store files in memory (for now)
const upload = multer({ storage: storage });

// GET request to fetch all publicationss
router.get("/", publicationsController.getPublicationss);

// POST request to create a new publications with image upload
router.post("/", upload.single("file"), publicationsController.createPublications);

// PUT request to update a publications with image upload
router.put("/:id", upload.single("file"), publicationsController.updatePublications);

// DELETE request to remove a publications
router.delete("/:id", publicationsController.removePublications);

module.exports = router;
