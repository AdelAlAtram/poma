import React, { useEffect, useState } from "react";
import Image from "./image/inOurWay.jpg"; // Ensure the path to your image is correct
import axios from "axios";
import { LinkIcon, VideoCameraIcon, PhotoIcon } from "@heroicons/react/24/outline"; // Updated to use PhotoIcon
import { Dialog, DialogContent, DialogActions, IconButton } from "@mui/material"; // Import MUI components
import CloseIcon from '@mui/icons-material/Close'; // Import close icon from MUI

export default function Updatesandinfo() {
  const [updatesandinfo, setUpdatesandinfoRoutes] = useState();
  const [openDialog, setOpenDialog] = useState(false); // State to handle dialog open/close
  const [dialogContent, setDialogContent] = useState(null); // State to handle dialog content (image/video)

  // Fetch updatesandinfo
  const fetchUpdatesandinfo = async () => {
    try {
      const response = await axios.get("http://localhost:5000/updatesandinfo");
      setUpdatesandinfoRoutes(response.data); // Assuming response.data is an array of updatesandinfo
    } catch (error) {
      console.error("Error fetching updatesandinfo:", error);
    }
  };

  // Fetch updatesandinfo when component mounts
  useEffect(() => {
    fetchUpdatesandinfo();
  }, []);

  // Function to check if the file is an image or video based on the file extension
  const isImageFile = (file) => {
    return file?.match(/\.(jpeg|jpg|gif|png)$/i);
  };

  const isVideoFile = (file) => {
    return file?.match(/\.(mp4|mov|wmv|avi|mkv)$/i);
  };

  // Function to open the dialog with content
  const handleOpenDialog = (content) => {
    setDialogContent(content); // Set the content to be displayed (image or video)
    setOpenDialog(true); // Open the dialog
  };

  // Function to close the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog
    setDialogContent(null); // Clear the content
  };

  return (
    <div className="flex flex-col items-center p-6">
      {/* Image section with overlay button */}
      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <img
          src={Image}
          alt="Updatesandinfo"
          className="w-full object-cover shadow-xl rounded-sm"
        />
        <p className="absolute left-1/2 bottom-[-20px] transform -translate-x-1/2 bg-[#3FD0A2] text-white font-bold py-2 px-4 rounded-full text-sm sm:text-lg">
          Updates And Info
        </p>
      </div>

      {/* Text and Button Section */}
      {updatesandinfo?.updatesandinfo?.map((info, index) => (
        <div
          key={info.id} // Added a unique key to each mapped item
          className={`flex flex-col sm:flex-row items-center justify-between w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-16 ${
            index === updatesandinfo?.updatesandinfo?.length - 1 ? "mb-24" : ""
          }`}
        >
          <p className="text-xs sm:text-sm md:text-base font-bold text-center sm:text-left uppercase mb-4 sm:mb-0">
            {info?.title}{" "}
            <span style={{ color: "lightgray" }}>{info?.description}</span>
          </p>
          <div className="flex gap-3 mt-4 sm:mt-0">
            {/* Conditionally render Link button if there is a link */}
            {info?.link && (
              <button
                className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full text-xs sm:text-sm flex items-center gap-2"
                onClick={() => window.open(info.link, "_blank")} // Open link in a new tab
              >
                <LinkIcon className="h-5 w-5" /> {/* Icon for Link */}
                Link
              </button>
            )}

            {/* Conditionally render Video or Image button based on the file type */}
            {info?.file && isImageFile(info.file) && (
              <button
                className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full text-xs sm:text-sm flex items-center gap-2"
                onClick={() => handleOpenDialog(info.file)} // Open image in dialog
              >
                <PhotoIcon className="h-5 w-5" /> {/* Icon for Image */}
                Image
              </button>
            )}

            {info?.file && isVideoFile(info.file) && (
              <button
                className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full text-xs sm:text-sm flex items-center gap-2"
                onClick={() => handleOpenDialog(info.file)} // Open video in dialog
              >
                <VideoCameraIcon className="h-5 w-5" /> {/* Icon for Video */}
                Video
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Dialog to show image or video */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogActions>
          <IconButton onClick={handleCloseDialog}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogContent>
          {dialogContent && isImageFile(dialogContent) && (
            <img src={dialogContent} alt="Preview" className="w-full h-auto" />
          )}

          {dialogContent && isVideoFile(dialogContent) && (
            <video controls className="w-full h-auto">
              <source src={dialogContent} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
