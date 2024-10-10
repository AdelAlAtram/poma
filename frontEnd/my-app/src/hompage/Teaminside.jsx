import React, { useRef } from "react";

const Teaminside = () => {
  const memberRef = useRef(null);

  const scrollUp = () => {
    if (memberRef.current) {
      memberRef.current.scrollBy({ top: -400, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (memberRef.current) {
      memberRef.current.scrollBy({ top: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 lg:min-h-[40rem]">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Poma Team
              <br />
              <br />
              Add, Edit And Remove Your Team Members Data
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Click the button to add new members.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-100 transition duration-300"
              >
                Add New
              </a>
            </div>
          </div>

          {/* Scrollable team members section */}
          <div
            className="relative mt-16 max-h-[400px] overflow-y-auto"
            ref={memberRef}
          >
            <div className="flex flex-col space-y-4">
              {/* Team Member Card 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden border border-gray-200">
                <a href="/hannah-lane">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3-pHiZS6r5k7QfGhiB-73EOD2o2EQoj6XQ&s"
                    alt="Hannah Lane"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                </a>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Hannah Lane
                </h2>
                <p className="text-gray-600 mb-2">
                  Hannah has managed projects for child protection and research
                  in Syria, Ukraine, and Afghanistan.
                </p>
                <a
                  href="/hannah-lane"
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>

              {/* Team Member Card 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden border border-gray-200">
                <a href="/hannah-lane">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3-pHiZS6r5k7QfGhiB-73EOD2o2EQoj6XQ&s"
                    alt="Hannah Lane"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                </a>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Hannah Lane
                </h2>
                <p className="text-gray-600 mb-2">
                  Hannah has managed projects for child protection and research
                  in Syria, Ukraine, and Afghanistan.
                </p>
                <a
                  href="/hannah-lane"
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>

              {/* Add more team members similarly here */}
            </div>
          </div>

          {/* Scroll Arrows */}

          <div className="absolute top-1/2 right-0 transform  -translate-y-1/2">
            <button
              className="bg-gray-600 text-white p-4 m-2 rounded-full hover:bg-gray-500"
              onClick={scrollUp}
            >
              ↑
            </button>
            <br />
            <button
              className="bg-gray-600 text-white p-4 m-2 rounded-full hover:bg-gray-500"
              onClick={scrollDown}
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaminside;
