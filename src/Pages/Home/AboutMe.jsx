import React from "react";
import "animate.css";
import { FaBeer, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Header from "../../Components/Header";
import "animate.css";

const AboutMe = () => {
  return (
    <div className="h-5/6" data-aos="fade-up">
      <Header heading="About Me"></Header>
      <div className="flex flex-col md:flex-row align-middle">
        <div className="flex flex-col m-3 md:w-1/2">
          <p className="text-6xl border rounded-lg shadow-lg p-6 mt-3 mb-3 animate__animated animate__slideInLeft animate__delay-2s">
            Ahmed Nashif
          </p>
          <p className="text-3xl border rounded-lg shadow-lg p-6 mb-3 animate__animated animate__slideInLeft animate__delay-3s">
            I am a Web Developer
          </p>
          <p className="text-2xl border rounded-lg shadow-lg p-6 mb-3 animate__animated animate__slideInLeft animate__delay-4s">
            I have a passion for creating intuitive<br></br> and user-friendly
            web experiences.
          </p>
        </div>
        <div className="m-3 p-3 border shadow-lg rounded-lg md:w-1/2 animate__animated animate__slideInRight animate__delay-5s">
          <p>
            I am a Highly motivated web developer with a passion for creating
            visually appealing and user friendly websites. I am a continuous
            learner and always stay up to date with emerging web technologies.
            Committed to delivering exceptional user experiences and driving
            innovation in web development industry.I am constantly seeking
            opportunities to challenge myself and push the boundaries of what
            can be achieved on the web.
          </p>
          <div className="mt-3 ms-3 pt-6">
            <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
            <div className="">
              {/* TODO:  */}
              <a href="https://web.facebook.com/nashif910" target="blank">
                <FaFacebook className="btn btn-circle me-4"></FaFacebook>
              </a>
              <a href="https://twitter.com/AN361770" target="blank">
                <FaTwitter className="btn btn-circle me-4"></FaTwitter>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-nashif-9840941a0/"
                target="blank"
              >
                <FaLinkedin className="btn btn-circle me-4"></FaLinkedin>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
