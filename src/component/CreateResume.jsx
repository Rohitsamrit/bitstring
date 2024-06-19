import React, { useState } from "react";

const CreateResume = () => {
  const [resume, setResume] = useState(null);
  const [resumeBase64, setResumeBase64] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    schoolName: "",
    schoolBoard: "",
    schoolPercentage: "",
    juniorCollegeName: "",
    juniorCollegeBoard: "",
    juniorCollegePercentage: "",
    college: "",
    collegeDegree: "",
    collegeDuration: "",
    collegePointer: "",
    jobRole: "",
    experience: "",
    internships: "",
    projects: "",
    technicalSkills: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setResumeBase64(reader.result.split(",")[1]);
      };
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-grow">
        {/* Resume Preview Section */}
        <div className="w-1/2 p-4 flex flex-col">
          <div className="flex-grow bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Resume Preview
            </h1>
            <div className="mb-4">
              <label
                htmlFor="resumeUpload"
                className="block text-gray-700 font-semibold mb-2"
              >
                Upload Resume
              </label>
              <input
                type="file"
                id="resumeUpload"
                accept=".pdf"
                onChange={handleFileUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="bg-gray-200 p-4 rounded-md flex-grow overflow-auto">
              {resumeBase64 && (
                <iframe
                  src={`data:application/pdf;base64,${resumeBase64}`}
                  width="100%"
                  height="700px"
                  title="Resume Preview"
                  className="border rounded-md"
                />
              )}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-4 flex flex-col">
          <div className="flex-grow bg-white rounded-lg shadow-md p-6 overflow-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Create Resume
            </h1>
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
                        placeholder="Enter Duration (e.g., 2019-2023)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="collegePointer"
                        className="block text-gray-700 font-semibold mb-1"
                      >
                        Pointer
                      </label>
                      <input
                        type="text"
                        id="collegePointer"
                        name="collegePointer"
                        value={formData.collegePointer}
                        onChange={handleFormChange}
                        placeholder="Enter Pointer"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="jobRole"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Job Role
                  </label>
                  <select
                    id="jobRole"
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Job Role</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label
                    htmlFor="experience"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Experience/Internships
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label
                    htmlFor="projects"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Projects
                  </label>
                  <textarea
                    id="projects"
                    name="projects"
                    value={formData.projects}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label
                    htmlFor="technicalSkills"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Technical Skills
                  </label>
                  <textarea
                    id="technicalSkills"
                    name="technicalSkills"
                    value={formData.technicalSkills}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateResume;
