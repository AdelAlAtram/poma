const Team = require("../model/team");
const fs = require("fs"); // Required for file system operations
const path = require("path"); // Required for handling file paths
// Create a new team member
// Create a new team member
exports.createTeamMember = async (req, res) => {
  try {
    const newMemberData = {
      name: req.body.name,
      description: req.body.description,
      // Here you will need to handle the file upload
      imageUrl: "", // Initialize as empty
    };

    if (req.file) {
      // If a file was uploaded, save it and get the URL
      const imagePath = path.join(
        __dirname,
        "..",
        "uploads",
        req.file.originalname
      );
      fs.writeFileSync(imagePath, req.file.buffer); // Save file to uploads directory
      newMemberData.imageUrl = `http://localhost:5000/uploads/${req.file.originalname}`; // Assuming you serve static files from this directory
    }

    const newMember = new Team(newMemberData);
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    console.error("Error creating team member:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await Team.find();
    res.status(200).json({ teamMembers });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching team members", error: error.message });
  }
};

exports.updateTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMemberData = {
      name: req.body.name,
      description: req.body.description,
      // Optionally handle the image here as well
      imageUrl: undefined, // This is for updating; set it to undefined to keep the current value
    };

    if (req.file) {
      const imagePath = path.join(
        __dirname,
        "..",
        "uploads",
        req.file.originalname
      );
      fs.writeFileSync(imagePath, req.file.buffer);
      updatedMemberData.imageUrl = `http://localhost:5000/uploads/${req.file.originalname}`;
    }

    const updatedMember = await Team.findByIdAndUpdate(id, updatedMemberData, {
      new: true,
    });

    res.status(200).json(updatedMember);
  } catch (error) {
    console.error("Error updating team member:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Remove a team member
exports.removeTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMember = await Team.findByIdAndDelete(id);
    if (!deletedMember) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.status(200).json({ message: "Team member removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
