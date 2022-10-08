import React from 'react';
import IntroductionSection from "../components/home/IntroductionSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/home/AboutSection";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <IntroductionSection/>
            <AboutSection/>
        </div>

    );
};

export default Home;
