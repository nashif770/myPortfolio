import React from "react";
import bootstrap from "../../assets/icons/Skills/bootstrap.png";
import css from "../../assets/icons/Skills/CSS.png";
import html from "../../assets/icons/Skills/html.png";
import javaScript from "../../assets/icons/Skills/java-script.png";
import nodeJs from "../../assets/icons/Skills/node-js.png";
import react from "../../assets/icons/Skills/react.png";
import tailwind from "../../assets/icons/Skills/tailwind.png";
import mongo from "../../assets/icons/Skills/mongoDB.png";
import firebase from "../../assets/icons/Skills/firebase.png";

const MySkills = () => {
  return (
    // <div className="h-screen">
      <div className="md:flex justify-center items-center md:h-screen mt-12">
        <div className="w-full border">
          <h2 className="text-2xl py-2 md:text-3xl m-12 font-bold text-center">
            Frontend Development Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full p-6">
            <div className="flex flex-col justify-center items-center m-3">
              <img src={html} className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]" alt="" />
              <p className="text-2xl mt-3">HTML</p>
            </div>
            <div className="flex flex-col justify-center items-center m-3">
              <img src={css} className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]" alt="" />
              <p className="text-2xl mt-3">CSS</p>
            </div>
            <div className="flex flex-col justify-center items-center m-3">
              <img src={javaScript} className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]" alt="" />
              <p className="text-2xl mt-3">JavaScirpt</p>
            </div>
            <div className="flex flex-col justify-center items-center m-3">
              <img src={react} className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]" alt="" />
              <p className="text-2xl mt-3">React</p>
            </div>
            <div className="flex flex-col justify-center items-center m-3">
              <img src={tailwind} className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]" alt="" />
              <p className="text-2xl mt-3">Tailwind</p>
            </div>
            <div className="flex flex-col justify-center items-center m-3">
              <img src={bootstrap} className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]" alt="" />
              <p className="text-2xl mt-3">Bootstrap</p>
            </div>
          </div>
        </div>
        <div className="w-full border">
          <h2 className="text-2xl py-2 md:text-3xl m-12 font-bold text-center">
            Backend Development Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full p-6">
            <div className="flex flex-col justify-center items-center m-3">
              <img src={nodeJs} className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]" alt="" />
              <p className="text-2xl mt-3">Node JS</p>
            </div>
            <div className="flex flex-col justify-center items-center m-3">
              <img src={mongo} className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]" alt="" />
              <p className="text-2xl mt-3">Mongo DB</p>
            </div>
            <div className="flex flex-col justify-center items-center m-3">
              <img src={firebase} className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]" alt="" />
              <p className="text-2xl mt-3">Firebase</p>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default MySkills;
