const express = require("express");
const multer = require("multer");
const router = express.Router();
const blogController = require("../controller/blog");

// Set up Multer for file storage
const storage = multer.memoryStorage(); // Store files in memory (for now)
const upload = multer({ storage: storage });

// GET request to fetch all blogs
router.get("/", blogController.getBlogs);

// POST request to create a new blog with image upload
router.post("/", upload.single("file"), blogController.createBlog);

// PUT request to update a blog with image upload
router.put("/:id", upload.single("file"), blogController.updateBlog);

// DELETE request to remove a blog
router.delete("/:id", blogController.removeBlog);

module.exports = router;
