import React, { useState } from "react";
import ElizabethImg from "./image/81.jpg";
import HannahImg from "./image/8.jpg";
import UsmanImg from "./image/79.jpg";
import LylaImg from "./image/82.jpg";

const TeamPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h1>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Lyla's Card */}
          <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-6 relative overflow-hidden">
            <a href="/lyla-schwartz">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3-pHiZS6r5k7QfGhiB-73EOD2o2EQoj6XQ&s"
                alt="Lyla Schwartz"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
            </a>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {/* <a href="/lyla-schwartz" className="hover:underline"> */}
                Lyla Schwartz
              {/* </a> */}
            </h2>
            <p className="text-gray-600">
              Lyla is a critical psychologist practitioner and researcher with expertise in childhood trauma, gender-based violence, childhood abandonment, and war conflict trauma. She has worked in Haiti, South Africa, Iraq, and other regions.
            </p>
          </div>

          {/* Elizabeth's Card */}
          <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-6 relative overflow-hidden">
            <a href="/elizabeth-klapheke">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3-pHiZS6r5k7QfGhiB-73EOD2o2EQoj6XQ&s"
                alt="Elizabeth Klapheke"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
            </a>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {/* <a href="/elizabeth-klapheke" className="hover:underline"> */}
                Elizabeth Klapheke
              {/* </a> */}
            </h2>
            <p className="text-gray-600">
              Elizabeth is a Mental Health and Child Protection expert with over ten years of experience working across South Africa, Afghanistan, and Ukraine.
            </p>
          </div>

          {/* Hannah's Card */}
          <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-6 relative overflow-hidden">
            <a href="/hannah-lane">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3-pHiZS6r5k7QfGhiB-73EOD2o2EQoj6XQ&s"
                alt="Hannah Lane"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
            </a>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {/* <a href="/hannah-lane" className="hover:underline"> */}
                Hannah Lane
              {/* </a> */}
            </h2>
            <p className="text-gray-600">
              Hannah has managed projects for child protection and research in Syria, Ukraine, and Afghanistan.
            </p>
          </div>

          {/* Usman's Card */}
          <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-6 relative overflow-hidden">
            {/* <a href="/usman-shah"> */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3-pHiZS6r5k7QfGhiB-73EOD2o2EQoj6XQ&s"
                alt="Usman Shah"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
            {/* </a> */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              <a href="/usman-shah" className="hover:underline">
                Usman Shah
              </a>
            </h2>
            <p className="text-gray-600">
              Usman is an international researcher who has led development projects in Syria, Afghanistan, and across conflict zones.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-between bg-white rounded-lg shadow-lg p-8 mb-12">
          {/* Left Side: Contact Information */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              To learn more about our work or enquire how we might work with your organization or team, contact us directly or fill out the form <br/> and we will get back to you promptly.
            </p>
            <p className="text-gray-600">
              Address: 147 Wheelmeadow Drive, Longmeadow, Boston, MA 01106
            </p>
            <p className="text-gray-600">
              Gerichtlichkeitgassse 21, 3011 Bern, BE, Switzerland
            </p>
            <p className="text-gray-600">
              Afghanistan, Kabul
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="text-gray-700 mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 mb-4"
              />
              <label className="text-gray-700 mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 mb-4"
              />
              <label className="text-gray-700 mb-1" htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 mb-4"
                rows="4"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
