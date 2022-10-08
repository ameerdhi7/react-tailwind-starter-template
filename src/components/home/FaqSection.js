import React from 'react';
import FaqItem from "../common/FaqItem";

const FaqSection = () => {
    return (
        <section className={"px-32"}>
            <h2 className={"text-accent text-3xl "}>Frequently asked <br/>questions</h2>
            <div className={"mt-4"}>
                <hr className={"my-4"}/>
                <FaqItem question={'What are my obligations?'}/>
                <hr className={"my-2"}/>
                <FaqItem question={"Do I get a job placement upon graduation?"}/>
                <hr className={"my-2"}/>
                <FaqItem question={"Do I need a visa?"}/>
            </div>


        </section>
    );
};

export default FaqSection;