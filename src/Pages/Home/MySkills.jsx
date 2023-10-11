import React from "react";
import Header from "../../Components/Header";
import { FaBeer, FaFacebook, FaTwitter, FaLinkedin, FaCheck} from "react-icons/fa";

const MySkills = () => {
  return (
    <div className="h-screen">
      <Header heading="My Skill"></Header>
      <div className="flex justify-center items-center h-screen ">
        <div className="flex flex-col md:flex-row justify-stretch w-5/6 text-center">
          <div className="w-full p-3 md:p-16 flex flex-col border rounded-xl shadow-lg bg-gradient-to-t from-teal-400 md:m-16">
            <h2 className="text-2xl py-2 md:text-3xl mb-8 font-bold">Frontend Development Skills</h2>
            <ul className="grid grid-cols-2 gap-5 text-start w-5/6 mx-auto">
              <li className="flex p-3 align-middle text-2xl"><FaCheck className="me-3"></FaCheck> HTML</li>
              <li className="flex p-3 align-middle text-2xl"><FaCheck className="me-3"></FaCheck>CSS</li>
              <li className="flex p-3 align-middle text-2xl"><FaCheck className="me-3"></FaCheck>JavaScript</li>
              <li className="flex p-3 align-middle text-2xl"><FaCheck className="me-3"></FaCheck>Bootstrap</li>
              <li className="flex p-3 align-middle text-2xl"><FaCheck className="me-3"></FaCheck>Tailwind</li>
              <li className="flex p-3 align-middle text-2xl"><FaCheck className="me-3"></FaCheck>Github</li>
              <li className="flex p-3 align-middle text-2xl"><FaCheck className="me-3"></FaCheck>React JS</li>
            </ul>
          </div>
          <div className="w-full p-3 md:p-16 flex flex-col border rounded-xl shadow-lg bg-gradient-to-t from-teal-400 md:m-16">
            <h2 className="text-2xl py-2 md:text-3xl mb-8 font-bold">Backend Development Skills</h2>
            <ul className="grid grid-cols-2 gap-5 text-start w-5/6 mx-auto">
              <li className="flex p-3 align-middle text-2xl"><FaCheck className="me-3"></FaCheck>MongoDB</li>
              <li className="flex p-3 align-middle text-2xl"><FaCheck className="me-3"></FaCheck>Firebase</li>
              <li className="flex p-3 align-middle text-2xl"><FaCheck className="me-3"></FaCheck>Node JS</li>
              <li className="flex p-3 align-middle text-2xl"><FaCheck className="me-3"></FaCheck>Express JS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
