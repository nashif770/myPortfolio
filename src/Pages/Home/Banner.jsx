import React from "react";
import DownloadButton from "../../Components/DownloadButton";
import 'animate.css';

const Banner = () => {
  return (
    <div className="text-center p-6">
      <div className="my-36 border rounded-lg shadow-lg p-6">
          <h1 className="text-8xl font-bold uppercase m-3 animate__animated animate__slideInLeft">Hello!</h1>
          <p className="text-6xl font-bold uppercase m-3 animate__animated mb-6 animate__slideInRight">I am web developer</p>
      </div>
        <DownloadButton buttonName={"Download My Resume"}></DownloadButton>
    </div>
  );
};

export default Banner;
