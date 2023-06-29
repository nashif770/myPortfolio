import React, { useState } from "react";
import DownloadButton from "../../Components/DownloadButton";
import Header from "../../Components/Header";

const Resume = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = (e) => {
    console.log(e.target.value);
    const resumeUrl = "../../../public/Ahmed Nashif Web Developer Resume.pdf";
    const mailtoLink = `mailto:${email}?subject=Resume Download&body=Please find attached my resume.%0D%0A%0D%0ABest regards,%0D%0AAhmed Nashif`;
    window.open(mailtoLink);
  };

  return (
    <div>
      <Header heading={"Get my resume"}></Header>
      <div
        className="flex flex-col mx-auto justify-center w-3/4"
        data-aos="fade-up"
      >
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <button onClick={handleSendEmail}>Download Resume</button>
        <div className="p-6">
          <DownloadButton buttonName={"Download"}></DownloadButton>
        </div>
      </div>
    </div>
  );
};

export default Resume;
