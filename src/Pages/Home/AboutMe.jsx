import React from "react";
import "animate.css";
import { FaBeer, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Header from "../../Components/Header";
import "animate.css";
import profileImage from "../../../public/Nashifimage.png";
import DownloadButton from "../../Components/DownloadButton";

const AboutMe = () => {
  return (
    <div className="h-screen text-black ">
      <Header heading="About Me"></Header>
      <div className="flex justify-center items-center h-screen flex-col md:flex-row-reverse" data-aos="fade-up">
        <div className="w-full rounded-lg p-6 md:w-1/2 text-center md:text-left m-3">
          <h3 className="text-2xl py-2 md:text-3xl">My Introduction</h3>
          <p className="text-start text-medium my-5 leading-8 text-gray-800 md:text-xl mx-w-lg mx-auto md:me-36">
            A Frontend web developer. I create webpages using html, css, js and react. I am ready to work with you.
          </p>
          <DownloadButton buttonName={"Download My Resume"}></DownloadButton>
          <div className="text-5xl gap-6 mt-6 py-3 text-gray-600 cursor-pointer">
            <a href="https://web.facebook.com/nashif910" target="blank">
              <FaFacebook className="btn btn-circle me-10"></FaFacebook>
            </a>
            <a href="https://twitter.com/AN361770" target="blank">
              <FaTwitter className="btn btn-circle me-10"></FaTwitter>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-nashif-9840941a0/"
              target="blank"
            >
              <FaLinkedin className="btn btn-circle me-10"></FaLinkedin>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 m-3">
          <div className="relative m-auto bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 mt-6 md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] overflow-hidden">
            <img src={profileImage} className="m-auto h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
