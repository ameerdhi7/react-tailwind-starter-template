import React, {FC} from 'react';

interface Props {
    classes?: string,
    title: string,
    children?: React.ReactNode | string
}

const Card: FC<Props> = ({classes, title, children}) => {
    return (
        <div
            className={`bg-white w-96   rounded-xl  ${classes ? classes : ""}`}>
            {
                title
                    ? <div className={"flex items-center"}>
                        <h1 className={"title p-2 sm:p-0"}>{title}</h1>
                    </div>

                    : ""
            }
            {children}
        </div>
    );
};

export default Card;
