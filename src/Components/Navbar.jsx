import React from "react";
import DownloadButton from "./DownloadButton";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const navSection = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/projects"}>Projects</Link>
      </li>
      {/* <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Contacts</Link>
      </li>
      <li>
        <Link>Blogs</Link>
      </li> */}
    </>
  );

  return (
    <div className="navbar sticky top-0 border shadow-sm bg-gradient-to-r from-teal-300 to-green-300 z-20 ">
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
        <p className="text-2xl font-bold p-3">Ahmed Nashif</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-bold">{navSection}</ul>
      </div>
      <div className="navbar-end p-3">
        <div className="">
          <DownloadButton buttonName={"Download Resume"}></DownloadButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
