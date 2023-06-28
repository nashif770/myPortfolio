import React from "react";
import Header from "../../Components/Header";
import html from "../../assets/icons/Skills/html.png";
import css from "../../assets/icons/Skills/CSS.png";
import bootstrap from "../../assets/icons/Skills/bootstrap.png";
import javascript from "../../assets/icons/Skills/java-script.png";
import bug from "../../assets/icons/Skills/bug.png";
import react from "../../assets/icons/Skills/react.png";
import Marquee from "react-fast-marquee";

const MySkills = () => {
  return (
    <div className="">
      <Header heading="My Skill"></Header>{" "}
      <Marquee>
        <div className="grid grid-cols-6 m-auto gap-14">
          <div className="border m-auto shadow-lg w-40 p-3 rounded-lg">
            <img className="h-20 m-auto mb-3" src={html} alt="" />
            <h3 className="text-center">HTML</h3>
          </div>
          <div className="border m-auto shadow-lg w-40 p-3 rounded-lg">
            <img className="h-20 m-auto mb-3" src={css} alt="" />
            <h3 className="text-center">CSS</h3>
          </div>
          <div className="border m-auto shadow-lg w-40 p-3 rounded-lg">
            <img className="h-20 m-auto mb-3" src={bootstrap} alt="" />
            <h3 className="text-center">CSS Framework</h3>
          </div>
          <div className="border m-auto shadow-lg w-40 p-3 rounded-lg">
            <img className="h-20 m-auto mb-3" src={javascript} alt="" />
            <h3 className="text-center">JavaScript</h3>
          </div>
          <div className="border m-auto shadow-lg w-40 p-3 rounded-lg">
            <img className="h-20 m-auto mb-3" src={bug} alt="" />
            <h3 className="text-center">Bug Finding</h3>
          </div>
          <div className="border m-auto shadow-lg w-40 p-3 rounded-lg">
            <img className="h-20 m-auto mb-3" src={react} alt="" />
            <h3 className="text-center">React</h3>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MySkills;