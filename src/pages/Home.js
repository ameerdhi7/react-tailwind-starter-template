import React from 'react';
import IntroductionSection from "../components/home/IntroductionSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/home/AboutSection";
import FellowCard from "../components/FellowCard";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <IntroductionSection/>
            <AboutSection/>
            {/*<div className={"flex justify-center"}>*/}
            {/*    /!*<FellowCard/>*!/*/}
            {/*    /!*<FellowCard/>*!/*/}
            {/*    /!*<FellowCard/>*!/*/}
            {/*</div>*/}
        </div>

    );
};

export default Home;
