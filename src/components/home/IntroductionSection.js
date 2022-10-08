import React from 'react';
import interactionDesign from "../../assets/images/interaction-design.png";
import grid from "../../assets/images/grid.png";
import poweredBy from "../../assets/images/powered-by.png";

const IntroductionSection = () => {
    return (
        <section className={"flex  py-52 px-32"}>
            <div className="flex-1">
                <div
                    className={"text-accent relative text-2xl font-semibold capitalize"}>
                    <img className={"absolute left-28 -top-14 h-44"} src={interactionDesign} alt=""/>
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
            </div>
            <div className="flex-1 relative ">

                <div className={"text-harbour-gray px-3 flex   capitalize"}>
                    <img src={poweredBy} className={"h-10"} alt=""/>
                    <div className={"mx-3"}>
                        <span className={"antialiased font-light text-sm"}>powered by:</span>
                        <h3 className={"text-center text-harbour-gray"}>Zeptolab</h3>
                    </div>
                </div>
                <div className={"border w-full mt-6   antialiased rounded border-gray-200"}>
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
                <div className={"p-5 border capitalize border-gray-200  rounded mt-6"}>
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
                    <div
                        className={"flex justify-around mt-1"}>
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
                <img src={grid} className={"absolute  h-56 -right-36"} alt=""/>
            </div>
        </section>
    );
};

export default IntroductionSection;