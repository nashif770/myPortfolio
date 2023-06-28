import React from "react";

const DownloadButton = ({buttonName}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ahmed Nashif Web Developer Resume.pdf";
    link.download = "Ahmed Nashif Web Developer Resume.pdf";
    link.click();
  };
  return (
    <button onClick={handleDownload} className="btn font-bold btn-lg m-0 shadow-lg">
      {buttonName}
    </button>
  );
};

export default DownloadButton;
