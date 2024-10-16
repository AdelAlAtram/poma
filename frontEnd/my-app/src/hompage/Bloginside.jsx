import React, { useRef, useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material"; // Import Material UI icons
import axios from "axios";

const BlogsInside = () => {
  const memberRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    link: "",
    file: null, // This will hold the file (image/video)
  });
  const [blogs, setBlogs] = useState([]); // Renamed to blogs
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState("success"); // Type of alert
  const [confirmDelete, setConfirmDelete] = useState(false); // State for confirmation delete
  const [currentBlogId, setCurrentBlogId] = useState(null); // To hold the ID of the blog to update or delete

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/blogs"); // Changed to blog endpoint
      setBlogs(response.data); // Assuming response.data is an array of blogs
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Fetch blogs when component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  const scrollUp = () => {
    if (memberRef.current) {
      memberRef.current.scrollBy({ top: -400, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (memberRef.current) {
      memberRef.current.scrollBy({ top: 400, behavior: "smooth" });
    }
  };

  // Update handleOpen to handle both add and edit functionality
  const handleOpen = (blog = null) => {
    if (blog) {
      setNewBlog({
        title: blog.title,
        description: blog.description,
        link: blog.link,
        file: blog.file, // For now, keeping the existing file reference
      });
      setCurrentBlogId(blog._id); // Set the blog ID for editing
    } else {
      setNewBlog({ title: "", description: "", link: "", file: null }); // Reset for adding new blog
      setCurrentBlogId(null); // No ID for new blog
    }
    setOpen(true); // Open dialog
  };

  const handleClose = () => {
    setOpen(false);
    setNewBlog({ title: "", description: "", link: "", file: null }); // Reset form
    setCurrentBlogId(null); // Reset current blog ID
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Validate file type (image/video)
    if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
      setNewBlog({ ...newBlog, file }); // Set the uploaded file
    } else {
      alert("Please upload an image or a video file.");
      setNewBlog({ ...newBlog, file: null }); // Reset file if invalid
    }
  };

  const handleAddBlog = async () => {
    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("description", newBlog.description);
    formData.append("link", newBlog.link);
    formData.append("file", newBlog.file); // Append the file

    try {
      await axios.post("http://localhost:5000/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAlertOpen(true);
      setAlertType("success");
      fetchBlogs(); // Fetch updated blogs list
      handleClose();
    } catch (error) {
      console.error("Error adding new blog:", error);
      setAlertOpen(true);
      setAlertType("error");
    }
  };

  const handleUpdateBlog = async () => {
    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("description", newBlog.description);
    formData.append("link", newBlog.link);
    if (newBlog.file) {
      formData.append("file", newBlog.file); // Append file if it has been updated
    }

    try {
      await axios.put(`http://localhost:5000/blogs/${currentBlogId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAlertOpen(true);
      setAlertType("success");
      fetchBlogs(); // Fetch updated blogs list
      handleClose();
    } catch (error) {
      console.error("Error updating blog:", error);
      setAlertOpen(true);
      setAlertType("error");
    }
  };

  const handleRemoveBlog = async () => {
    try {
      await axios.delete(`http://localhost:5000/blogs/${currentBlogId}`);
      // Reset blog state and refetch data
      setNewBlog({ title: "", description: "", link: "", file: null });
      setCurrentBlogId(null);
      fetchBlogs(); // Fetch updated blogs list
      setConfirmDelete(false);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  const handleConfirmDelete = (id) => {
    setConfirmDelete(true);
    setCurrentBlogId(id);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setCurrentBlogId(null);
  };

  return (
    <div className="py-6 px-4">
      {/* Centered Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Poma Blogs</h1>
      <div className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs?.blogs?.map((blog) => (
            <div key={blog._id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              {blog.file.endsWith(".mp4") || blog.file.endsWith(".mov") ? ( // Check if the file is a video
                <video
                  src={blog.file} // Assuming 'file' is a URL
                  className="w-full h-48 object-cover"
                  controls // Add controls for video playback
                />
              ) : (
                <img
                  alt={blog.title} // Use the title for alt text
                  src={blog.file} // Assuming 'file' is a URL
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{blog.description}</p>
                <div className="mt-4 flex justify-between">
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleOpen(blog)} // Pass the blog data to handleOpen
                      variant="outlined"
                      color="primary"
                      startIcon={<Edit />}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleConfirmDelete(blog._id)}
                      variant="outlined"
                      color="secondary"
                      startIcon={<Delete />}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpen()}
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            Add New Blog
          </Button>
        </div>
      </div>

      {/* Dialog for adding/editing blogs */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentBlogId ? "Edit Blog" : "Add Blog"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            value={newBlog.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            value={newBlog.description}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="link"
            label="Link"
            type="text"
            fullWidth
            variant="outlined"
            value={newBlog.link}
            onChange={handleChange}
          />
          <input
            type="file"
            accept="image/*,video/*" // Accept both image and video files
            onChange={handleFileChange}
            className="mt-2" // Add some margin for spacing
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {currentBlogId ? (
            <Button onClick={handleUpdateBlog} color="primary">
              Update Blog
            </Button>
          ) : (
            <Button onClick={handleAddBlog} color="primary">
              Add Blog
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* Snackbar for alerts */}
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity={alertType} sx={{ width: "100%" }}>
          {alertType === "success" ? "Blog saved successfully!" : "Error saving blog!"}
        </Alert>
      </Snackbar>

      {/* Confirmation dialog for deletion */}
      <Dialog open={confirmDelete} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this blog?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRemoveBlog} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BlogsInside;
