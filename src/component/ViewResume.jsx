import React, { useState, useEffect } from "react";
import { BlobProvider } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

function ViewResumes() {
  const [resumes, setResumes] = useState([]);
  const [selectedResume, setSelectedResume] = useState(null);
  const [experienceFilter, setExperienceFilter] = useState("");
  const [jobRoleFilter, setJobRoleFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [contextMenu, setContextMenu] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [resumesData, setResumesData] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const handleStatusFilterChange = (status) => {
    setStatusFilter(status);
  };
  const handleDateRangeChange = (dates) => {
    const [start, end] = dates;
    setDateRange([start, end]);
  };

  useEffect(() => {
    const fetcher = async () => {
      const resp = await fetch("http://localhost:5501/all", {
        method: "GET",
      });
      const respJson = await resp.json();
      return respJson.data;
    };
    fetcher()
      .then((data) => {
        console.log("datawrrr", data);
        setResumesData(data);
        setResumes(data.map((resume) => ({ ...resume })));
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const filterAndSortResumes = () => {
    let filteredResumes = [...resumesData];

    // Filter by experience
    if (experienceFilter) {
      const [min, max] = experienceFilter.split("-").map(Number);
      filteredResumes = filteredResumes.filter(
        (resume) =>
          resume?.experience >= min && resume?.experience <= (max || Infinity)
      );
    }

    // Filter by job role
    if (jobRoleFilter) {
      filteredResumes = filteredResumes.filter(
        (resume) => resume?.jobRole === jobRoleFilter
      );
    }
    // Filter by status
    if (statusFilter !== "All") {
      filteredResumes = filteredResumes.filter(
        (resume) => resume?.status === statusFilter
      );
    }
    // Filter by date range
    if (startDate || endDate) {
      filteredResumes = filteredResumes.filter((resume) => {
        const createdAt = new Date(resume?.createdAt);
        if (startDate && endDate) {
          return createdAt >= startDate && createdAt <= endDate;
        } else if (startDate) {
          return createdAt >= startDate;
        } else if (endDate) {
          return createdAt <= endDate;
        }
        return true;
      });
    }

    // Sort resumes
    if (sortBy === "experienceAsc") {
      filteredResumes.sort((a, b) => a.experience - b.experience);
    } else if (sortBy === "experienceDesc") {
      filteredResumes.sort((a, b) => b.experience - a.experience);
    } else if (sortBy === "nameAsc") {
      filteredResumes.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "nameDesc") {
      filteredResumes.sort((a, b) => b.name.localeCompare(a.name));
    }

    setResumes(filteredResumes);
  };

  const resetFilters = () => {
    setExperienceFilter("");
    setJobRoleFilter("");
    setSortBy("");
    setStatusFilter("All");
    setStatusFilter("All");
    setDateRange([null, null]);
    setResumes(resumesData);
  };

  const handleContextMenu = (event, resumeId) => {
    event.preventDefault();
    setContextMenu({
      x: event.clientX,
      y: event.clientY,
      resumeId: resumeId,
    });
  };

  const handleContextMenuAction = async (action) => {
    if (contextMenu) {
      const res = await fetch(
        `http://localhost:5501/update?_id=${contextMenu.resumeId}&action=${action}`,
        {
          method: "GET",
        }
      );
      const resJson = await res.json();
      console.log(resJson);
      if (!resJson.ok) {
        alert(resJson.data);
      }
      const updatedResumes = resumes
        .map((resume) => {
          if (resume?._id === contextMenu.resumeId) {
            return { ...resume, status: action };
          }
          return resume;
        })
        .filter(Boolean); // This removes any null entries (rejected resumes)

      setResumes(updatedResumes);
      const fetcher = async () => {
        const resp = await fetch("http://localhost:5501/all", {
          method: "GET",
        });
        const respJson = await resp.json();
        return respJson.data;
      };
      fetcher()
        .then((data) => {
          console.log("datawrrr", data);
          setResumesData(data);
          setResumes(data.map((resume) => ({ ...resume })));
        })
        .catch((err) => {
          alert(err.message);
        });
      setContextMenu(null);
    }
  };
  // Get unique job roles for the dropdown
  const uniqueJobRoles = [
    ...new Set(resumesData.map((resume) => resume?.jobRole)),
  ];
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <div
      className="min-h-screen bg-gray-100 p-8"
      onClick={() => setContextMenu(null)}
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        Resume Portal
      </h1>

      {/* Filtering and sorting controls */}
      <div className="flex flex-wrap items-center justify-center space-x-4 mb-8">
        <select
          className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={experienceFilter}
          onChange={(e) => setExperienceFilter(e.target.value)}
        >
          <option value="">Experience (Any)</option>
          <option value="0-2">0-2 Years</option>
          <option value="3-5">3-5 Years</option>
          <option value="6-8">6-8 Years</option>
          <option value="9-">9+ Years</option>
        </select>

        <select
          className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={statusFilter}
          onChange={(e) => handleStatusFilterChange(e.target.value)}
        >
          <option value="All">Status (All)</option>
          <option value="Accept">Accepted</option>
          <option value="Pending">Pending</option>
        </select>

        <select
          className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={jobRoleFilter}
          onChange={(e) => setJobRoleFilter(e.target.value)}
        >
          <option value="">Job Role (Any)</option>
          {uniqueJobRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <select
          className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="experienceAsc">Experience (Low to High)</option>
          <option value="experienceDesc">Experience (High to Low)</option>
          <option value="nameAsc">Name (A-Z)</option>
          <option value="nameDesc">Name (Z-A)</option>
        </select>
        <div className="relative">
          <DatePicker
            selected={startDate}
            onChange={handleDateRangeChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            placeholderText="Select date range"
            showMonthDropdown
            showYearDropdown
            yearDropdownItemNumber={101} // Number of years shown in dropdown
            scrollableYearDropdown // Enables scrolling in year dropdown
            minDate={new Date(1950, 0, 1)} // Minimum selectable date
            maxDate={new Date(2050, 11, 31)} // Maximum selectable date
            dateFormat="MMMM d, yyyy"
            className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <CalendarDaysIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            width={20}
            height={20}
          />
        </div>

        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          onClick={filterAndSortResumes}
        >
          Apply
        </button>
        <button
          className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300"
          onClick={resetFilters}
        >
          Reset
        </button>
      </div>

      {/* Resume cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumes.map((resume) => (
          <div
            key={resume?._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300 relative"
            onClick={() => setSelectedResume(resume)}
            onContextMenu={(e) => handleContextMenu(e, resume?._id)}
          >
            <div className="p-6">
              <img
                src={
                  resume?.profilePic ||
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                alt={`${resume?.name}'s profile`}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500"
              />
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                {resume?.name}
              </h2>
              <p className="text-center text-indigo-600 font-semibold">
                {resume?.jobRole}
              </p>
              <p className="text-center text-gray-600">
                Experience: {resume?.experience} years
              </p>
              {resume?.status !== "Undecided" && (
                <p
                  className={`text-center font-bold mt-4 px-3 py-1 rounded-full
    ${
      resume?.status === "Accept"
        ? "bg-green-100 text-green-800"
        : resume?.status === "Pending"
        ? "bg-yellow-100 text-yellow-800"
        : resume?.status === "Reject"
        ? "bg-red-100 text-red-800"
        : "bg-white-100 text-gray-800"
    }`}
                >
                  {resume?.status}
                </p>
              )}

              <p className="text-center text-gray-500 mt-4 text-sm">
                Created: {format(new Date(resume?.createdAt), "MMM d, yyyy")}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Context Menu */}
      {contextMenu && (
        <div
          className="fixed bg-white shadow-lg rounded-lg overflow-hidden z-50 w-48 "
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
            onClick={() => handleContextMenuAction("Accept")}
          >
            <svg
              className="w-5 h-5 mr-3 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Accept
          </button>
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
            onClick={() => handleContextMenuAction("Reject")}
          >
            <svg
              className="w-5 h-5 mr-3 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Reject
          </button>
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
            onClick={() => handleContextMenuAction("Pending")}
          >
            <svg
              className="w-5 h-5 mr-3 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Pending
          </button>
        </div>
      )}

      {selectedResume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-indigo-700">
                  {selectedResume?.name}
                </h2>
                <button
                  className="text-gray-500 hover:text-red-500 transition duration-300"
                  onClick={() => setSelectedResume(null)}
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

              <div className="space-y-4">
                {/* old Personal Information */}
                {/* <p>
                  <span className="font-semibold">Experience:</span>{" "}
                  {selectedResume?.experience} years
                </p>
                <p>
                  <span className="font-semibold">Job Role:</span>{" "}
                  {selectedResume?.jobRole}
                </p>
                <p>
                  <span className="font-semibold">DOB:</span>{" "}
                  {selectedResume?.dob}
                </p>
                <p>
                  <span className="font-semibold">Contact:</span>{" "}
                  {selectedResume?.email}, {selectedResume?.phone}
                </p>
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  {selectedResume?.status}
                </p> */}
                <div className="bg-white shadow-md rounded-lg p-6 my-6">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                    Personal Information
                  </h3>
                  <div className="space-y-3">
                    <p className="bg-gray-50 p-3 rounded-md">
                      <span className="font-semibold text-indigo-600">
                        Experience:
                      </span>{" "}
                      <span className="text-gray-800">
                        {selectedResume?.experience} years
                      </span>
                    </p>
                    <p className="bg-gray-50 p-3 rounded-md">
                      <span className="font-semibold text-indigo-600">
                        Job Role:
                      </span>{" "}
                      <span className="text-gray-800">
                        {selectedResume?.jobRole}
                      </span>
                    </p>
                    <p className="bg-gray-50 p-3 rounded-md">
                      <span className="font-semibold text-indigo-600">
                        DOB:
                      </span>{" "}
                      <span className="text-gray-800">
                        {formatDate(selectedResume?.dob)}
                      </span>
                    </p>
                    <p className="bg-gray-50 p-3 rounded-md">
                      <span className="font-semibold text-indigo-600">
                        Email:
                      </span>{" "}
                      <span className="text-gray-800">
                        {selectedResume?.email}
                      </span>
                    </p>
                    <p className="bg-gray-50 p-3 rounded-md">
                      <span className="font-semibold text-indigo-600">
                        Mobile:
                      </span>{" "}
                      <span className="text-gray-800">
                        {selectedResume?.phone}
                      </span>
                    </p>
                    <p className="bg-gray-50 p-3 rounded-md">
                      <span className="font-semibold text-indigo-600">
                        Status:
                      </span>{" "}
                      <span className="text-gray-800">
                        {selectedResume?.status}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 my-6">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                    Education
                  </h3>
                  <ul className="space-y-4">
                    {selectedResume?.educations?.map((edu, index) => (
                      <li
                        key={index}
                        className="bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="font-semibold text-lg text-gray-800">
                          {edu?.degree}
                        </div>
                        <div className="text-indigo-500">{edu?.college}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          <span className="mr-3">{edu?.duration}</span>
                          <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                            {edu?.pointer}{" "}
                            {edu?.pointerType === "cgpa"
                              ? "CGPA?CGPA"
                              : "Percentage/CGPA"}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* old education */}
                {/* <div>
                  <h3 className="text-xl font-bold text-indigo-600 mt-6 mb-2">
                    Education
                  </h3>
                  <ul className="list-disc list-inside">
                    {selectedResume?.educations?.map((edu, index) => (
                      <li key={index}>
                        {edu?.degree} - {edu?.college}, {edu?.duration} ,
                        {edu?.pointer}
                      </li>
                    ))}
                  </ul>
                </div> */}

                <div className="bg-white shadow-md rounded-lg p-6 my-6">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                    Experience/Internships
                  </h3>
                  <div className="space-y-4">
                    {selectedResume?.experiences?.map((exp, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold text-indigo-700">
                            {exp.role}
                          </h4>
                          <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
                            {exp.duration}{" "}
                            {exp.duration === 1 ? "year" : "years"}
                          </span>
                        </div>
                        <p className="text-md font-medium text-gray-600 mb-2">
                          {exp.company}
                        </p>
                        <p className="text-gray-700">{exp.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 my-6">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                    Projects
                  </h3>
                  <div className="space-y-4">
                    {selectedResume.projects?.map((project, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <h4 className="text-lg font-semibold text-indigo-700 mb-2">
                          {project.name}
                        </h4>
                        <p className="text-gray-700">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* old Technical Skills */}
                {/* <div>
                  <h3 className="text-xl font-bold text-indigo-600 mt-6 mb-2">
                    Technical Skills
                  </h3>
                  <ul className="list-disc list-inside">
                    {selectedResume.skills?.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div> */}
                <div className="bg-white shadow-md rounded-lg p-6 my-6">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedResume.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-600 mt-6 mb-2">
                    Certifications
                  </h3>
                  <ul className="list-disc list-inside">
                    {selectedResume?.certifications?.map(
                      (certification, index) => (
                        <li key={index}>{certification}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-600 mt-6 mb-2">
                    View Resume
                  </h3>
                  <BlobProvider
                    document={<ResumeDocument resume={selectedResume} />}
                  >
                    {({ url }) => (
                      <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                        onClick={() => window.open(url, "_blank")}
                      >
                        View PDF
                      </button>
                    )}
                  </BlobProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewResumes;
