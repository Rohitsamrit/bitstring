import React from "react";

function Footer() {
  return (
    <div className="bg-blueGray-200 pt-8 pb-6">
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <footer className="relative container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4 mb-6 lg:mb-0">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Contact Us
            </h4>
            <p className="text-lg mt-0 mb-2 text-blueGray-600">
              Address: D-224, Palladium Exotica, Dhanori, Pune-411015.
              Maharashtra, INDIA
            </p>
            <p className="text-lg mt-0 mb-2 text-blueGray-600">
              Call us: 020-67024898
            </p>
          </div>
          <div className="w-full lg:w-6/12 px-4 flex justify-end items-start space-x-4">
            <a
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A31573267&keywords=bitstring%20it%20services%20pvt%20ltd&origin=RICH_QUERY_SUGGESTION&position=0&searchId=f52ba204-5c59-471d-b25b-c6d9e3507dc0&sid=Bxu&spellCorrectionEnabled=false"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightBlue-400"
            >
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a
              href="https://www.instagram.com/bitstringit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </a>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>{" "}
              <a
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
                href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A31573267&keywords=bitstring%20it%20services%20pvt%20ltd&origin=RICH_QUERY_SUGGESTION&position=0&searchId=f52ba204-5c59-471d-b25b-c6d9e3507dc0&sid=Bxu&spellCorrectionEnabled=false"
                rel="noopener noreferrer"
              >
                BitString IT Services Pvt. Ltd. |
              </a>
              <a className="text-blueGray-500 hover:text-blueGray-800" href="#">
                All Rights Reserved
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
