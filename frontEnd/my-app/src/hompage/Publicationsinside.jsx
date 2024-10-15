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

const PublicationsInside = () => {
  const memberRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [newPublications, setNewPublications] = useState({
    title: "",
    description: "",
    link: "",
    file: null, // This will hold the file (image/video)
  });
  const [publications, setpublications] = useState([]); // Renamed to publications
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState("success"); // Type of alert
  const [confirmDelete, setConfirmDelete] = useState(false); // State for confirmation delete
  const [currentBlogId, setCurrentBlogId] = useState(null); // To hold the ID of the publication to update or delete

  // Fetch publications
  const fetchpublications = async () => {
    try {
      const response = await axios.get("http://localhost:5000/publications"); // Changed to publication endpoint
      setpublications(response.data); // Assuming response.data is an array of publications
    } catch (error) {
      console.error("Error fetching publications:", error);
    }
  };
  console.log(publications);

  // Fetch publications when component mounts
  useEffect(() => {
    fetchpublications();
  }, []);

  // Update handleOpen to handle both add and edit functionality
  const handleOpen = (publications = null) => {
    if (publications) {
      setNewPublications({
        title: publications.title,
        description: publications.description,
        link: publications.link,
        file: publications.file, // For now, keeping the existing file reference
      });
      setCurrentBlogId(publications._id); // Set the publications ID for editing
    } else {
      setNewPublications({ title: "", description: "", link: "", file: null }); // Reset for adding new publications
      setCurrentBlogId(null); // No ID for new publications
    }
    setOpen(true); // Open dialog
  };

  const handleClose = () => {
    setOpen(false);
    setNewPublications({ title: "", description: "", link: "", file: null }); // Reset form
    setCurrentBlogId(null); // Reset current publications ID
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPublications({ ...newPublications, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Validate file type (image/video)
    if (
      file &&
      (file.type.startsWith("image/") || file.type.startsWith("video/"))
    ) {
      setNewPublications({ ...newPublications, file }); // Set the uploaded file
    } else {
      alert("Please upload an image or a video file.");
      setNewPublications({ ...newPublications, file: null }); // Reset file if invalid
    }
  };

  const handleAddBlog = async () => {
    const formData = new FormData();
    formData.append("title", newPublications.title);
    formData.append("description", newPublications.description);
    formData.append("link", newPublications.link);
    formData.append("file", newPublications.file); // Append the file

    try {
      await axios.post("http://localhost:5000/publications", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAlertOpen(true);
      setAlertType("success");
      fetchpublications(); // Fetch updated publications list
      handleClose();
    } catch (error) {
      console.error("Error adding new publications:", error);
      setAlertOpen(true);
      setAlertType("error");
    }
  };

  const handleUpdateBlog = async () => {
    const formData = new FormData();
    formData.append("title", newPublications.title);
    formData.append("description", newPublications.description);
    formData.append("link", newPublications.link);
    if (newPublications.file) {
      formData.append("file", newPublications.file); // Append file if it has been updated
    }

    try {
      await axios.put(
        `http://localhost:5000/publications/${currentBlogId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setAlertOpen(true);
      setAlertType("success");
      fetchpublications(); // Fetch updated publications list
      handleClose();
    } catch (error) {
      console.error("Error updating publications:", error);
      setAlertOpen(true);
      setAlertType("error");
    }
  };

  const handleRemoveBlog = async () => {
    try {
      await axios.delete(`http://localhost:5000/publications/${currentBlogId}`);
      // Reset publications state and refetch data
      setNewPublications({ title: "", description: "", link: "", file: null });
      setCurrentBlogId(null);
      fetchpublications(); // Fetch updated publications list
      setConfirmDelete(false);
    } catch (error) {
      console.error("Error deleting publications:", error);
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
      <h1 className="text-3xl font-bold text-center mb-6">Poma Publications</h1>
      <div className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {publications?.Publication?.map((publications) => (
            <div
              key={publications._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              {publications.file.endsWith(".mp4") || publications.file.endsWith(".mov") ? ( // Check if the file is a video
                <video
                  src={publications.file} // Assuming 'file' is a URL
                  className="w-full h-48 object-cover"
                  controls // Add controls for video playback
                />
              ) : (
                <img
                  alt={publications.title} // Use the title for alt text
                  src={publications.file} // Assuming 'file' is a URL
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {publications.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{publications.description}</p>
                <div className="mt-4 flex justify-between">
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleOpen(publications)} // Pass the publications data to handleOpen
                      variant="outlined"
                      color="primary"
                      startIcon={<Edit />}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleConfirmDelete(publications._id)}
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
            Add New Publications
          </Button>
        </div>
      </div>

      {/* Dialog for adding/editing publications */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentBlogId ? "Edit Publications" : "Add publications"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            value={newPublications.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            value={newPublications.description}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="link"
            label="Link"
            type="text"
            fullWidth
            variant="outlined"
            value={newPublications.link}
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
              Update Publications
            </Button>
          ) : (
            <Button onClick={handleAddBlog} color="primary">
              Add Publications
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* Snackbar for alerts */}
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {alertType === "success"
            ? "Publications saved successfully!"
            : "Error saving publications!"}
        </Alert>
      </Snackbar>

      {/* Confirmation dialog for deletion */}
      <Dialog open={confirmDelete} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this publications?
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

export default PublicationsInside;
