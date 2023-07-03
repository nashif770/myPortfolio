import React from "react";
import Header from "../../Components/Header";

const Contact = () => {
  return (
    <div className="h-[80vh]">
      <Header heading={"Ready to Work with Me?"}></Header>
      <div
        className="flex flex-col align-middle text-center border shadow-lg rounded-lg m-3 mt-20"
        data-aos="fade-up"
      >
        <div className="mt-4">
          <p className="text-4xl font-bold uppercase">Say Hello!</p>
        </div>
          <h3 className="text-4xl m-6">Ahmed Nashif</h3>
        <div className="mb-12 flex justify-center">
          <p className="m-3">a.nashif7@gmail.com</p>
          <p className="m-3">+880-1986854470</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
