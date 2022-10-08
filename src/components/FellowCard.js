import React from 'react';
import Card from "./common/Card";
import fellow from "../assets/images/fellow-2.png";


const FellowCard = () => {
    return (
        <Card>
            <div className={"flex items-center"}>
                <img src={fellow} className={"rounded-full h-14"} alt=""/>
                <div className={"mx-1 mt-0"}>
                    <h6 className={"text-sm leading-none"}>Irene Pereyra</h6>
                    <span
                        className={"text-harbour-gray leading-none antialiased text-xs"}>Interaction Design Fellow ‘19</span>
                </div>
            </div>
            <div className={"flex justify-end mx-5"}>
                <button className={"text-white rounded-full px-4 capitalize text-sm py-2 bg-accent"}>drag</button>
            </div>
            <p className={"text-harbour-gray mt-3 antialiased"}>
                This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial
                support and experienced offered through the program.
            </p>
            <div className={"mt-4 text-harbour-gray text-xs antialiased"}>
                <span>Education</span>
                <span> . </span>
                <span>B.A. Visual Design </span>

            </div>
        </Card>
    );
};

export default FellowCard;