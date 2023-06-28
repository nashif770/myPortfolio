import React from "react";
import DownloadButton from "./DownloadButton";

const Navbar = () => {
  const navSection = 
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>My Projects</a>
      </li>
      <li>
        <a>Contact Me</a>
      </li>
    </>
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navSection}
          </ul>
        </div>
        <p className="text-2xl font-bold">Ahmed Nashif</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navSection}</ul>
      </div>
      <div className="navbar-end">
      <DownloadButton buttonName={"Download Resume"}></DownloadButton>
      </div>
    </div>
  );
};

export default Navbar;
