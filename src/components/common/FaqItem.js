import React from 'react';

const FaqItem = ({question}) => {
    return (
        <section className="text-harbour-gray">
            <div className="flex justify-between mx-auto w-full">
                <div className="flex">
                    <div className="flex">
                        <details className="mb-4 flex-1 transition transition-all">
                            <summary className="font-semibold  flex py-2 px-4">
                                <div className={"flex-1 flex justify-evenly"}>
                                    <h4 className={"text-accent capitalize"}>program condition</h4>
                                    <h5 className={"antialiased mx-10"}>{question}</h5>
                                </div>
                                <div className={"flex absolute right-36 justify-end"}>
                                    <span className={"rounded-full bg-accent py-1 px-5 text-white"}>+</span>
                                </div>
                            </summary>
                            <div className={"flex justify-end"}>
                                <p className={"text-harbour-gray w-1/2 antialiased"}>
                                    The majority of our students receive numerous job offers at the end of the second
                                    academic year of their Bachelor's programme and at the end of the first academic
                                    year of
                                    their Master's programme. The best applicants receive an offer from our industrial
                                    partners at the beginning of their programmes.
                                    Harbour.Space is highly recognized among innovative employers and is strategic
                                    partner
                                    of B.Grimm multi- industry corporation with 140 years of history in Thailand.
                                    Together
                                    we insure students get the best knowledge about the current job market
                                    opportunities.
                                    We offer our students paid internships options during studies jointly with our
                                    industrial partners.
                                    Employers that hired graduates of Harbour.Space in the past include Google, IBM,
                                    Accenture, Typeform, Frog, and other tech centric companies. Our industry specific
                                    employability report could be provided to you separately during the admission
                                    process.</p>

                            </div>

                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqItem;