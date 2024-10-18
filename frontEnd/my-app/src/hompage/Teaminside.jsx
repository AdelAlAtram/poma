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
import axios from "axios";

const Teaminside = () => {
  const memberRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    image: null, // Change from imageUrl to image (file)
    description: "",
  });
  const [teamMembers, setTeamMembers] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState("success"); // Type of alert
  const [confirmDelete, setConfirmDelete] = useState(false); // State for confirmation delete
  const [currentMemberId, setCurrentMemberId] = useState(null); // To hold the ID of the member to update or delete

  // Fetch team members
  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/team/members");
      setTeamMembers(response.data); // Assuming response.data is an array of team members
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

  // Fetch team members when component mounts
  useEffect(() => {
    fetchTeamMembers();
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
  const handleOpen = (member = null) => {
    if (member) {
      setNewMember({
        name: member.name,
        image: member.image, // For now, keeping the existing image reference
        description: member.description,
      });
      setCurrentMemberId(member._id); // Set the member ID for editing
    } else {
      setNewMember({ name: "", image: null, description: "" }); // Reset for adding new member
      setCurrentMemberId(null); // No ID for new member
    }
    setOpen(true); // Open dialog
  };

  const handleClose = () => {
    setOpen(false);
    setNewMember({ name: "", image: null, description: "" }); // Reset form
    setCurrentMemberId(null); // Reset current member ID
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewMember({ ...newMember, image: e.target.files[0] });
  };

  const handleAddMember = async () => {
    const formData = new FormData();
    formData.append("name", newMember.name);
    formData.append("image", newMember.image); // Append image file
    formData.append("description", newMember.description);

    try {
      await axios.post("http://localhost:5000/team", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAlertOpen(true);
      setAlertType("success");
      fetchTeamMembers();
      handleClose();
    } catch (error) {
      console.error("Error adding new team member:", error);
      setAlertOpen(true);
      setAlertType("error");
    }
  };

  const handleUpdateMember = async () => {
    const formData = new FormData();
    formData.append("name", newMember.name);
    formData.append("image", newMember.image); // Append image file if updated
    formData.append("description", newMember.description);

    try {
      await axios.put(`http://localhost:5000/team/${currentMemberId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAlertOpen(true);
      setAlertType("success");
      fetchTeamMembers();
      handleClose();
    } catch (error) {
      console.error("Error updating team member:", error);
      setAlertOpen(true);
      setAlertType("error");
    }
  };

  const handleRemoveMember = async () => {
    try {
      await axios.delete(`http://localhost:5000/team/${currentMemberId}`);
      // Reset member state and refetch data
      setNewMember({ name: "", description: "", image: null });
      setCurrentMemberId(null);
      fetchTeamMembers();
      setConfirmDelete(false);
    } catch (error) {
      console.error("Error deleting team member:", error);
    }
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  const handleConfirmDelete = (id) => {
    setConfirmDelete(true);
    setCurrentMemberId(id);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setCurrentMemberId(null);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 lg:min-h-[40rem]">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Poma Team
              <br />
              <br />
              Add, Edit And Remove Your Team Members Data
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Click the button to add new members.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button variant="contained" color="primary" onClick={() => handleOpen()}>
                Add New
              </Button>
            </div>
          </div>

          <div
            className="relative mt-16 max-h-[400px] w-full overflow-y-auto"
            ref={memberRef}
          >
            {teamMembers?.teamMembers?.map((member) => (
              <div className="flex flex-col space-y-4  w-full mb-2" key={member._id}>
                {/* Team Member Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden border border-gray-200">
                  <a href="/hannah-lane">
                    <img
                      src={member?.imageUrl}
                      alt={member?.name}
                      className="rounded-lg mb-4 w-full h-48 object-cover"
                    />
                  </a>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {member?.name}
                  </h2>
                  <p className="text-gray-600 mb-2">{member?.description}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpen(member)} // Pass the member data to handleOpen
                      className="border rounded-md p-1 w-20 bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleConfirmDelete(member._id)}
                      className="border rounded-md p-1 w-20 bg-red-500 text-white hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              className="bg-gray-600 text-white p-4 m-2 rounded-full hover:bg-gray-500"
              onClick={scrollUp}
            >
              ↑
            </button>
            <br />
            <button
              className="bg-gray-600 text-white p-4 m-2 rounded-full hover:bg-gray-500"
              onClick={scrollDown}
            >
              ↓
            </button>
          </div>
        </div>
      </div>

      {/* Add/Edit Team Member Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {currentMemberId ? "Update Team Member" : "Add New Team Member"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={newMember.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={newMember.description}
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="my-2"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={currentMemberId ? handleUpdateMember : handleAddMember}
            color="primary"
          >
            {currentMemberId ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for alerts */}
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity={alertType}>
          {alertType === "success"
            ? "Team member successfully saved!"
            : "Error saving team member."}
        </Alert>
      </Snackbar>

      {/* Confirmation Dialog */}
      {confirmDelete && (
        <Dialog open={confirmDelete} onClose={handleCancelDelete}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <p>Are you sure you want to remove this team member?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelDelete} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleRemoveMember} color="primary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Teaminside;
