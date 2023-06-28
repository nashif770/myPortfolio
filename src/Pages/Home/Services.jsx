import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <div>
      <Header heading={"My Services"}></Header>
      <div className="grid grid-cols-3 gap-3 p-6">
        {services.map((service) => (
          <div
            className="m-auto p-2 border shadow-lg rounded-lg w-full flex justify-center"
            key={service.name}
          >
            <img className="h-20 me-3" src={service.icon} alt="" />
            <div>
              <h3 className="font-bold h-8">{service.name}</h3>
              <h3 className="h-16">{service.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
