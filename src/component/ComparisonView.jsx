import React from "react";

function ComparisonView({ profiles, onClose, onRemark }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-700">
              Compare Profiles
            </h2>
            <button
              className="text-gray-500 hover:text-red-500 transition duration-300"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {profiles.map((profile, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-bold text-indigo-600">
                  {profile.name}
                </h3>
                <p>
                  <span className="font-semibold">Experience:</span>{" "}
                  {profile.experience} years
                </p>
                <p>
                  <span className="font-semibold">Job Role:</span>{" "}
                  {profile.jobRole}
                </p>
                <p>
                  <span className="font-semibold">Skills:</span>{" "}
                  {profile.skills.join(", ")}
                </p>

                {/* Add more fields as needed */}

                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => onRemark(profile.id, "Accept")}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => onRemark(profile.id, "Reject")}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => onRemark(profile.id, "Pending")}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
                  >
                    Pending
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonView;
