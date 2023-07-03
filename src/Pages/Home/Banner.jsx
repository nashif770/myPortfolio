import React from "react";
import DownloadButton from "../../Components/DownloadButton";
import "animate.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="text-center h-5/6 mt-24 p-6" data-aos="fade-up">
      <div></div>
      <div className="border rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-4xl md:text-8xl font-bold uppercase m-3 animate__animated animate__slideInLeft">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello! ")
                .callFunction(() => {
                  console.log("String typed out!");
                  typewriter.stop
                })
                .start();
            }}
          />
        </h1>
        <h3 className="text-3xl md:text-6xl font-bold uppercase m-3 animate__animated mb-6 animate__slideInRight">
        <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("i am a web developer ")
                .callFunction(() => {
                  console.log("String typed out!");
                  typewriter.stop
                })
                .start();
            }}
          />
        </h3>
      </div>
      <DownloadButton buttonName={"Download My Resume"}></DownloadButton>
    </div>
  );
};

export default Banner;
