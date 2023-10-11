import React, { useRef } from "react";
import Header from "../../Components/Header";
import ContactMe from "../../Components/ContactMe";

const Contact = () => {

  return (
    <div className="flex flex-col pb-6">
      <Header heading={"Ready to Work with Me?"}></Header>
      <div
        className="flex flex-col align-middle text-center m-3 mt-3 "
        data-aos="fade-up"
      >
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Say Hallo</h2>
          <h3 className="text-2xl py-2 md:text-3xl">a.nashif7@gmail.com</h3>
          <h3 className="text-2xl py-2 md:text-3xl">+880-1986854470</h3>
        <div className="divider">Or</div>
          <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl mx-w-lg mx-auto">
          Get my resume in mail
          </p>
      <ContactMe></ContactMe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
