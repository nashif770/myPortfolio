import React from "react";
import DownloadButton from "../../Components/DownloadButton";
import "animate.css";

const Banner = () => {
  return (
    <div className="text-center h-5/6 mt-24 p-6" data-aos="fade-up">
      <div className="border rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-4xl md:text-8xl font-bold uppercase m-3 animate__animated animate__slideInLeft">
          Hello!
        </h1>
        <p className="text-3xl md:text-6xl font-bold uppercase m-3 animate__animated mb-6 animate__slideInRight">
          I am a web developer
        </p>
      </div>
        <DownloadButton buttonName={"Download My Resume"}></DownloadButton>
    </div>
  );
};

export default Banner;
