import React from "react";
import MissionImage from "./image/IMG_0155.JPG";
import MissionImag2 from "./image/IMG_0328.JPG";

export default function AboutUs() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-[#8aeecf1b] to-[#8aeece4b] p-10 lg:p-20">
        <h2 className="text-5xl font-extrabold text-center mb-16">About Us</h2>

        {/* First Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between relative lg:space-x-8 mb-20">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              MENTAL HEALTH IS A FUNDAMENTAL RIGHT
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              it should be inclusive for all{" "}
              <span style={{ fontWeight: "bold" }}>
                We are dedicated to integrating all types of mental health care,
                from preventive measures to comprehensive treatment
              </span>
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-[85%] mx-auto rounded-[50%] overflow-hidden relative transform rotate-3">
              <img
                src={MissionImage}
                alt="Mission"
                className="w-full h-auto object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Second Section - Image on the Left */}
        <div className="flex flex-col lg:flex-row items-center justify-between relative lg:space-x-8 mb-20 bg-white rounded-lg p-8 shadow-md">
          <div className="lg:w-1/2 relative">
            <div className="w-[85%] mx-auto rounded-[50%] overflow-hidden relative transform -rotate-3">
              <img
                src={MissionImag2}
                alt="Mission"
                className="w-full h-auto object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0 relative z-10">
            <h2 className="text-4xl font-bold mb-6">WE ARE A TEAM</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              bringing together psychologists, professors, social workers,
              providers, helpers, researchers, and communities working towards a
              common objective: to provide psychological and mental health
              support for all
            </p>
          </div>
        </div>

        {/* Third Section - Centered Image with Animation */}
        <div className="text-center relative z-10 mb-20">
          <h2 className="text-4xl font-bold mb-12">THROUGHOUT THE WORLD</h2>
          <div className="w-[50%] mx-auto rounded-full overflow-hidden transform rotate-6 transition-transform duration-500 hover:scale-105">
            <img
              src={MissionImage}
              alt="Our Values"
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>
          <p className="text-gray-700 mt-10 leading-relaxed mx-auto lg:w-[50%]">
            we have teams working collectively with communities, stakeholders,
            advocates, policymakers, and providers to ensure the foundations of
            clinical mental health are implemented safely and with quality
          </p>
        </div>

        {/* Fourth Section - Text and Image Overlapping */}
        <div className="flex flex-col lg:flex-row items-center justify-between relative lg:space-x-8 mb-20">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 relative z-10">
            <h2 className="text-4xl font-bold mb-6">AT THE BEGINNING</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              we began assisting those affected by conflict and ongoing
              exposure to trauma
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-[85%] mx-auto rounded-[50%] overflow-hidden relative transform rotate-6">
              <img
                src={MissionImag2}
                alt="Commitment"
                className="w-full h-auto object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Fifth Section - New Addition with Creative Background */}
        <div className="flex flex-col lg:flex-row items-center justify-between relative lg:space-x-8 mb-20 bg-gray-50 rounded-lg p-8 shadow-md">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 relative z-10">
            <h2 className="text-4xl font-bold mb-6">Our Approach</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our approach is centered on innovation and collaboration. We
              strive to create solutions that not only meet the needs of our
              clients but also empower them to succeed in their endeavors.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-[85%] mx-auto rounded-[50%] overflow-hidden relative transform -rotate-6">
              <img
                src={MissionImage}
                alt="Approach"
                className="w-full h-auto object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* New Creative Section with Overlapping Text and Image */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between lg:space-x-8 mb-20">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 relative z-10">
            <h2 className="text-4xl font-bold mb-6">NOW</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Now we are exploring how we can collectively further contribute to
              global mental health
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0  opacity-50 rounded-lg"></div>
            <div className="w-[85%] mx-auto rounded-lg overflow-hidden relative z-10">
              <img
                src={MissionImag2}
                alt="Innovative Solutions"
                className="w-full h-auto object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
