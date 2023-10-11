import React from "react";
import DownloadButton from "../../Components/DownloadButton";
import "animate.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="text-center text-black h-5/6 p-6" data-aos="fade-up">
      <div className="rounded-lg bg-white p-6 mb-6 mt-24">
        <h1 className="text-4xl md:text-8xl font-bold uppercase m-3 animate__animated animate__slideInLeft">
          Hello
        </h1>
        <h3 className="text-2xl md:text-6xl font-bold m-3 animate__animated mb-6 animate__slideInRight">
        <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I am A Frontend Web developer")
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
