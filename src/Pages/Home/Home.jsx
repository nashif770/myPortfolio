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
      <Banner data-aos='fade-up'></Banner>
      <AboutMe data-aos='fade-up'></AboutMe>
      <MyProjects data-aos='fade-up'></MyProjects>
      <MySkills data-aos='fade-up'></MySkills>
      <Services data-aos='fade-up'></Services>
      {/* <Testimonials></Testimonials> */}
      {/* <Resume data-aos='fade-up'></Resume> */}
      <Blog data-aos='fade-up'></Blog>
      <Contact data-aos='fade-up'></Contact>
    </div>
  );
};

export default Home;
