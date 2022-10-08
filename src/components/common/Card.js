import React from 'react';

const Card = (props) => {
    return (
        <div className={"p-5 rounded border border-harbour-gray"}>
            {props.children}
        </div>
    );
};

export default Card;