import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EnHomepage from "@/pages/en/Homepage.tsx";
import EnProjects from "@/pages/en/Projects.tsx";
import EnSkill from "@/pages/en/Skill.tsx";
import EnAbout from "@/pages/en/About.tsx";
import IdHomepage from "@/pages/id/Homepage.tsx";
import IdProjects from "@/pages/id/Projects.tsx";
import IdSkill from "@/pages/id/Skill.tsx";
import IdAbout from "@/pages/id/About.tsx";

import Index from "@/pages/index.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/en",
      element: <App />,
      children: [
        {
          index: true,
          element: <EnHomepage />,
        },
        {
          path: "projects",
          element: <EnProjects />,
        },
        {
          path: "skill",
          element: <EnSkill />,
        },
        {
          path: "about",
          element: <EnAbout />,
        },
      ],
    },
    {
      path: "/id",
      element: <App />,
      children: [
        {
          index: true,
          element: <IdHomepage />,
        },
        {
          path: "projects",
          element: <IdProjects />,
        },
        {
          path: "skill",
          element: <IdSkill />,
        },
        {
          path: "about",
          element: <IdAbout />,
        },
      ]
    }
  ],
  // { basename: "/personal-page/" },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
