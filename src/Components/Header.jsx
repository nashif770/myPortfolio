import React from "react";

const Header = ({ heading, subHeading }) => {
  return (
    <div className="border shadow-lg m-3 rounded-lg p-6 bg-slate-300">
      {/* <div className="divider"></div> */}
        <h2 className="text-4xl font-bold text-center">{heading}</h2>
        <h3 className="text-2xl text-center">{subHeading}</h3>
      {/* <div className="divider"></div> */}
    </div>
  );
};

export default Header;
