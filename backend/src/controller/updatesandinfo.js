const Updatesandinfo = require("../model/updatesandinfo"); // Ensure this imports the Updatesandinfo model
const fs = require("fs");
const path = require("path");

// Create a new Updatesandinfo
exports.createUpdatesandinfo = async (req, res) => {
  try {
    const newUpdatesandinfoData = {
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
        "updatesandinfo",
        req.file.originalname
      );
      fs.writeFileSync(filePath, req.file.buffer); // Save file to Updatesandinfo directory
      newUpdatesandinfoData.file = `http://localhost:5000/updatesandinfo/${req.file.originalname}`; // Assuming you serve static files from this directory
    }

    const newUpdatesandinfo = new Updatesandinfo(newUpdatesandinfoData);
    await newUpdatesandinfo.save();
    res.status(201).json(newUpdatesandinfo);
  } catch (error) {
    console.error("Error creating Updatesandinfo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all Updatesandinfos
exports.getUpdatesandinfos = async (req, res) => {
  try {
    const updatesandinfo  = await Updatesandinfo.find();
    res.status(200).json({ updatesandinfo  });
  } catch (error) {
    console.error("Error fetching Updatesandinfos:", error);
    res.status(500).json({ message: "Error fetching Updatesandinfos", error: error.message });
  }
};

// Update a Updatesandinfo
exports.updateUpdatesandinfo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUpdatesandinfoData = {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link, // Get the updated link from the request body
      file: undefined, // This is for updating; set it to undefined to keep the current value
    };

    if (req.file) {
      const filePath = path.join(
        __dirname,
        "..",
        "updatesandinfo",
        req.file.originalname
      );
      fs.writeFileSync(filePath, req.file.buffer);
      updatedUpdatesandinfoData.file = `http://localhost:5000/updatesandinfo/${req.file.originalname}`;
    }

    const updatedUpdatesandinfo = await Updatesandinfo.findByIdAndUpdate(id, updatedUpdatesandinfoData, {
      new: true,
    });

    res.status(200).json(updatedUpdatesandinfo);
  } catch (error) {
    console.error("Error updating Updatesandinfo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Remove a Updatesandinfo
exports.removeUpdatesandinfo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUpdatesandinfo = await Updatesandinfo.findByIdAndDelete(id);
    if (!deletedUpdatesandinfo) {
      return res.status(404).json({ message: "Updatesandinfo not found" });
    }
    res.status(200).json({ message: "Updatesandinfo removed successfully" });
  } catch (error) {
    console.error("Error removing Updatesandinfo:", error);
    res.status(500).json({ message: "Server error" });
  }
};
