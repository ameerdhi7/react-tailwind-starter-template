import React from 'react';
import {__} from "../lang/setup";
import Card from "../components/common/Card";

const Home = () => {
    return (
        <div>
            <header className={"bg-accent text-white"}>
                <div className={"p-4 flex gap-1"}>
                    <h1 className={"capitalize"}>HARBOUR.SPACE</h1>
                    <span className={"text-xs mt-0.5"}>/INTERACTION DESIGN</span>
                </div>
            </header>
            <section className={"flex  py-52 px-32"}>
                <section className="flex-1">
                    <div className={"text-accent text-2xl font-semibold capitalize"}>
                        <h2>
                            interaction design
                        </h2>
                        <span>apprenticeship</span>
                    </div>
                    <p className={"my-6 text-harbour-gray"}>
                        A fully funded work-study program to launch your tech career
                    </p>
                    <p className={"text-harbour-gray antialiased"}>
                        Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to
                        accessing exceptional education and career opportunities through a Masters Fellowship.
                    </p>
                    <div className={"mt-6"}>
                        <span className={"text-bold"}>Position: </span>
                        <span className={"text-harbour-gray"}>Marketing Performance</span>
                    </div>
                    <button className={"capitalize mt-6 bg-accent rounded-full  py-2 px-6 text-white"}>
                        apply now
                    </button>
                </section>
                <section className="flex-1">
                    <div className={"border w-full  antialiased rounded border-harbour-gray"}>
                        <div className={"py-5 px-7"}>
                            <h4 className={"text-accent capitalize text-sm font-semibold antialiased"}>Application
                                closes in</h4>
                            <h3 className={"capitalize text-accent mt-2 text-harbour-gray"}>
                                <span>6 day : </span>
                                <span>22 hrs : </span>
                                <span>56 min : </span>
                                <span>13 seg </span>
                            </h3>
                        </div>
                    </div>
                    <div className={"p-5 border capitalize border-harbour-gray  rounded mt-6"}>
                        <div className={"flex justify-around"}>
                            <div>
                                <h3 className={"text-accent text-sm"}>location</h3>
                                <h3 className={"text-harbour-gray text-sm antialiased"}>bangkok</h3>
                            </div>
                            <div>
                                <h3 className={"text-accent text-sm"}>duration</h3>
                                <h3 className={"text-harbour-gray text-sm antialiased"}>1 year</h3>
                                <h3 className={"text-harbour-gray text-sm antialiased"}>full-time</h3>
                            </div>
                        </div>
                        <div className={"flex justify-around"}>
                            <div>
                                <h3 className={"text-accent text-sm"}>start date</h3>
                                <h3 className={"text-harbour-gray text-sm antialiased"}>30 june 2020</h3>
                            </div>
                            <div>
                                <h3 className={"text-accent text-sm"}>end date</h3>
                                <h3 className={"text-harbour-gray text-sm antialiased"}>3 aug 2020</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    );
};

export default Home;
