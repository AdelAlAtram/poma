import React, { useState, useEffect } from "react";
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

const UpdatesAndInfoInside = () => {
  const [open, setOpen] = useState(false);
  const [newUpdatesandinfo, setNewUpdatesandinfo] = useState({
    title: "",
    description: "",
    link: "",
    file: null, // This will hold the file (image/video)
  });
  const [updatesandinfo, setUpdatesandinfoRoutes] = useState([]); // Renamed to updatesandinfo
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState("success"); // Type of alert
  const [confirmDelete, setConfirmDelete] = useState(false); // State for confirmation delete
  const [currentBlogId, setCurrentBlogId] = useState(null); // To hold the ID of the updatesandinfo to update or delete

  // Fetch updatesandinfo
  const fetchUpdatesandinfo = async () => {
    try {
      const response = await axios.get("http://localhost:5000/updatesandinfo"); // Changed to updatesandinfo endpoint
      setUpdatesandinfoRoutes(response.data); // Assuming response.data is an array of updatesandinfo
    } catch (error) {
      console.error("Error fetching updatesandinfo:", error);
    }
  };
  console.log(updatesandinfo);

  // Fetch updatesandinfo when component mounts
  useEffect(() => {
    fetchUpdatesandinfo();
  }, []);

  // Update handleOpen to handle both add and edit functionality
  const handleOpen = (updatesandinfo = null) => {
    if (updatesandinfo) {
      setNewUpdatesandinfo({
        title: updatesandinfo.title,
        description: updatesandinfo.description,
        link: updatesandinfo.link,
        file: updatesandinfo.file, // For now, keeping the existing file reference
      });
      setCurrentBlogId(updatesandinfo._id); // Set the updatesandinfo ID for editing
    } else {
      setNewUpdatesandinfo({
        title: "",
        description: "",
        link: "",
        file: null,
      }); // Reset for adding new updatesandinfo
      setCurrentBlogId(null); // No ID for new updatesandinfo
    }
    setOpen(true); // Open dialog
  };

  const handleClose = () => {
    setOpen(false);
    setNewUpdatesandinfo({ title: "", description: "", link: "", file: null }); // Reset form
    setCurrentBlogId(null); // Reset current updatesandinfo ID
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUpdatesandinfo({ ...newUpdatesandinfo, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Validate file type (image/video)
    if (
      file &&
      (file.type.startsWith("image/") || file.type.startsWith("video/"))
    ) {
      setNewUpdatesandinfo({ ...newUpdatesandinfo, file }); // Set the uploaded file
    } else {
      alert("Please upload an image or a video file.");
      setNewUpdatesandinfo({ ...newUpdatesandinfo, file: null }); // Reset file if invalid
    }
  };

  const handleAddBlog = async () => {
    const formData = new FormData();
    formData.append("title", newUpdatesandinfo.title);
    formData.append("description", newUpdatesandinfo.description);
    formData.append("link", newUpdatesandinfo.link);
    formData.append("file", newUpdatesandinfo.file); // Append the file

    try {
      await axios.post("http://localhost:5000/updatesandinfo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAlertOpen(true);
      setAlertType("success");
      fetchUpdatesandinfo(); // Fetch updated updatesandinfo list
      handleClose();
    } catch (error) {
      console.error("Error adding new updatesandinfo:", error);
      setAlertOpen(true);
      setAlertType("error");
    }
  };

  const handleUpdateBlog = async () => {
    const formData = new FormData();
    formData.append("title", newUpdatesandinfo.title);
    formData.append("description", newUpdatesandinfo.description);
    formData.append("link", newUpdatesandinfo.link);
    if (newUpdatesandinfo.file) {
      formData.append("file", newUpdatesandinfo.file); // Append file if it has been updated
    }

    try {
      await axios.put(
        `http://localhost:5000/updatesandinfo/${currentBlogId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setAlertOpen(true);
      setAlertType("success");
      fetchUpdatesandinfo(); // Fetch updated updatesandinfo list
      handleClose();
    } catch (error) {
      console.error("Error updating updatesandinfo:", error);
      setAlertOpen(true);
      setAlertType("error");
    }
  };

  const handleRemoveBlog = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/updatesandinfo/${currentBlogId}`
      );
      // Reset updatesandinfo state and refetch data
      setNewUpdatesandinfo({
        title: "",
        description: "",
        link: "",
        file: null,
      });
      setCurrentBlogId(null);
      fetchUpdatesandinfo(); // Fetch updated updatesandinfo list
      setConfirmDelete(false);
    } catch (error) {
      console.error("Error deleting updatesandinfo:", error);
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
      <h1 className="text-3xl font-bold text-center mb-6">
        Poma Updates And Info
      </h1>
      <div className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {updatesandinfo?.updatesandinfo?.map((updatesandinfo) => (
            <div
              key={updatesandinfo._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              {updatesandinfo.file.endsWith(".mp4") ||
              updatesandinfo.file.endsWith(".mov") ? ( // Check if the file is a video
                <video
                  src={updatesandinfo.file} // Assuming 'file' is a URL
                  className="w-full h-48 object-cover"
                  controls // Add controls for video playback
                />
              ) : (
                <img
                  alt={updatesandinfo.title} // Use the title for alt text
                  src={updatesandinfo.file} // Assuming 'file' is a URL
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {updatesandinfo.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {updatesandinfo.description}
                </p>
                <div className="mt-4 flex justify-between">
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleOpen(updatesandinfo)} // Pass the updatesandinfo data to handleOpen
                      variant="outlined"
                      color="primary"
                      startIcon={<Edit />}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleConfirmDelete(updatesandinfo._id)}
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
            Add New Updates And Info
          </Button>
        </div>
      </div>

      {/* Dialog for adding/editing updatesandinfo */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {currentBlogId ? "Edit Updates And Info" : "Add updates and info"}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            value={newUpdatesandinfo.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            value={newUpdatesandinfo.description}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="link"
            label="Link"
            type="text"
            fullWidth
            variant="outlined"
            value={newUpdatesandinfo.link}
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
              Update Updates And Info
            </Button>
          ) : (
            <Button onClick={handleAddBlog} color="primary">
              Add Updates And Info
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
            ? "Updates And Info saved successfully!"
            : "Error saving updatesandinfo!"}
        </Alert>
      </Snackbar>

      {/* Confirmation dialog for deletion */}
      <Dialog open={confirmDelete} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this updatesandinfo?
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

export default UpdatesAndInfoInside;
