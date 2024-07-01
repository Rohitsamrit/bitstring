import React, { useState, useRef } from "react";

const CreateResume = () => {
  const [resume, setResume] = useState(null);
  const [resumeBase64, setResumeBase64] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    jobRole: "",
  });

  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [educations, setEducations] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [languages, setLanguages] = useState([]);

  const skillRef = useRef(null);

  const expRefRole = useRef(null);
  const expRefCompany = useRef(null);
  const expRefDuration = useRef(null);
  const expRefDetail = useRef(null);

  const projectRefName = useRef(null);
  const projectRefDescription = useRef(null);
  const projectRefLink = useRef(null);

  const educationRefCollege = useRef(null);
  const educationRefDegree = useRef(null);
  const educationRefDuration = useRef(null);
  const educationRefPointer = useRef(null);

  const achievementRef = useRef(null);
  const languageRef = useRef(null);
  const [inputType, setInputType] = useState("pointer");
  // const educationRefPointer = useRef(null);
  const educationRefPercentage = useRef(null);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const jobRoles = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX Designer",
    "DevOps Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "QA Engineer",
    "Project Manager",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5501/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        skills,
        experiences,
        projects,
        educations,
        achievements,
        languages,
      }),
    });
    const resJson = await res.json();
    if (resJson.ok) {
      console.log(resJson.data);
      alert("Data Saved Successfully!!");
    } else {
      alert(resJson.data);
    }
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
        <div className="w-1/2 p-4 flex flex-col align-middle">
          <h1 className="text-3xl font-bold mb-6">Create Resume</h1>
          <form onSubmit={handleSubmit} className="align-middle justify-center">
            {/* Personal Information Fields */}
            <div className="col-span-1">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                name="email"
                placeholder="Email"
                id="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                type="text"
                name="phone"
                placeholder="phone"
                id="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                name="address"
                id="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleFormChange}
                className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                name="dob"
                id="dob"
                placeholder="DOB"
                value={formData.dob}
                onChange={handleFormChange}
                className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label
                htmlFor="jobRole"
                className="block text-gray-700 font-semibold mb-2"
              >
                Job Role
              </label>
              <select
                name="jobRole"
                id="jobRole"
                value={formData.jobRole}
                onChange={handleFormChange}
                className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select a Job Role</option>
                {jobRoles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            {/* Skills Section */}
            {/* Skills Section */}
            <div className="col-span-1">
              <label
                htmlFor="skill"
                className="block text-gray-700 font-semibold mb-2"
              >
                Skill
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  name="skill"
                  placeholder="Enter Skill"
                  id="skill"
                  className="flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ref={skillRef}
                />
                <button
                  type="button"
                  className="ml-2 font-bold rounded-md border border-gray-700 p-2 hover:bg-gray-800 hover:text-white"
                  onClick={() => {
                    setSkills([...skills, skillRef.current.value]);
                    skillRef.current.value = "";
                  }}
                >
                  Add Skill
                </button>
              </div>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="cursor-pointer font-bold border border-black flex justify-between w-full mt-2 p-2 rounded-md"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    className="ml-2 font-bold rounded-md border p-1 bg-red-600 text-white"
                    onClick={() =>
                      setSkills(skills.filter((ski) => ski !== skill))
                    }
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Experience Section */}
            <div className="col-span-1">
              <label
                htmlFor="experience"
                className="block text-gray-700 font-semibold mb-2"
              >
                Experience
              </label>
              <div className="flex items-center">
                <div className="flex items-center flex-col m-1">
                  <input
                    type="text"
                    name="experienceRole"
                    placeholder="Enter Role"
                    id="experienceRole"
                    className="m-1 flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={expRefRole}
                  />
                  <input
                    type="text"
                    name="experienceCompany"
                    placeholder="Enter Company"
                    id="experienceCompany"
                    className="m-1 flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={expRefCompany}
                  />
                </div>
                <div className="flex items-center flex-col m-1">
                  <input
                    type="text"
                    name="experienceDuration"
                    placeholder="Enter Duration(in years)"
                    id="experienceDuration"
                    className="m-1 flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={expRefDuration}
                  />
                  <input
                    type="text"
                    name="experienceDetail"
                    placeholder="Enter Detail"
                    id="experienceDetail"
                    className="m-1 flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={expRefDetail}
                  />
                </div>
                <button
                  type="button"
                  className="ml-2 font-bold rounded-md border border-gray-700 p-2 hover:bg-gray-800 hover:text-white"
                  onClick={() => {
                    setExperiences([
                      ...experiences,
                      {
                        role: expRefRole.current.value,
                        company: expRefCompany.current.value,
                        duration: expRefDuration.current.value,
                        details: expRefDetail.current.value,
                      },
                    ]);
                    expRefRole.current.value = "";
                    expRefCompany.current.value = "";
                    expRefDuration.current.value = "";
                    expRefDetail.current.value = "";
                  }}
                >
                  Add Exp
                </button>
              </div>
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="cursor-pointer font-bold border border-black flex justify-between w-full mt-2 p-2 rounded-md"
                >
                  <span>{`${experience.role} in ${experience.company}`}</span>
                  <button
                    type="button"
                    className="ml-2 font-bold rounded-md border p-1 bg-red-600 text-white"
                    onClick={() =>
                      setExperiences(
                        experiences.filter((ski) => ski !== experience)
                      )
                    }
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            {/* Project Section */}
            <div className="col-span-1">
              <label
                htmlFor="project"
                className="block text-gray-700 font-semibold mb-2"
              >
                Project
              </label>
              <div className="flex items-center">
                <div className="m-1 flex items-center flex-col">
                  <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    placeholder="Name"
                    className="m-1 flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={projectRefName}
                  />
                  <input
                    type="text"
                    name="projectDescription"
                    id="projectDescription"
                    placeholder="Description"
                    className="m-1 flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={projectRefDescription}
                  />
                </div>
                <div className="flex items-center flex-col">
                  <input
                    type="text"
                    name="projectLink"
                    placeholder="Link"
                    id="projectLink"
                    className="m-1 flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={projectRefLink}
                  />
                </div>
                <button
                  type="button"
                  className="ml-2 font-bold rounded-md border border-gray-700 p-2 hover:bg-gray-800 hover:text-white"
                  onClick={() => {
                    setProjects([
                      ...projects,
                      {
                        name: projectRefName.current.value,
                        description: projectRefDescription.current.value,
                        link: projectRefLink.current.value,
                      },
                    ]);
                    projectRefName.current.value = "";
                    projectRefDescription.current.value = "";
                    projectRefLink.current.value = "";
                  }}
                >
                  Add Project
                </button>
              </div>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="cursor-pointer font-bold border border-black flex justify-between w-full mt-2 p-2 rounded-md"
                >
                  <span>{project.name}</span>
                  <button
                    type="button"
                    className="ml-2 font-bold rounded-md border p-1 bg-red-600 text-white"
                    onClick={() =>
                      setProjects(projects.filter((ski) => ski !== project))
                    }
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            {/* Education Section */}
            <div className="col-span-1">
              <label
                htmlFor="education"
                className="block text-gray-700 font-semibold mb-2"
              >
                Education
              </label>
              <div className="flex items-center">
                <div className="flex flex-col m-1">
                  <input
                    type="text"
                    name="educationCollege"
                    id="educationCollege"
                    placeholder="College"
                    className="m-1 flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={educationRefCollege}
                  />
                  <input
                    type="text"
                    name="educationDegree"
                    placeholder="Degree"
                    id="educationDegree"
                    className="m-1 flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={educationRefDegree}
                  />
                </div>
                <div className="flex flex-col m-1">
                  <input
                    type="text"
                    name="educationDuration"
                    placeholder="Duration(in years)"
                    id="educationDuration"
                    className="m-1 flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={educationRefDuration}
                  />
                  <input
                    type="number"
                    name="educationPointer"
                    placeholder="Pointer (in CGPA)"
                    id="educationPointer"
                    className="m-1 flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={educationRefPointer}
                  />
                </div>
                <button
                  type="button"
                  className="ml-2 font-bold rounded-md border border-gray-700 p-2 hover:bg-gray-800 hover:text-white"
                  onClick={() => {
                    setEducations([
                      ...educations,
                      {
                        college: educationRefCollege.current.value,
                        degree: educationRefDegree.current.value,
                        duration: educationRefDuration.current.value,
                        pointer: educationRefPointer.current.value,
                      },
                    ]);
                    educationRefCollege.current.value = "";
                    educationRefDegree.current.value = "";
                    educationRefDuration.current.value = "";
                    educationRefPointer.current.value = "";
                  }}
                >
                  Add Education
                </button>
              </div>
              {educations.map((education, index) => (
                <div
                  key={index}
                  className="cursor-pointer font-bold border border-black flex justify-between w-full mt-2 p-2 rounded-md"
                >
                  <span>{`${education.degree} in ${education.college}`}</span>
                  <button
                    type="button"
                    className="ml-2 font-bold rounded-md border p-1 bg-red-600 text-white"
                    onClick={() =>
                      setEducations(
                        educations.filter((ski) => ski !== education)
                      )
                    }
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Achievements Section */}
            <div className="col-span-1">
              <label
                htmlFor="achievement"
                className="block text-gray-700 font-semibold mb-2"
              >
                Achievement
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  name="achievement"
                  id="achievement"
                  placeholder="Achievement"
                  className="flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ref={achievementRef}
                />
                <button
                  type="button"
                  className="ml-2 font-bold rounded-md border border-gray-700 p-2 hover:bg-gray-800 hover:text-white"
                  onClick={() => {
                    setAchievements([
                      ...achievements,
                      achievementRef.current.value,
                    ]);
                    achievementRef.current.value = "";
                  }}
                >
                  Add Achievement
                </button>
              </div>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="cursor-pointer font-bold border border-black flex justify-between w-full mt-2 p-2 rounded-md"
                >
                  <span>{achievement}</span>
                  <button
                    type="button"
                    className="ml-2 font-bold rounded-md border p-1 bg-red-600 text-white"
                    onClick={() =>
                      setAchievements(
                        achievements.filter((ski) => ski !== achievement)
                      )
                    }
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Languages Section */}
            <div className="col-span-1">
              <label
                htmlFor="language"
                className="block text-gray-700 font-semibold mb-2"
              >
                Language
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  name="language"
                  id="language"
                  placeholder="Language"
                  className="flex-1 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ref={languageRef}
                />
                <button
                  type="button"
                  className="ml-2 font-bold rounded-md border border-gray-700 p-2 hover:bg-gray-800 hover:text-white"
                  onClick={() => {
                    setLanguages([...languages, languageRef.current.value]);
                    languageRef.current.value = "";
                  }}
                >
                  Add Language
                </button>
              </div>
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="cursor-pointer font-bold border border-black flex justify-between w-full mt-2 p-2 rounded-md"
                >
                  <span>{language}</span>
                  <button
                    type="button"
                    className="ml-2 font-bold rounded-md border p-1 bg-red-600 text-white"
                    onClick={() =>
                      setLanguages(languages.filter((ski) => ski !== language))
                    }
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateResume;
