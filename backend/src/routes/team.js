const express = require("express");
const multer = require("multer");
const router = express.Router();
const teamController = require("../controller/team");

// Set up Multer for file storage
const storage = multer.memoryStorage(); // Store files in memory (for now)
const upload = multer({ storage: storage });
// GET request to fetch all team members
router.get("/members", teamController.getTeamMembers);

/// POST request to create a new team member with image upload
router.post("/", upload.single("image"), teamController.createTeamMember);

// PUT request to update a team member with image upload
router.put("/:id", upload.single("image"), teamController.updateTeamMember);

// DELETE request to remove a team member
router.delete("/:id", teamController.removeTeamMember);

module.exports = router;
