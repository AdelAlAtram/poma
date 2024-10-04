import React from "react";
import MissionImage from "./image/81.jpg";
import MissionImag2 from "./image/8.jpg";
import MissionImag3 from "./image/79.jpg";
import MissionImag4 from "./image/76.jpg";

export default function AboutUs() {
  return (
    <>
      {/* Full-Width Image with Text Overlay (1st Section) */}
      <section
        className="relative w-full h-[80vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${MissionImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center">
            Who We Are
          </h2>
        </div>
      </section>

      {/* Card Section with Title and Paragraph */}
      <section className="bg-gray-100 py-12 md:py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            MENTAL HEALTH IS A FUNDAMENTAL RIGHT
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            It should be inclusive for all.
            <br />
            <span className="font-bold">
              We are dedicated to integrating all types of mental health care,
              from preventive measures to comprehensive treatment.
            </span>
          </p>
        </div>
      </section>

      {/* Full-Width Image with Text Overlay (2nd Section) */}
      <section
        className="relative w-full h-[80vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${MissionImag2})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-2 md:mb-4">
            WE ARE A TEAM
          </h2>
          <p className="text-xl md:text-3xl font-extrabold text-white max-w-2xl md:max-w-4xl">
            Bringing together psychologists, professors, social workers,
            providers, helpers, researchers, and communities working towards a
            common objective: to provide psychological and mental health support
            for all.
          </p>
        </div>
      </section>

      {/* Card Section with Title and Paragraph */}
      <section className="bg-gray-100 py-12 md:py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            THROUGHOUT THE WORLD
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We have teams working collectively with communities, stakeholders,
            advocates, policymakers, and providers to ensure the foundations of
            clinical mental health are implemented safely and with quality.
          </p>
        </div>
      </section>

      {/* Full-Width Image with Text Overlay (4th Section) */}
      <section
        className="relative w-full h-[80vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${MissionImag3})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-2 md:mb-4">
            AT THE BEGINNING
          </h2>
          <p className="text-xl md:text-3xl font-extrabold text-white max-w-2xl md:max-w-4xl">
            We began assisting those affected by conflict and ongoing exposure
            to trauma.
          </p>
        </div>
      </section>

      {/* Card Section with Title and Paragraph */}
      <section className="bg-gray-100 py-12 md:py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            Our Approach
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Our approach is centered on innovation and collaboration. We strive
            to create solutions that not only meet the needs of our clients but
            also empower them to succeed in their endeavors.
          </p>
        </div>
      </section>

      {/* Full-Width Image with Text Overlay (6th Section) */}
      <section
        className="relative w-full h-[80vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${MissionImag4})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-2 md:mb-4">
            NOW
          </h2>
          <p className="text-xl md:text-3xl font-extrabold text-white max-w-2xl md:max-w-4xl">
            Now we are exploring how we can collectively further contribute to
            global mental health.
          </p>
        </div>
      </section>
    </>
  );
}
