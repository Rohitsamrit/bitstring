import React from "react";
import { Link } from "react-router-dom";
import { UserPlusIcon, UserIcon } from "@heroicons/react/24/solid";

function Home() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="space-y-8">
          <div className="flex space-x-8">
            <Link
              to="/create-resume"
              className="bg-white shadow-lg p-6 rounded-lg text-center w-64 h-64 flex flex-col justify-center items-center transition duration-300 hover:bg-blue-100"
            >
              <UserPlusIcon
                className="text-blue-500 mb-4"
                style={{ height: "40px", width: "40px" }}
              />
              <h2 className="text-xl font-semibold">Create Resume</h2>
            </Link>
            <Link
              to="/view-resume"
              className="bg-white shadow-lg p-6 rounded-lg text-center w-64 h-64 flex flex-col justify-center items-center transition duration-300 hover:bg-green-100"
            >
              <UserIcon
                className="text-green-500 mb-4"
                style={{ height: "40px", width: "40px" }}
              />
              <h2 className="text-xl font-semibold">View Resume</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
