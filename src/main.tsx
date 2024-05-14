import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Homepage from '@/pages/Homepage'
import Projects from '@/pages/Projects'
import Skill from '@/pages/Skill.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "tech",
        element: <Skill />
      }
    ]
  },
], {basename: '/personal-page/'})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
