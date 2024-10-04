import React from "react";
import ElizabethImg from "./image/81.jpg";
import HannahImg from "./image/8.jpg";
import UsmanImg from "./image/79.jpg";

const TeamPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h1>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Elizabeth's Card */}
          <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-6 relative overflow-hidden">
            <a href="/elizabeth-klapheke">
              <img
                src={ElizabethImg}
                alt="Elizabeth Klapheke"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
            </a>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              <a href="/elizabeth-klapheke" className="hover:underline">
                Elizabeth Klapheke
              </a>
            </h2>
            <p className="text-gray-600">
              Elizabeth is a Mental Health and Child Protection expert with over
              ten years of experience working across South Africa, Bangladesh,
              and Germany.
            </p>
            <div className="absolute bottom-2 right-2">
              <a href="/elizabeth-klapheke" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>

          {/* Hannah's Card */}
          <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-6 relative overflow-hidden">
            <a href="/hannah-lane">
              <img
                src={HannahImg}
                alt="Hannah Lane"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
            </a>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              <a href="/hannah-lane" className="hover:underline">
                Hannah Lane
              </a>
            </h2>
            <p className="text-gray-600">
              Hannah is a researcher with over four years of experience leading
              research on conflict, displacement, and child protection.
            </p>
            <div className="absolute bottom-2 right-2">
              <a href="/hannah-lane" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>

          {/* Usman's Card */}
          <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-6 relative overflow-hidden">
            <a href="/usman-shah">
              <img
                src={UsmanImg}
                alt="Usman Shah"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
            </a>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              <a href="/usman-shah" className="hover:underline">
                Usman Shah
              </a>
            </h2>
            <p className="text-gray-600">
              Usman is an international researcher who has led development
              research across countries, including Syria and Jordan.
            </p>
            <div className="absolute bottom-2 right-2">
              <a href="/usman-shah" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
