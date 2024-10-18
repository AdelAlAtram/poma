import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Support() {
  const [supportRequests, setSupportRequests] = useState([]);

  const fetchSupportRequests = async () => {
    try {
      const response = await axios.get("http://localhost:5000/support");
      setSupportRequests(response.data); // Assuming response.data is an array of support requests
    } catch (error) {
      console.error("Error fetching support requests:", error);
    }
  };

  useEffect(() => {
    fetchSupportRequests();
  }, []);

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Support Requests (
            <span className="font-bold text-green-500">
              {supportRequests?.Supports?.length}
            </span>
            )
          </h2>
        </div>
        <div className="mt-10 grid max-w-2xl gap-8 lg:max-w-none lg:grid-cols-3 sm:gap-y-16 border-t border-gray-200 pt-10">
          {supportRequests?.Supports?.map((request) => (
            <article
              key={request.id}
              className="flex flex-col max-w-xl bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="text-xs font-medium text-gray-600 mb-3">
                {new Date(request.createdAt).toLocaleDateString()}
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  {request.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{request.email}</p>
              </div>
              <p className="mt-4 text-gray-700">{request.message}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
