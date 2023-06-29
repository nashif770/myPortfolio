import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import 'animate.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);

  let index = 1;

  return (
    <div data-aos='fade-up'>
      <Header heading={"My Services"}></Header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {services.map((service) => (
          <div
            className="m-auto p-2 border shadow-lg rounded-lg w-full flex justify-center hover:shadow-none animate__animated animate__pulse infinite"
            key={service.name}           
          >
            <img className="h-20 me-3" src={service.icon} alt="" />
            <div>
              <h3 className="font-bold h-12">{service.name}</h3>
              <h3 className="h-16">{service.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
