import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import Services from './Services';
import Testimonials from './Testimonials';
import Resume from './Resume';
import Blog from './Blog';
import Contact from './Contact';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
            <MySkills></MySkills>
            <Services></Services>
            {/* <Testimonials></Testimonials> */}
            <Resume></Resume>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;