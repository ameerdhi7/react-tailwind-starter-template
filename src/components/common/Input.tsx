import React, {FC} from 'react';
import {__} from "../../lang/setup";

interface Input {
    name: string,
    value?: string | number,
    title: string,
    placeholder: string,
    handleChange: (e: any) => any,
    nativeType: string,
    required: boolean,
    className: string,
    disabled?: boolean
}

const Input: FC<Input> = ({
                              name,
                              value,
                              title,
                              placeholder,
                              handleChange,
                              nativeType,
                              required = true,
                              className = "",
                              disabled = false
                          }) => {
    const onInputChange = (e: any) => {
        handleChange(e);
    }
    return (
        <>
            <label className="block  mb-0.5 text-gray-700 capitalize" htmlFor={name}>
                <span>{__(title)} </span>
                {
                    required
                        ? <small className={`text-red-600 font-300 capitalize text-sm`}>
                            <code>*</code>
                        </small>
                        : <small className={`text-green-600 font-300 capitalize text-sm`}>
                            <code>*</code>
                            {__("optional")}
                        </small>
                }
            </label>
            <input
                disabled={disabled}
                value={value}
                autoComplete={title}
                onChange={onInputChange}
                className={`${className} text-sm   border rounded w-full py-2 px-3 text-grey-darker`}
                name={name ? name : title}
                id={title}
                type={nativeType}
                placeholder={placeholder}/>
        </>
    );
}
export default Input;
