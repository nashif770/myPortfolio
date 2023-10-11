import React, { useEffect } from "react";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import MyProjects from "./MyProjects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Resume from "./Resume";
import Blog from "./Blog";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of animations in milliseconds
      easing: "ease", // Set the easing for animations
      once: false, // Specify whether animations should be triggered only once
    });
  }, []);
  return (
    <div className="bg-gradient-to-t from-teal-100 to-white">
      <Banner ></Banner>
      <AboutMe ></AboutMe>
      <MyProjects ></MyProjects>
      <MySkills ></MySkills>
      <Services ></Services>
      {/* <Testimonials></Testimonials> */}
      {/* <Resume ></Resume> */}
      <Blog ></Blog>
      <Contact ></Contact>
    </div>
  );
};

export default Home;
