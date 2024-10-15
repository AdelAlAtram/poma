const Publications = require("../model/publications"); // Ensure this imports the Publications model
const fs = require("fs");
const path = require("path");

// Create a new Publications
exports.createPublications = async (req, res) => {
  try {
    const newPublicationsData = {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link, // Get the link from the request body
      file: "", // Initialize as empty for now
    };

    if (req.file) {
      // If a file was uploaded, save it and get the URL
      const filePath = path.join(
        __dirname,
        "..",
        "publications",
        req.file.originalname
      );
      fs.writeFileSync(filePath, req.file.buffer); // Save file to Publications directory
      newPublicationsData.file = `http://localhost:5000/publications/${req.file.originalname}`; // Assuming you serve static files from this directory
    }

    const newPublications = new Publications(newPublicationsData);
    await newPublications.save();
    res.status(201).json(newPublications);
  } catch (error) {
    console.error("Error creating Publications:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all Publicationss
exports.getPublicationss = async (req, res) => {
  try {
    const Publication = await Publications.find();
    res.status(200).json({ Publication });
  } catch (error) {
    console.error("Error fetching Publicationss:", error);
    res.status(500).json({ message: "Error fetching Publicationss", error: error.message });
  }
};

// Update a Publications
exports.updatePublications = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPublicationsData = {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link, // Get the updated link from the request body
      file: undefined, // This is for updating; set it to undefined to keep the current value
    };

    if (req.file) {
      const filePath = path.join(
        __dirname,
        "..",
        "publications",
        req.file.originalname
      );
      fs.writeFileSync(filePath, req.file.buffer);
      updatedPublicationsData.file = `http://localhost:5000/publications/${req.file.originalname}`;
    }

    const updatedPublications = await Publications.findByIdAndUpdate(id, updatedPublicationsData, {
      new: true,
    });

    res.status(200).json(updatedPublications);
  } catch (error) {
    console.error("Error updating Publications:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Remove a Publications
exports.removePublications = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPublications = await Publications.findByIdAndDelete(id);
    if (!deletedPublications) {
      return res.status(404).json({ message: "Publications not found" });
    }
    res.status(200).json({ message: "Publications removed successfully" });
  } catch (error) {
    console.error("Error removing Publications:", error);
    res.status(500).json({ message: "Server error" });
  }
};
