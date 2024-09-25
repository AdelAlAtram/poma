import React from "react";
import Image from "./image/4.png"; // Adjust the path as needed

export default function ImageCut() {
  return (
    <div
      
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${Image})`,
        transition: "opacity 0.3s ease", // Adjust transition duration
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#fff", opacity: 0.12 }}
      />
    </div>
  );
}
