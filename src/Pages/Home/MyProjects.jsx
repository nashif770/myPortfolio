import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log(projects)

  return (
    <div>
      <Header heading="My Projects"></Header>
      <div className="grid grid-cols-3 gap-3 p-6">
        {projects.map((myProject) => (
          <div className="m-auto p-6 border shadow-lg rounded-lg" key={myProject.title}>
            <img className="h-96 mx-auto" src={myProject.image} alt="" />
            <h2 className="text-center text-2xl mt-3 font-bold">{myProject.title}</h2>
            <p className="mt-3 w-10/12">{myProject.description}</p>
            <div className="grid grid-cols-2 gap-3">
            <button className="btn btn-sm mt-3"><a href={myProject.liveLink}>Live Link</a></button>
            <button className="btn btn-sm mt-3"><a href={myProject.githubLink}>Git Repository</a></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
