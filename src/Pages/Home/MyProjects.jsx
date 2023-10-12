import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";


const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);


  return (
    <div id="projects" className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-6" data-aos="fade-up">
        {projects.map((myProject) => (
          <div className="p-6 border shadow-lg rounded-lg hover:bg-slate-100" key={myProject.id}>
            <img className="h-60 mx-auto rounded-lg" src={myProject.image} alt="" />
            <h2 className="text-center text-2xl mt-3 font-bold">{myProject.title}</h2>
            <p className="mt-3 w-10/12">{myProject.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button className="btn btn-sm mt-3"><a href={myProject.liveLink} target="blank">Live Link</a></button>
            <button className="btn btn-sm mt-3"><a href={myProject.githubLink} target="blank">Git Repo</a></button>
            <Link to={`/projectDetails/${myProject.id}` }>
            <button className="btn btn-sm mt-3">See Details</button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
