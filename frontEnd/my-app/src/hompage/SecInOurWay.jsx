import React, { useState } from "react";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline"; // Importing the arrow icon

export default function SecInOurWay() {
  // State to manage the current selected item
  const [selectedContent, setSelectedContent] = useState({
    title: "Interdisciplinary Collaboration",
    description:
      "Working as a team of professionals in psychology, social work, gender expert, M&E experts, and research, to deliver integrated care, reducing fragmentation and duplicate services",
  });

  // Content data to switch between
  const contentData = {
    innovate: {
      title: "Interdisciplinary Collaboration",
      description:
        "Working as a team of professionals in psychology, social work, gender expert, M&E experts, and research, to deliver integrated care, reducing fragmentation and duplicate services",
    },
    education: {
      title: "Contextualized and accessible care",
      description:
        "Developing and delivering support that is culturally appropriate and relevant to the needs and environment, respecting and responding to the diverse backgrounds of individuals and communities",
    },
    carbonFootprint: {
      title: "Sustainable Systems Of Care",
      description: "including communities in the delivery of programs allows us to engage target communities, to build strong support networks, and to create sustainable systems of care that can continue after our team has left, with resources and tools available for the long-term",
    },
    communities: {
      title: "Empowering Beneficiaries",
      description: "we aim to empower individuals and communities to participate and take an active role in their own care and decision-making processes",
    },
    results: {
      title: "Results",
      description: "Increase access and reduce disparities in care available Enhanced self-sufficiency and social cohesion sustainable systems of care that will ensure long-lasting impact",
    },
  };

  // Function to update the right content when an item is clicked
  const handleItemClick = (itemKey) => {
    setSelectedContent(contentData[itemKey]);
  };

  return (
    <div className="flex mt-2 flex-col sm:flex-row min-h-[70vh]">
      {/* Left Side with clickable options */}
      <div className="w-full sm:w-1/3 p-6 space-y-6">
        <h3
          className="cursor-pointer text-lg font-bold flex items-center justify-between border-4 p-2 rounded-xl"
          onClick={() => handleItemClick("innovate")}
        >
          Interdisciplinary Collaboration
          <ArrowRightIcon className="w-6 h-6 hidden lg:block" />
          <ArrowDownIcon className="w-6 h-6 lg:hidden" />
        </h3>
        <h3
          className="cursor-pointer text-lg font-bold flex items-center justify-between border-4 p-2 rounded-xl"
          onClick={() => handleItemClick("education")}
        >
          Contextualized and accessible care
          <ArrowRightIcon className="w-6 h-6 hidden lg:block" />
          <ArrowDownIcon className="w-6 h-6 lg:hidden" />
        </h3>
        <h3
          className="cursor-pointer text-lg font-bold flex items-center justify-between border-4 p-2 rounded-xl"
          onClick={() => handleItemClick("carbonFootprint")}
        >
          Sustainable Systems Of Care

          <ArrowRightIcon className="w-6 h-6 hidden lg:block" />
          <ArrowDownIcon className="w-6 h-6 lg:hidden" />
        </h3>
        <h3
          className="cursor-pointer text-lg font-bold flex items-center justify-between border-4 p-2 rounded-xl"
          onClick={() => handleItemClick("communities")}
        >
          Empowering Beneficiaries
          <ArrowRightIcon className="w-6 h-6 hidden lg:block" />
          <ArrowDownIcon className="w-6 h-6 lg:hidden" />
        </h3>
        <h3
          className="cursor-pointer text-lg font-bold flex items-center justify-between border-4 p-2 rounded-xl"
          onClick={() => handleItemClick("results")}
        >
          Results
          <ArrowRightIcon className="w-6 h-6 hidden lg:block" />
          <ArrowDownIcon className="w-6 h-6 lg:hidden" />
        </h3>
      </div>

      {/* Right Side for dynamic content */}
      <div className="w-full sm:w-2/3 bg-gray-100 p-6 flex ">
        <div>
          <h1 className="text-4xl font-bold mb-4">{selectedContent.title}</h1>
          <p className="text-lg">{selectedContent.description}</p>
        </div>
      </div>
    </div>
  );
}
