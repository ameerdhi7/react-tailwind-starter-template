import React from 'react';
import IntroductionSection from "../components/home/IntroductionSection";

const Home = () => {
    return (
        <div>
            <header className={"bg-accent text-white"}>
                <div className={"p-4 flex gap-1"}>
                    <h1 className={"capitalize"}>HARBOUR.SPACE</h1>
                    <span className={"text-xs mt-0.5"}>/INTERACTION DESIGN</span>
                </div>
            </header>
            <IntroductionSection/>
        </div>

    );
};

export default Home;
