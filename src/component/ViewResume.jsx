import React, { useState, useEffect } from "react";
import { BlobProvider } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";

const resumesData = [
  {
    id: 1,
    name: "John Doe",
    experience: 5,
    jobRole: "Software Engineer",
    dob: "1990-01-01",
    contact: { email: "john.doe@example.com", phone: "123-456-7890" },
    education: [
      {
        degree: "B.Sc in Computer Science",
        institution: "ABC University",
        duration: "2010-2014",
      },
    ],
    workExperience: [
      {
        title: "Software Engineer",
        company: "Company A",
        duration: "2015-Present",
        description: "Developed X, Y, Z features.",
      },
    ],
    projects: [{ name: "Project X", description: "Description of project X." }],
    skills: ["JavaScript", "React", "Node.js"],
    certifications: ["Certified Java Developer"],
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    experience: 3,
    jobRole: "Data Scientist",
    dob: "1992-05-12",
    contact: { email: "jane.smith@example.com", phone: "987-654-3210" },
    education: [
      {
        degree: "M.Sc in Data Science",
        institution: "XYZ University",
        duration: "2015-2017",
      },
    ],
    workExperience: [
      {
        title: "Data Scientist",
        company: "Company B",
        duration: "2017-Present",
        description: "Analyzed datasets and built predictive models.",
      },
    ],
    projects: [{ name: "Project Y", description: "Description of project Y." }],
    skills: ["Python", "R", "Machine Learning"],
    certifications: ["Certified Data Scientist"],
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    experience: 4,
    jobRole: "UX Designer",
    dob: "1988-11-25",
    contact: { email: "alice.johnson@example.com", phone: "456-789-1234" },
    education: [
      {
        degree: "B.A. in Graphic Design",
        institution: "Creative Arts School",
        duration: "2008-2012",
      },
    ],
    workExperience: [
      {
        title: "UX Designer",
        company: "Design Co.",
        duration: "2014-Present",
        description: "Created user-friendly interfaces and designs.",
      },
    ],
    projects: [{ name: "Project Z", description: "Description of project Z." }],
    skills: ["Sketch", "Figma", "Adobe XD"],
    certifications: ["Certified UX Designer"],
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 4,
    name: "Bob Brown",
    experience: 8,
    jobRole: "DevOps Engineer",
    dob: "1985-03-15",
    contact: { email: "bob.brown@example.com", phone: "234-567-8910" },
    education: [
      {
        degree: "M.Sc in Information Technology",
        institution: "Tech Institute",
        duration: "2006-2008",
      },
    ],
    workExperience: [
      {
        title: "DevOps Engineer",
        company: "Tech Solutions",
        duration: "2010-Present",
        description: "Managed infrastructure and automated deployments.",
      },
    ],
    projects: [{ name: "Project A", description: "Description of project A." }],
    skills: ["AWS", "Docker", "Kubernetes"],
    certifications: ["Certified DevOps Professional"],
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 5,
    name: "Charlie Davis",
    experience: 2,
    jobRole: "Marketing Specialist",
    dob: "1993-07-20",
    contact: { email: "charlie.davis@example.com", phone: "678-123-4567" },
    education: [
      {
        degree: "B.B.A. in Marketing",
        institution: "Business School",
        duration: "2011-2015",
      },
    ],
    workExperience: [
      {
        title: "Marketing Specialist",
        company: "Advertise Inc.",
        duration: "2016-Present",
        description: "Developed marketing strategies and campaigns.",
      },
    ],
    projects: [{ name: "Project B", description: "Description of project B." }],
    skills: ["SEO", "Google Analytics", "Content Marketing"],
    certifications: ["Certified Marketing Specialist"],
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 6,
    name: "Daniel Edwards",
    experience: 6,
    jobRole: "Product Manager",
    dob: "1982-02-10",
    contact: { email: "daniel.edwards@example.com", phone: "789-012-3456" },
    education: [
      {
        degree: "M.B.A.",
        institution: "Management University",
        duration: "2003-2005",
      },
    ],
    workExperience: [
      {
        title: "Product Manager",
        company: "Innovate Ltd.",
        duration: "2015-Present",
        description: "Led product development and market research.",
      },
    ],
    projects: [{ name: "Project C", description: "Description of project C." }],
    skills: ["Agile", "Scrum", "Project Management"],
    certifications: ["Certified Product Manager"],
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 7,
    name: "Eve Fisher",
    experience: 4,
    jobRole: "Frontend Developer",
    dob: "1995-08-30",
    contact: { email: "eve.fisher@example.com", phone: "890-123-4567" },
    education: [
      {
        degree: "B.Sc in Computer Engineering",
        institution: "Tech University",
        duration: "2013-2017",
      },
    ],
    workExperience: [
      {
        title: "Frontend Developer",
        company: "WebWorks",
        duration: "2018-Present",
        description: "Developed responsive web applications.",
      },
    ],
    projects: [{ name: "Project D", description: "Description of project D." }],
    skills: ["HTML", "CSS", "React"],
    certifications: ["Certified Frontend Developer"],
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 8,
    name: "Frank Green",
    experience: 10,
    jobRole: "Network Engineer",
    dob: "1978-12-05",
    contact: { email: "frank.green@example.com", phone: "123-678-9012" },
    education: [
      {
        degree: "B.Sc in Network Engineering",
        institution: "Networking Academy",
        duration: "1996-2000",
      },
    ],
    workExperience: [
      {
        title: "Network Engineer",
        company: "SecureNet",
        duration: "2002-Present",
        description: "Managed network infrastructure and security.",
      },
    ],
    projects: [{ name: "Project E", description: "Description of project E." }],
    skills: ["Cisco", "Firewall", "Network Security"],
    certifications: ["Certified Network Engineer"],
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 9,
    name: "Grace Hall",
    experience: 7,
    jobRole: "Data Analyst",
    dob: "1987-09-22",
    contact: { email: "grace.hall@example.com", phone: "234-567-8901" },
    education: [
      {
        degree: "B.Sc in Statistics",
        institution: "Analytics College",
        duration: "2005-2009",
      },
    ],
    workExperience: [
      {
        title: "Data Analyst",
        company: "DataInsights",
        duration: "2010-Present",
        description: "Analyzed data trends and prepared reports.",
      },
    ],
    projects: [{ name: "Project F", description: "Description of project F." }],
    skills: ["Excel", "SQL", "Tableau"],
    certifications: ["Certified Data Analyst"],
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 10,
    name: "Henry Irvine",
    experience: 5,
    jobRole: "QA Engineer",
    dob: "1991-06-14",
    contact: { email: "henry.irvine@example.com", phone: "345-678-9012" },
    education: [
      {
        degree: "B.Sc in Software Engineering",
        institution: "IT Institute",
        duration: "2009-2013",
      },
    ],
    workExperience: [
      {
        title: "QA Engineer",
        company: "QualitySoft",
        duration: "2014-Present",
        description: "Tested software for bugs and performance.",
      },
    ],
    projects: [{ name: "Project G", description: "Description of project G." }],
    skills: ["Selenium", "JUnit", "LoadRunner"],
    certifications: ["Certified QA Engineer"],
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 11,
    name: "Ivy Johnson",
    experience: 3,
    jobRole: "Cybersecurity Analyst",
    dob: "1994-03-08",
    contact: { email: "ivy.johnson@example.com", phone: "456-789-0123" },
    education: [
      {
        degree: "B.Sc in Cybersecurity",
        institution: "Cyber University",
        duration: "2012-2016",
      },
    ],
    workExperience: [
      {
        title: "Cybersecurity Analyst",
        company: "SafeGuard",
        duration: "2017-Present",
        description: "Protected systems against cyber threats.",
      },
    ],
    projects: [{ name: "Project H", description: "Description of project H." }],
    skills: ["Penetration Testing", "SIEM", "Cryptography"],
    certifications: ["Certified Cybersecurity Professional"],
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 12,
    name: "Jack King",
    experience: 2,
    jobRole: "Blockchain Developer",
    dob: "1996-04-02",
    contact: { email: "jack.king@example.com", phone: "567-890-1234" },
    education: [
      {
        degree: "B.Sc in Computer Science",
        institution: "Tech University",
        duration: "2014-2018",
      },
    ],
    workExperience: [
      {
        title: "Blockchain Developer",
        company: "BlockChainX",
        duration: "2019-Present",
        description: "Developed blockchain applications.",
      },
    ],
    projects: [{ name: "Project I", description: "Description of project I." }],
    skills: ["Solidity", "Ethereum", "Smart Contracts"],
    certifications: ["Certified Blockchain Developer"],
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 13,
    name: "Kelly Lewis",
    experience: 4,
    jobRole: "Machine Learning Engineer",
    dob: "1992-11-16",
    contact: { email: "kelly.lewis@example.com", phone: "678-901-2345" },
    education: [
      {
        degree: "M.Sc in Artificial Intelligence",
        institution: "AI University",
        duration: "2013-2015",
      },
    ],
    workExperience: [
      {
        title: "Machine Learning Engineer",
        company: "ML Solutions",
        duration: "2016-Present",
        description: "Developed machine learning models.",
      },
    ],
    projects: [{ name: "Project J", description: "Description of project J." }],
    skills: ["TensorFlow", "Python", "Keras"],
    certifications: ["Certified Machine Learning Engineer"],
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 14,
    name: "Liam Mitchell",
    experience: 7,
    jobRole: "Cloud Architect",
    dob: "1989-02-18",
    contact: { email: "liam.mitchell@example.com", phone: "789-012-3456" },
    education: [
      {
        degree: "B.Sc in Cloud Computing",
        institution: "Cloud Academy",
        duration: "2007-2011",
      },
    ],
    workExperience: [
      {
        title: "Cloud Architect",
        company: "CloudWorks",
        duration: "2012-Present",
        description: "Designed and implemented cloud solutions.",
      },
    ],
    projects: [{ name: "Project K", description: "Description of project K." }],
    skills: ["AWS", "Azure", "GCP"],
    certifications: ["Certified Cloud Architect"],
    profilePic: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 15,
    name: "Mia Nelson",
    experience: 5,
    jobRole: "AI Researcher",
    dob: "1986-07-11",
    contact: { email: "mia.nelson@example.com", phone: "890-123-4567" },
    education: [
      {
        degree: "Ph.D. in Artificial Intelligence",
        institution: "Research Institute",
        duration: "2005-2010",
      },
    ],
    workExperience: [
      {
        title: "AI Researcher",
        company: "AI Labs",
        duration: "2011-Present",
        description: "Conducted research on AI algorithms.",
      },
    ],
    projects: [{ name: "Project L", description: "Description of project L." }],
    skills: ["Python", "Deep Learning", "NLP"],
    certifications: ["Certified AI Researcher"],
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 16,
    name: "Nina Olson",
    experience: 9,
    jobRole: "Backend Developer",
    dob: "1983-03-04",
    contact: { email: "nina.olson@example.com", phone: "123-456-7890" },
    education: [
      {
        degree: "B.Sc in Software Engineering",
        institution: "Engineering College",
        duration: "2001-2005",
      },
    ],
    workExperience: [
      {
        title: "Backend Developer",
        company: "TechGiant",
        duration: "2006-Present",
        description: "Built and maintained server-side applications.",
      },
    ],
    projects: [{ name: "Project M", description: "Description of project M." }],
    skills: ["Java", "Spring", "Hibernate"],
    certifications: ["Certified Backend Developer"],
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 17,
    name: "Oscar Perry",
    experience: 6,
    jobRole: "Full Stack Developer",
    dob: "1987-08-19",
    contact: { email: "oscar.perry@example.com", phone: "234-567-8901" },
    education: [
      {
        degree: "B.Sc in Computer Science",
        institution: "Tech University",
        duration: "2005-2009",
      },
    ],
    workExperience: [
      {
        title: "Full Stack Developer",
        company: "WebCorp",
        duration: "2010-Present",
        description: "Worked on both frontend and backend development.",
      },
    ],
    projects: [{ name: "Project N", description: "Description of project N." }],
    skills: ["JavaScript", "Node.js", "React"],
    certifications: ["Certified Full Stack Developer"],
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 18,
    name: "Paula Quinn",
    experience: 2,
    jobRole: "Technical Writer",
    dob: "1995-05-29",
    contact: { email: "paula.quinn@example.com", phone: "345-678-9012" },
    education: [
      {
        degree: "B.A. in English",
        institution: "Humanities College",
        duration: "2013-2017",
      },
    ],
    workExperience: [
      {
        title: "Technical Writer",
        company: "DocuTech",
        duration: "2018-Present",
        description: "Created and edited technical documentation.",
      },
    ],
    projects: [{ name: "Project O", description: "Description of project O." }],
    skills: ["Technical Writing", "Editing", "Documentation"],
    certifications: ["Certified Technical Writer"],
    profilePic: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: 19,
    name: "Quincy Roberts",
    experience: 8,
    jobRole: "Systems Analyst",
    dob: "1985-10-13",
    contact: { email: "quincy.roberts@example.com", phone: "456-789-0123" },
    education: [
      {
        degree: "B.Sc in Information Systems",
        institution: "Systems University",
        duration: "2003-2007",
      },
    ],
    workExperience: [
      {
        title: "Systems Analyst",
        company: "SysTech",
        duration: "2008-Present",
        description: "Analyzed and optimized system operations.",
      },
    ],
    projects: [{ name: "Project P", description: "Description of project P." }],
    skills: ["System Analysis", "SQL", "Business Analysis"],
    certifications: ["Certified Systems Analyst"],
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 20,
    name: "Rachel Stevens",
    experience: 3,
    jobRole: "Content Manager",
    dob: "1992-02-22",
    contact: { email: "rachel.stevens@example.com", phone: "567-890-1234" },

    education: [
      {
        degree: "M.A. in Communications",
        institution: "Communications University",
        duration: "2010-2012",
      },
    ],
    workExperience: [
      {
        title: "Content Manager",
        company: "MediaCorp",
        duration: "2013-Present",
        description: "Managed content creation and distribution.",
      },
    ],
    projects: [{ name: "Project Q", description: "Description of project Q." }],
    skills: ["Content Management", "SEO", "Social Media"],
    certifications: ["Certified Content Manager"],
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

// const resumesData = [
//   {
//     id: 1,
//     name: "John Doe",
//     experience: 5,
//     jobRole: "Software Engineer",
//     dob: "1990-01-01",
//     contact: { email: "john.doe@example.com", phone: "123-456-7890" },
//     education: [
//       {
//         degree: "B.Sc in Computer Science",
//         institution: "ABC University",
//         duration: "2010-2014",
//       },
//     ],
//     workExperience: [
//       {
//         title: "Software Engineer",
//         company: "Company A",
//         duration: "2015-Present",
//         description: "Developed X, Y, Z features.",
//       },
//     ],
//     projects: [{ name: "Project X", description: "Description of project X." }],
//     skills: ["JavaScript", "React", "Node.js"],
//     certifications: ["Certified Java Developer"],
//     profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
// ];

function ViewResumes() {
  const [resumes, setResumes] = useState([]);
  const [selectedResume, setSelectedResume] = useState(null);
  const [experienceFilter, setExperienceFilter] = useState("");
  const [jobRoleFilter, setJobRoleFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [contextMenu, setContextMenu] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const handleStatusFilterChange = (status) => {
    setStatusFilter(status);
  };

  useEffect(() => {
    setResumes(
      resumesData.map((resume) => ({ ...resume, status: "Undecided" }))
    );
  }, []);

  const filterAndSortResumes = () => {
    let filteredResumes = [...resumesData];

    // Filter by experience
    if (experienceFilter) {
      const [min, max] = experienceFilter.split("-").map(Number);
      filteredResumes = filteredResumes.filter(
        (resume) =>
          resume.experience >= min && resume.experience <= (max || Infinity)
      );
    }

    // Filter by job role
    if (jobRoleFilter) {
      filteredResumes = filteredResumes.filter(
        (resume) => resume.jobRole === jobRoleFilter
      );
    }
    // Filter by status
    if (statusFilter !== "All") {
      filteredResumes = filteredResumes.filter(
        (resume) => resume.status === statusFilter
      );
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

  const handleContextMenuAction = (action) => {
    if (contextMenu) {
      const updatedResumes = resumes
        .map((resume) => {
          if (resume.id === contextMenu.resumeId) {
            if (action === "Reject") {
              return null; // This will remove the resume from the array
            }
            return { ...resume, status: action };
          }
          return resume;
        })
        .filter(Boolean); // This removes any null entries (rejected resumes)

      setResumes(updatedResumes);
      setContextMenu(null);
    }
  };

  // Get unique job roles for the dropdown
  const uniqueJobRoles = [
    ...new Set(resumesData.map((resume) => resume.jobRole)),
  ];

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
            key={resume.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300 relative"
            onClick={() => setSelectedResume(resume)}
            onContextMenu={(e) => handleContextMenu(e, resume.id)}
          >
            <div className="p-6">
              <img
                src={resume.profilePic}
                alt={`${resume.name}'s profile`}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500"
              />
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                {resume.name}
              </h2>
              <p className="text-center text-indigo-600 font-semibold">
                {resume.jobRole}
              </p>
              <p className="text-center text-gray-600">
                Experience: {resume.experience} years
              </p>
              {resume.status !== "Undecided" && (
                <p
                  className={`text-center font-bold mt-2 ${
                    resume.status === "Accept"
                      ? "text-green-600"
                      : resume.status === "Pending"
                      ? "text-yellow-600"
                      : ""
                  }`}
                >
                  {resume.status}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Context Menu */}
      {contextMenu && (
        <div
          className="fixed bg-white shadow-md rounded-md py-2 z-50"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleContextMenuAction("Accept")}
          >
            Accept
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleContextMenuAction("Reject")}
          >
            Reject
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleContextMenuAction("Pending")}
          >
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
                  {selectedResume.name}
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
                <p>
                  <span className="font-semibold">Experience:</span>{" "}
                  {selectedResume.experience} years
                </p>
                <p>
                  <span className="font-semibold">Job Role:</span>{" "}
                  {selectedResume.jobRole}
                </p>
                <p>
                  <span className="font-semibold">DOB:</span>{" "}
                  {selectedResume.dob}
                </p>
                <p>
                  <span className="font-semibold">Contact:</span>{" "}
                  {selectedResume.contact.email}, {selectedResume.contact.phone}
                </p>
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  {selectedResume.status}
                </p>

                <div>
                  <h3 className="text-xl font-bold text-indigo-600 mt-6 mb-2">
                    Education
                  </h3>
                  <ul className="list-disc list-inside">
                    {selectedResume.education.map((edu, index) => (
                      <li key={index}>
                        {edu.degree} - {edu.institution}, {edu.duration}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-indigo-600 mt-6 mb-2">
                    Experience/Internships
                  </h3>
                  <ul className="list-disc list-inside">
                    {selectedResume.workExperience.map((exp, index) => (
                      <li key={index}>
                        {exp.title} at {exp.company} ({exp.duration}) -{" "}
                        {exp.description}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-indigo-600 mt-6 mb-2">
                    Projects
                  </h3>
                  <ul className="list-disc list-inside">
                    {selectedResume.projects.map((project, index) => (
                      <li key={index}>
                        {project.name} - {project.description}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-indigo-600 mt-6 mb-2">
                    Technical Skills
                  </h3>
                  <ul className="list-disc list-inside">
                    {selectedResume.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-indigo-600 mt-6 mb-2">
                    Certifications
                  </h3>
                  <ul className="list-disc list-inside">
                    {selectedResume.certifications.map(
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
