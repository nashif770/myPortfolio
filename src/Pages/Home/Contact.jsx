import React, { useRef } from "react";
import Header from "../../Components/Header";
import ContactMe from "../../Components/ContactMe";

const Contact = () => {

  return (
    <div className="flex flex-col pb-12">
      <Header heading={"Ready to Work with Me?"}></Header>
      <div
        className="flex flex-col align-middle text-center border shadow-lg rounded-lg m-3 mt-20"
        data-aos="fade-up"
      >
        <div className="mt-4">
          <p className="text-4xl font-bold uppercase">Say Hello!</p>
        </div>
        <h3 className="text-4xl m-6">Ahmed Nashif</h3>
        <div className="mb-3 flex justify-center">
          <p className="m-3">a.nashif7@gmail.com</p>
          <p className="m-3">+880-1986854470</p>
        </div>
        <div className="divider">Or</div>
        <p>Get my resume in mail</p>
      <ContactMe></ContactMe>
      </div>
    </div>
  );
};

export default Contact;
