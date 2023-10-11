import React from "react";
import "animate.css";
import { FaBeer, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Header from "../../Components/Header";
import "animate.css";
import profileImage from "../../../public/Nashifimage.png";

const AboutMe = () => {
  return (
    <div className="h-4/6 text-black" data-aos="fade-up">
      <Header heading="About Me"></Header>
      <div className="flex flex-col md:flex-row align-middle">
        <div className="flex flex-col m-3 md:w-1/2">
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Ahmed Nashif
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Frontend Web Developers
            </h3>
            <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl mx-w-lg mx-auto">
              A web developer providing services for web development needs.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 cursor-pointer">
              <a href="https://web.facebook.com/nashif910" target="blank">
                <FaFacebook className="btn btn-circle mx-12"></FaFacebook>
              </a>
              <a href="https://twitter.com/AN361770" target="blank">
                <FaTwitter className="btn btn-circle mx-12"></FaTwitter>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-nashif-9840941a0/"
                target="blank"
              >
                <FaLinkedin className="btn btn-circle mx-12"></FaLinkedin>
              </a>
            </div>
          </div>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-6 overflow-hidden md:h-96 md:w-96">
          <img src={profileImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
