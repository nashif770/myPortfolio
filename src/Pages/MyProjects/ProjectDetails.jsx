import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "../../../public/projects.json";

const ProjectDetails = () => {
  const { id } = useParams();

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const selectedProject = projectData?.find((project) => project.id === id);
    setProjects(selectedProject);
  }, []);

  console.log(projects);

  return (
    <div>
      <div className="text-4xl text-center m-4">{projects?.title}</div>
      <div className="flex">
        <div className="w-1/2">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img src={projects?.image2} className="w-5/6 m-auto" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img src={projects?.image3} className="w-5/6 m-auto" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img src={projects?.image4} className="w-5/6 m-auto" />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          </div>
        </div>
        <div className="w-1/2">
            <h2 className="text-2xl mb-2">{projects?.title}</h2>
            <p className="font-bold">Description:</p>
            <h3 className="mb-2">{projects?.description}</h3>
            <p className="font-bold">Features:</p>
            <h3 className="mb-2">{projects?.features}</h3>
            <button className="btn btn-sm mt-3"><a href={projects?.liveLink}>Live Link</a></button>
            <button className="btn btn-sm mt-3"><a href={projects?.githubLink}>Git Repo</a></button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
