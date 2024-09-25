import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import LogoImage from "./image/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-light-green-50 py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Section */}
        <div className="col-span-1 flex flex-col">
          {/* Logo */}
          <img src={LogoImage} alt="PoMA Logo" className="w-28 mb-4" />
          <p className="text-gray-700 mb-4">
            PoMA is a global organization that collaborates with many
            populations and communities to develop mental health and integrate
            psychological support throughout programs, systems, and frameworks.
          </p>
          <p className="font-bold text-gray-800 mb-1">PoMA USA: 501(c)3</p>
          <p className="text-gray-700">
            PoMA Switzerland: Non Profit Association
          </p>

          <div className="flex justify-left mt-6 space-x-4 text-purple-700 group">
            {" "}
            {/* Add group class here */}
            <a href="/" className="hover:text-[rgb(63,208,162)]">
              <FaFacebookF size={24} />
            </a>
            <a href="/" className="hover:text-[rgb(63,208,162)]">
              <FaInstagram size={24} />
            </a>
            <a href="/" className="hover:text-[rgb(63,208,162)]">
              <FaYoutube size={24} />
            </a>
            <a href="/" className="hover:text-[rgb(63,208,162)]">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Right Sections - Links */}
        <div className="col-span-1">
          <h3 className="text-purple-700 font-semibold mb-2">WHAT WE DO</h3>
          <ul className="space-y-1">
            <li>Mental Health & Psychology Development</li>
            <li>Child Protection & Social Policy</li>
            <li>Gender and Gender-based Violence (GBV)</li>
            <li>Conflict</li>
            <li>Human Rights</li>
            <li>Research</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-purple-700 font-semibold mb-2">BLOG</h3>
          <ul className="space-y-1">
            <li>News and current events</li>
            <li>POMA's Stories</li>
            <li>In their words</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-purple-700 font-semibold mb-2">OUR WAY</h3>
          <ul className="space-y-1">
            <li>.....</li>
          </ul>

          {/* Donate Button */}
          <button className="mt-4 px-4 py-2 bg-purple-700 text-white font-semibold rounded-md">
            Donate
          </button>
        </div>
      </div>

      {/* Social Icons */}

      {/* Copyright */}
      <div className="text-center text-gray-600 mt-6">
        &copy; 2024 PoMA. All Rights Reserved.
      </div>
    </footer>
  );
}
