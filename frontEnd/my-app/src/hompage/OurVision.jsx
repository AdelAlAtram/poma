import { motion } from "framer-motion";
import { useState } from "react";
import ImageB from './image/IMG_0428.JPG';

export default function OurVision() {
  const visionPrinciples = [
    "Intersectional",
    "Inclusive",
    "Evidence",
    "Informed",
    "Collective",
    "Collaborative",
    "Accessible",
    "Anti-discriminatory",
    "Holistic",
    "Without Stigma",
  ];

  const visionDetails = [
    "community-led approach to creating health and social infrastructures.",
    "to education and socio-economic mobility and participation through capacity building and psychology.",
    "and cultivating self-determination, harm reduction, and sustainable socio-political transformation through holistic mental health care and social support."
  ];

  // State to track which h2 is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col items-center">
      {/* Vision Principles Section with Background */}
      <div className="bg-gradient-to-r from-yellow-50 to-pink-50 p-6 md:p-10 rounded-lg shadow-lg mb-10 w-full">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-8 md:mb-16 text-center">
          Our Vision
        </h2>
        
        {/* Word Cloud */}
        <div className="flex flex-wrap justify-center">
          {visionPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              className={`m-2 p-3 font-semibold text-center rounded-full transition-transform ${getRandomTextStyle()}`}
              whileHover={{ scale: 1.1, rotate: getRandomRotation() }} // Rotation effect
            >
              {principle}
            </motion.div>
          ))}
        </div>

        {/* Full-width splash image with text overlay */}
        <div className="relative w-full mt-6 md:mt-10">
          <img
            src={ImageB}
            alt="Vision Splash"
            className="w-full h-48 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
            <div className="flex flex-col items-center">
              {['Fostering inclusive', 'Facilitating access', 'Decreasing dependencies'].map((title, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center mb-4 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">{title}</h2>
                  {hoveredIndex === index && (
                    <motion.p
                      className="text-base md:text-lg mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {visionDetails[index]}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Function to return random text sizes and colors
const getRandomTextStyle = () => {
  const sizes = [
    "text-2xl md:text-3xl",
    "text-4xl md:text-5xl",
    "text-xl md:text-2xl",
    "text-3xl md:text-4xl",
  ];
  const colors = [
    "text-yellow-600 bg-white",
    "text-pink-600 bg-white",
    "text-blue-600 bg-white",
    "text-green-600 bg-white",
    "text-purple-600 bg-white",
    "text-red-600 bg-white",
    "text-teal-600 bg-white",
  ];

  // Randomly select text size and color
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return `${randomSize} ${randomColor} hover:bg-opacity-80`;
};

// Function to return random rotation for the word cloud effect
const getRandomRotation = () => {
  const rotations = [-5, 5, -10, 10, 0];
  return rotations[Math.floor(Math.random() * rotations.length)];
};
