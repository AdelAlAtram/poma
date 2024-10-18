import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  UsersIcon,
  BookOpenIcon,
  ChartBarIcon,
  ArrowLeftOnRectangleIcon,
  InformationCircleIcon,
  LifebuoyIcon
} from "@heroicons/react/24/outline"; // Import new icons

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem("token"); // Adjust the key based on your implementation

    // Optionally, redirect to the login page or another page
    window.location.href = "/poma/admin/login"; // Change the URL to your desired route
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-800 text-gray-200 w-64 lg:relative lg:translate-x-0 lg:flex-shrink-0`}
      >
        <div className="p-4 text-center text-xl font-bold border-b border-gray-700">
          Admin Dashboard
        </div>
        <ul className="mt-4 space-y-2 px-2">
          <li className="hover:bg-gray-700 p-2 rounded-md">
            <Link to="/Teaminside" className="flex items-center space-x-2">
              <UsersIcon className="h-6 w-6" /> {/* Changed icon */}
              <span>Team</span>
            </Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md">
            <Link to="/Bloginside" className="flex items-center space-x-2">
              <BookOpenIcon className="h-6 w-6" />
              <span>Blogs</span>
            </Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md">
            <Link
              to="/Publicationsinside"
              className="flex items-center space-x-2"
            >
              <ChartBarIcon className="h-6 w-6" />
              <span>Publications</span>
            </Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md">
            <Link
              to="/updatesandinfoinside"
              className="flex items-center space-x-2"
            >
              <InformationCircleIcon className="h-6 w-6" />
              <span>Updates And Info</span>
            </Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md">
            <Link
              to="/support"
              className="flex items-center space-x-2"
            >
              <LifebuoyIcon className="h-6 w-6" />
              <span>Support</span>
            </Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md">
            <Link
              onClick={handleLogout}
              className="flex items-center space-x-2"
            >
              <ArrowLeftOnRectangleIcon className="h-6 w-6" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}

      {/* Dashboard Content - Outlet for rendering child components */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
