import React from "react";

function Resumeform({ formData, handleFormChange, handleSubmit }) {
  return (
    <div className="flex-grow bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Create Resume</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="dob"
              className="block text-gray-700 font-semibold mb-2"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Education
            </h3>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="schoolName"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  School Name
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleFormChange}
                  placeholder="Enter School Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="schoolBoard"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Board
                </label>
                <input
                  type="text"
                  id="schoolBoard"
                  name="schoolBoard"
                  value={formData.schoolBoard}
                  onChange={handleFormChange}
                  placeholder="Enter Board"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="schoolPercentage"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Percentage
                </label>
                <input
                  type="text"
                  id="schoolPercentage"
                  name="schoolPercentage"
                  value={formData.schoolPercentage}
                  onChange={handleFormChange}
                  placeholder="Enter Percentage"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="juniorCollegeName"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Junior College Name
                </label>
                <input
                  type="text"
                  id="juniorCollegeName"
                  name="juniorCollegeName"
                  value={formData.juniorCollegeName}
                  onChange={handleFormChange}
                  placeholder="Enter Junior College Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="juniorCollegeBoard"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Board
                </label>
                <input
                  type="text"
                  id="juniorCollegeBoard"
                  name="juniorCollegeBoard"
                  value={formData.juniorCollegeBoard}
                  onChange={handleFormChange}
                  placeholder="Enter Board"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="juniorCollegePercentage"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Percentage
                </label>
                <input
                  type="text"
                  id="juniorCollegePercentage"
                  name="juniorCollegePercentage"
                  value={formData.juniorCollegePercentage}
                  onChange={handleFormChange}
                  placeholder="Enter Percentage"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label
                  htmlFor="college"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  College/University Name
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleFormChange}
                  placeholder="Enter College/University Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="collegeDegree"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Degree
                </label>
                <input
                  type="text"
                  id="collegeDegree"
                  name="collegeDegree"
                  value={formData.collegeDegree}
                  onChange={handleFormChange}
                  placeholder="Enter Degree"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="collegeDuration"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Duration
                </label>
                <input
                  type="text"
                  id="collegeDuration"
                  name="collegeDuration"
                  value={formData.collegeDuration}
                  onChange={handleFormChange}
                  placeholder="Enter Duration (e.g., 2018-2022)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="collegePercentage"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Percentage
                </label>
                <input
                  type="text"
                  id="collegePercentage"
                  name="collegePercentage"
                  value={formData.collegePercentage}
                  onChange={handleFormChange}
                  placeholder="Enter Percentage"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="hobbies"
              className="block text-gray-700 font-semibold mb-2"
            >
              Hobbies
            </label>
            <input
              type="text"
              id="hobbies"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="summary"
              className="block text-gray-700 font-semibold mb-2"
            >
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="skills"
              className="block text-gray-700 font-semibold mb-2"
            >
              Skills
            </label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Resumeform;
