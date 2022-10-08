import React from 'react';
import IntroductionSection from "../components/home/IntroductionSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/home/AboutSection";
import FellowsCarouselSection from "../components/home/FellowsCarouselSection";
import FaqSection from "../components/home/FaqSection";



const Home = () => {
    return (
        <div>
            <Navbar/>
            <IntroductionSection/>
            <AboutSection/>
            <FellowsCarouselSection/>
            <FaqSection/>
        </div>

    );
};

export default Home;
