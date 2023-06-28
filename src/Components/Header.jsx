import React from 'react';

const Header = ({heading, subHeading}) => {
    return (
        <>
        <div className="divider"></div>
        <div>
            <h2 className="text-4xl font-bold text-center">{heading}</h2>
            <h3 className="text-2xl text-center">{subHeading}</h3>
        </div>
        <div className="divider"></div>
        </>
    );
};

export default Header;