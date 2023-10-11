import React from "react";
import DownloadButton from "../../Components/DownloadButton";
import "animate.css";
import Typewriter from "typewriter-effect";
import profileImage from "../../../public/Nashifimage.png";

const Banner = () => {
  return (
    <div
      className="text-black p-6 overflow-hidden flex justify-center items-center h-screen flex-col md:flex-row text-center md:text-left"
      data-aos="fade-up"
    >
      <div className="w-full rounded-lg bg-white p-6 md:w-1/2">
        <h1 className=" md:text-4xl lg:text-6xl xl:text-8xl uppercase m-3 animate__animated animate__slideInLeft text-5xl py-2 text-teal-600 font-medium ">
          Ahmed Nashif
        </h1>
        <div className="divider"></div>
        <h3 className="text-lg md:text-2xl lg:text-2xl xl:text-6xl font-bold m-3 animate__animated animate__slideInRight mb-12 text-gray-600">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Junior Web Developer")
                .callFunction(() => {
                  console.log("String typed out!");
                  typewriter.stop;
                })
                .start();
            }}
          />
        </h3>
        <p className="m-3 text-medium py-5 leading-8 text-gray-800 md:text-xl mx-w-lg mx-auto">I am Junior web developer based on Dhaka, Bangladesh. I am very exited to work with you.</p>
        <DownloadButton buttonName={"Download My Resume"}></DownloadButton>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative m-auto bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 mt-6 md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] overflow-hidden">
          <img src={profileImage} className="m-auto h-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
