import React from 'react';
import IntroductionSection from "../components/home/IntroductionSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/home/AboutSection";

import 'swiper/css';
import FellowsCarouselSection from "../components/home/FellowsCarouselSection";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <IntroductionSection/>
            <AboutSection/>
            <FellowsCarouselSection/>
        </div>

    );
};

export default Home;
