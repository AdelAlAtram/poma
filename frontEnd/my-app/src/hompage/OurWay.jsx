import React from "react";
import Image from "./image/inOurWay.jpg"; // Make sure the path to the image is correct

export default function OurWay() {
  return (
    <div
      className="h-[70vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${Image})`,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* Gradient overlay with the green color #3FD0A2 */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#3FD0A2] to-transparent"
        style={{ opacity: 0.35 }} // Adjust opacity for more visibility
      />

      {/* White overlay with slight opacity */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#fff", opacity: 0.12 }}
      />

      {/* Centered content */}
      <div className="relative flex flex-col justify-center items-center h-full text-center">
        {/* Title Section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          OUR WAY
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white max-w-2xl">
          We assess the needs of the individual, community, and tailor our
          intervention to achieve the results they desire.
        </p>

        {/* Arrow Section for Interaction (can replace with an icon if needed) */}
        <div className="mt-8 animate-bounce text-white text-5xl">
          ↓
        </div>
      </div>
    </div>
  );
}
