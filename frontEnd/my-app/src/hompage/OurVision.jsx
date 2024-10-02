import { motion } from "framer-motion";

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
    "Without Stigma"
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-pink-50 p-10 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-16 text-center">
        Our Vision
      </h2>
      <div className="flex flex-wrap justify-center">
        {visionPrinciples.map((principle, index) => (
          <motion.div
            key={index}
            className={`m-4 font-semibold text-center transition-transform duration-300 p-4 rounded-full shadow-lg ${getTextStyle(index)}`}
            whileHover={{ scale: 1.1, rotate: 3 }}
          >
            {principle}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Function to return different text styles
const getTextStyle = (index) => {
  const sizes = ["text-3xl", "text-4xl", "text-5xl", "text-2xl", "text-3xl", "text-4xl", "text-3xl", "text-2xl", "text-4xl", "text-5xl"];
  const colors = [
    "text-yellow-600 bg-white",
    "text-pink-600 bg-white",
    "text-blue-600 bg-white",
    "text-green-600 bg-white",
    "text-purple-600 bg-white",
    "text-red-600 bg-white",
    "text-teal-600 bg-white",
    "text-orange-600 bg-white",
    "text-indigo-600 bg-white",
    "text-gray-600 bg-white"
  ];

  return `${sizes[index]} ${colors[index]} hover:bg-opacity-80`;
};
