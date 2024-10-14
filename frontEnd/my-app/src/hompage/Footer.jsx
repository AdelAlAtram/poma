import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
            <a
              href="https://www.instagram.com/poma.global/"
              className="hover:text-[rgb(63,208,162)]"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.linkedin.com/company/peace-of-mind-association/"
              className="hover:text-[rgb(63,208,162)]"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Right Sections - Links */}

        <div className="col-span-1">
          <h3 className="text-purple-700 font-semibold mb-2">About us</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="/AboutUs"
                className="text-gray-700 hover:text-purple-500"
              >
                Who We Are
              </a>
            </li>
            <li>
              <a
                href="/OurVision"
                className="text-gray-700 hover:text-purple-500"
              >
                Our vision
              </a>
            </li>
            <li>
              <a
                href="/OurWay"
                className="text-gray-700 hover:text-purple-500"
              >
                Our Way
              </a>
            </li>
            <li>
              <a
                href="/Corepeinciples"
                className="text-gray-700 hover:text-purple-500"
              >
                Core peinciples
              </a>
            </li>
            <li>
              <a
                href="/communityandcontribution"
                className="text-gray-700 hover:text-purple-500"
              >
                Team And Community
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-purple-700 font-semibold mb-2">
            What we do & impact
          </h3>
          <ul className="space-y-1">
            <li>
              <a
                href="/MentalHealth"
                className="text-gray-700 hover:text-purple-500"
              >
                Mental Health Development
              </a>
            </li>
            <li>
              <a
                href="/ChildProtection"
                className="text-gray-700 hover:text-purple-500"
              >
                Child And Social Policy & Practice
              </a>
            </li>
            <li>
              <a
                href="/HumanRights"
                className="text-gray-700 hover:text-purple-500"
              >
                Human Rights & Justice & Peace
              </a>
            </li>
            <li>
              <a
                href="/Research"
                className="text-gray-700 hover:text-purple-500"
              >
                Research & Evidence Informed Evaluations
              </a>
            </li>
            <li>
              <a
                href="/WhereWeWork"
                className="text-gray-700 hover:text-purple-500"
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-purple-700 font-semibold mb-2">Where we work</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="/Publications"
                className="text-gray-700 hover:text-purple-500"
              >
                Publications
              </a>
            </li>
            <li>
              <a href="/Blogs" className="text-gray-700 hover:text-purple-500">
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/POMAStories"
                className="text-gray-700 hover:text-purple-500"
              >
                Updates And Info
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-600 mt-6">
        &copy; 2024 PoMA. All Rights Reserved.
      </div>
    </footer>
  );
}
