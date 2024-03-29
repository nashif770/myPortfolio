import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mx-auto max-w-[1980px] mx-h-[1080px] text-black">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
