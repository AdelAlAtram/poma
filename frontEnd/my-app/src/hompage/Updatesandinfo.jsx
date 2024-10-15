import React from "react";
import Image from "./image/inOurWay.jpg"; // Ensure the path to your image is correct

export default function Updatesandinfo() {
  return (
    <div className="flex flex-col items-center p-6">
      {/* Image section with overlay button */}
      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <img
          src={Image}
          alt="Updatesandinfo"
          className="w-full object-cover shadow-xl rounded-sm " // Added shadow-xl here
        />
        <p className="absolute left-1/2 bottom-[-20px] transform -translate-x-1/2 bg-[#3FD0A2] text-white font-bold py-2 px-4 rounded-full text-sm sm:text-lg">
          Updates And Info
        </p>
      </div>

      {/* Text and Button Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-16 mb-24">
        <p className="text-xs sm:text-sm md:text-base font-bold text-center sm:text-left uppercase">
          Economic constraints and gendered rules:{" "}
          <span style={{ color: "lightgray" }}>
            Understanding women's perspectives of how government-imposed...
          </span>
        </p>
        <button className="bg-purple-600 text-white font-bold py-2 px-4 sm:ml-4 sm:mt-[-10px] mt-4 rounded-full text-xs sm:text-sm">
          Link
        </button>
      </div>
    </div>
  );
}
