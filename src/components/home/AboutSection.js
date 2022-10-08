import React from 'react';
import fellowImg from "../../assets/images/fellow.png";
import Card from "../common/Card";

const AboutSection = () => {
    return (
        <section className={"min-h-screen z-10  px-32"}>
            <section className={"md:flex"}>
                <div className={"flex-1"}>
                    <img className={"rounded-full h-72"} src={fellowImg} alt=""/>
                </div>
                <div className={"ml-5 mt-4 md:mt-0 flex-1"}>
                    <h1 className={"text-accent text-3xl font-se capitalize"}>
                        About the
                        <br/>
                        apprenticeship
                    </h1>
                    <p className={"text-harbour-gray mt-5 antialiased"}>Our scholarships are designed to give
                        talented
                        and driven young people from any background access
                        to top-class education, experience and network. We offer a fully-funded master’s degree
                        alongside an apprenticeship and a guaranteed job upon graduation.</p>
                </div>
            </section>
            <section className={"my-16 flex md:flex-none"}>
                <div className={"md:flex gap-5"}>
                    <div className={"p-5   rounded border w-72 border-gray-200"}>
                        <div>
                            <small className={"text-accent text-center text-xs"}>Scholarship value</small>
                            <h4 className={"text-3xl antialiased text-harbour-gray"}>€31,300</h4>
                            <div className={"mt-48"}>
                                <hr/>
                                <div className={"grid px-5 grid-cols-2 items-center justify-center mt-10"}>
                                    <div>
                                        <small className={"text-accent text-center text-xs"}>Tuition covered</small>
                                        <h4 className={"antialiased text-harbour-gray"}>€20,900</h4>
                                    </div>
                                    <div>
                                        <small className={"text-accent text-center text-xs"}>Remaining</small>
                                        <h4 className={"antialiased text-harbour-gray"}>€2,000</h4>
                                    </div>
                                    <div className={"mt-2"}>
                                        <small className={"text-accent text-center text-xs"}>Remaining</small>
                                        <h4 className={"antialiased text-harbour-gray"}>€2,000</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex-1"}>
                        <div className={"md:flex flex-col "}>
                            <div className={"mt-5 md:mt-0"}>
                                <Card>
                                    <h3 className={"text-accent"}>Study commitment</h3>
                                    <h5 className={"mt-2  text-harbour-gray antialiased"}>3 hours / day</h5>
                                    <hr className={"w-6 my-4 font-bold"}/>
                                    <p className={"text-harbour-gray antialiased"}>You will complete 15 modules to
                                        graduate. Daily classes are 3 hours, plus
                                        coursework to complete in your own time. </p>
                                </Card>
                            </div>
                            <div className={" mt-5 md:mt-0 md:ml-4"}>
                                <Card>
                                    <h3 className={"text-accent"}>Work commitment</h3>
                                    <h5 className={"mt-2  text-harbour-gray antialiased"}>4 hours / day</h5>
                                    <hr className={"w-6 my-4 font-bold"}/>
                                    <p className={"text-harbour-gray antialiased"}>Immerse yourself in the
                                        professional world during your apprenticeship. You’ll learn the ropes from
                                        the best and get to apply your newly acquired knowledge in the field from
                                        day one. </p>
                                </Card>
                            </div>
                        </div>
                        <div className={"flex my-5 items-center"}>
                            <hr className={"flex-1 text-harbour-gray  h-1"}/>
                            <span className={"uppercase text-harbour-gray mx-4"}>graduation</span>
                            <hr className={"flex-1"}/>
                        </div>
                        <Card>
                            <h3 className={"text-accent"}>A full-time contract</h3>
                            <h5 className={"mt-2  text-harbour-gray antialiased"}>1 Year / Full-Time</h5>
                            <hr className={"w-6 my-4 font-bold"}/>
                            <p className={"text-harbour-gray antialiased"}>You’ll be guaranteed a 1 year contract
                                with SCG upon graduation. </p>
                        </Card>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AboutSection;