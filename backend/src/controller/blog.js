const Blog = require("../model/blog"); // Ensure this imports the Blog model
const fs = require("fs");
const path = require("path");

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const newBlogData = {
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
        "blog",
        req.file.originalname
      );
      fs.writeFileSync(filePath, req.file.buffer); // Save file to blog directory
      newBlogData.file = `http://localhost:5000/blog/${req.file.originalname}`; // Assuming you serve static files from this directory
    }

    const newBlog = new Blog(newBlogData);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Error fetching blogs", error: error.message });
  }
};

// Update a blog
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlogData = {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link, // Get the updated link from the request body
      file: undefined, // This is for updating; set it to undefined to keep the current value
    };

    if (req.file) {
      const filePath = path.join(
        __dirname,
        "..",
        "blog",
        req.file.originalname
      );
      fs.writeFileSync(filePath, req.file.buffer);
      updatedBlogData.file = `http://localhost:5000/blog/${req.file.originalname}`;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, updatedBlogData, {
      new: true,
    });

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Remove a blog
exports.removeBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog removed successfully" });
  } catch (error) {
    console.error("Error removing blog:", error);
    res.status(500).json({ message: "Server error" });
  }
};
