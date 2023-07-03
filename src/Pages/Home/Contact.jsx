import React from "react";
import Header from "../../Components/Header";

const Contact = () => {
  return (
    <div className="flex flex-col align-middle text-center m-3 border shadow-lg rounded-lg p-6 h-[80vh]"  data-aos='fade-up'>
      <Header heading={"Ready to Work with Me?"}></Header>
      <div className="mt-6">
        <p className="text-3xl font-bold uppercase">Say Hello!</p>
        <h3 className="text-4xl font-bold m-6 uppercase">Ahmed Nashif</h3>
      </div>
      <div className="flex justify-center">
        <p className="m-3">a.nashif7@gmail.com</p>
        <p className="m-3">+880-1986854470</p>
      </div>
    </div>
  );
};

export default Contact;
