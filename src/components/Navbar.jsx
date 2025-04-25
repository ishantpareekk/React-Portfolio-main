import React from 'react';
import logo from "../assets/icon.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/Abhishek-yadav-12" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-yadav-abhi/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        {/* <FaInstagram />
        <FaSquareXTwitter /> */}
      </div>
    </nav>
  );
};

export default Navbar;
