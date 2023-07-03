import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/MyProjects/ProjectDetails";


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
        path: "projectDetails/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);
