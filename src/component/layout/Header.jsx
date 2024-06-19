// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "./BitString IT Services.jpg"; // Ensure the path to your logo image is correct

// function Header() {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link to="/">
//             <img src={logo} alt="Logo" className="h-10 w-auto" />
//           </Link>
//           <span className="ml-3 text-white text-2xl font-bold">BitString</span>
//         </div>
//         {/* Navigation Links */}
//         <div className="flex space-x-4">
//           <Link to="/" className="text-gray-300 hover:text-white">
//             Home
//           </Link>
//           <Link to="/create-resume" className="text-gray-300 hover:text-white">
//             Create Resume
//           </Link>
//           <Link to="/view-resume" className="text-gray-300 hover:text-white">
//             View Resume
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./BLACK_LOGO_MARK.png"; // Ensure the correct path to your logo

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
          <span className="ml-3 text-white text-2xl font-bold">BitString</span>
        </div>
        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <div
          className={`lg:flex lg:space-x-4 ${
            isOpen ? "block" : "hidden"
          } mt-4 lg:mt-0`}
        >
          <Link
            to="/"
            className="block text-gray-300 hover:text-white lg:inline-block lg:mt-0"
          >
            Home
          </Link>
          <Link
            to="/create-resume"
            className="block text-gray-300 hover:text-white lg:inline-block lg:mt-0"
          >
            Create Resume
          </Link>
          <Link
            to="/view-resume"
            className="block text-gray-300 hover:text-white lg:inline-block lg:mt-0"
          >
            View Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
