import React from 'react';
import burgerMenu from "../assets/images/burger-menu.png";

const Navbar = () => {
    return (
        <header className={"p-4 flex  justify-between bg-accent text-white"}>
            <div className={" flex gap-1"}>
                <h1 className={"capitalize"}>HARBOUR.SPACE</h1>
                <span className={"text-xs mt-0.5 mx-1"}>/INTERACTION DESIGN</span>
            </div>
            <div className={"relative"}>
                <button className={"bg-green-400 py-5 px-6 right-10 absolute  capitalize rounded-full hidden sm:block"}>
                    apply now
                </button>

                <img className={"w-7 h-7 sm:hidden"} src={burgerMenu} alt=""/>
            </div>
        </header>
    );
};

export default Navbar;