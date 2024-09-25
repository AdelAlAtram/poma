import React, { useEffect, useState } from "react";
import Image from "./image/2.jpeg"; // Adjust the path as needed
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const [opacity, setOpacity] = useState(2); // Initial opacity

  useEffect(() => {
    const nextSection = document.getElementById("next-section"); // Reference to the next section

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update opacity based on intersection
        if (entry.isIntersecting) {
          const { intersectionRatio } = entry;
          setOpacity(Math.max(0.5, intersectionRatio)); // Minimum opacity of 0.5
        } else {
          setOpacity(2); // Reset to full opacity if not intersecting
        }
      },
      {
        threshold: [0.1, 0.9], // Adjust threshold for smoother transition
      }
    );

    if (nextSection) {
      observer.observe(nextSection);
    }

    return () => {
      if (nextSection) {
        observer.unobserve(nextSection);
      }
    };
  }, []);

  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="header" // Give the header an ID for reference
      className="h-[89.5vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${Image})`,
        opacity: opacity, // Set opacity based on state
        transition: "opacity 0.3s ease", // Adjust transition duration
      }}
    >
      {/* Overlay with custom color */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#fff", opacity: 0.12 }}
      />

      {/* Text content */}
      <div className="relative z-10 flex items-center h-full">
      <p
  className="text-left text-white font-bold leading-snug p-6 tracking-wide bg-opacity-60 rounded-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-[90%] sm:w-[70%] md:w-[60%] lg:w-[43%]"
  style={{
    backgroundColor: "rgba(63, 208, 162, 0.23)",
  }}
>
  GLOBALLY,
  <br /> 1 in 8 people live with a <br /> mental health condition,
  <br /> with suicide being the <br />
  fourth leading cause of death <br /> among 15-29-year-olds
</p>
      </div>

      {/* Chevron Down Icon */}
      <div
        className="absolute mb-5 bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full z-10 cursor-pointer"
        style={{ backgroundColor: "#7116a9" }}
        onClick={handleScroll} // Event handler for click
      >
        <div className="flex items-center justify-center h-12 w-12 lg:h-16 lg:w-16">
          <ChevronDownIcon
            aria-hidden="true"
            className="h-10 w-10 lg:h-12 lg:w-12"
            style={{ color: "#3fd0a2" }}
          />
        </div>
      </div>
    </div>
  );
}
