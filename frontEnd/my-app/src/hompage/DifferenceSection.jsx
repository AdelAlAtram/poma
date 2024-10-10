import React from "react";
import { ChevronDoubleDownIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline"; // Importing the arrow icons
import BackgroundImage from "./image/82.jpg";

export default function DifferenceSection() {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${BackgroundImage})`, // Background image
      }}
    >
      {/* Overlay for dimming and smaller top shadow effect */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#581d7d97] to-transparent h-[30px]"
        style={{ opacity: 0.6 }} // Adjust opacity as needed
      />

      {/* Content Section */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-[auto,1fr,4fr] items-center justify-center h-full">
        {/* Left Side Text */}
        <div className="text-white text-center lg:text-left mb-4 lg:mb-0 max-w-[600px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6">
            How we’re making a difference
          </h1>
        </div>

        <div className="flex justify-center lg:justify-center">
          <ChevronDoubleDownIcon className="w-6 h-6 sm:w-10 sm:h-8 text-white absolute top-1/2 transform -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300 lg:hidden" />
          <ChevronDoubleRightIcon className="w-6 h-6 sm:w-10 sm:h-10 text-white absolute top-1/2 transform -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300 hidden lg:block" />
        </div>

        {/* Right Side Text */}
        <div className="text-white space-y-10 ml-auto flex flex-col items-center lg:items-start">
          {/* Piece of Mind Association Section */}
          <div className="group relative text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer relative inline-block">
              <span>Peace of Mind Association</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-screen group-hover:mt-2 transition-all duration-500 ease-in-out overflow-hidden">
              supports society's most vulnerable and those left behind, focusing
              on women, children, refugees, displaced persons, conflict zones,
              and trauma-affected populations. 
            </p>
          </div>

          {/* Community-led approach Section */}
          <div className="group relative text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer relative inline-block">
              <span>Our community-led approach</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-screen group-hover:mt-2 transition-all duration-500 ease-in-out overflow-hidden">
              provides accessible, culturally relevant, and sustainable mental
              health services, emphasizing holistic functionality to facilitate
              reintegration. We strengthen mental and social care
              infrastructures in conflict-affected regions globally.
            </p>
          </div>

          {/* Interdisciplinary team Section */}
          <div className="group relative text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer relative inline-block">
              <span>Our interdisciplinary team</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-screen group-hover:mt-2 transition-all duration-500 ease-in-out overflow-hidden">
              delivers contextualized, culturally appropriate, evidence-informed
              mental health services to governments, communities, families,
              organizations, and individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
