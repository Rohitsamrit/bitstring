import React, { useState } from "react";
import Resumeform from "./Resumeform";

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
      const fileType = file.type;
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "image/jpeg",
        "image/png",
        "image/gif",
      ];

      if (validTypes.includes(fileType)) {
        setResume(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setResumeBase64(reader.result);
        };
      } else {
        alert("Please upload a PDF, Word document, or image file.");
      }
    }
  };

  const renderFilePreview = () => {
    if (!resumeBase64 || !resume) return null;

    const fileType = resume.type;
    if (fileType === "application/pdf") {
      return (
        <iframe
          src={resumeBase64}
          width="100%"
          height="600px"
          title="Resume Preview"
          className="border rounded-md"
        />
      );
    } else if (fileType.startsWith("image/")) {
      return (
        <img
          src={resumeBase64}
          alt="Resume Preview"
          style={{ maxWidth: "100%", maxHeight: "600px" }}
          className="border rounded-md"
        />
      );
    } else {
      // For other file types (e.g., Word documents)
      return (
        <div className="p-4 border rounded-md bg-white">
          <h3 className="text-lg font-semibold mb-2">File Information:</h3>
          <p>
            <strong>Name:</strong> {resume.name}
          </p>
          <p>
            <strong>Type:</strong> {resume.type}
          </p>
          <p>
            <strong>Size:</strong> {(resume.size / 1024 / 1024).toFixed(2)} MB
          </p>
          <p>
            <strong>Last Modified:</strong>{" "}
            {new Date(resume.lastModified).toLocaleString()}
          </p>
          <a
            href={resumeBase64}
            download={resume.name}
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Download File
          </a>
          <p className="mt-4 text-sm text-gray-600">
            Note: Preview is not available for this file type. Please download
            the file to view its contents.
          </p>
        </div>
      );
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
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                onChange={handleFileUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="bg-gray-200 p-4 rounded-md flex-grow overflow-auto">
              {renderFilePreview()}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-4 flex flex-col">
          <Resumeform
            formData={formData}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateResume;
