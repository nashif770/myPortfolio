import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/MyProjects/ProjectDetails";
import AllProjects from "../Pages/MyProjects/AllProjects";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "projects",
        element: <AllProjects></AllProjects>,
      },
      {
        path: "projectDetails/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);
