import React from 'react';

const Navbar = () => {
    return (
        <header className={"bg-accent text-white"}>
            <div className={"p-4 flex gap-1"}>
                <h1 className={"capitalize"}>HARBOUR.SPACE</h1>
                <span className={"text-xs mt-0.5"}>/INTERACTION DESIGN</span>
            </div>
        </header>
    );
};

export default Navbar;