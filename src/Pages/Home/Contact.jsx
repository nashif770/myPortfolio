import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col align-middle text-center m-3 border shadow-lg rounded-lg p-6 h-[80vh]"  data-aos='fade-up'>
      <div>
        <h3 className="text-2xl font-bold m-6 uppercase">Ahmed Nashif</h3>
        <p className="text-3xl font-bold uppercase">Ready to Work with Me?</p>
        <p className="text-3xl font-bold">Say Hello!</p>
      </div>
      <div className="flex justify-center">
        <p className="m-3">a.nashif7@gmail.com</p>
        <p className="m-3">+880-1986854470</p>
      </div>
    </div>
  );
};

export default Contact;
