import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import App from "./App.tsx";
import ExperienceList from "./components/section/experience/experience-list.tsx";
import Projects from "./components/section/projects/projects.tsx";
import Blogs from "./components/section/blog/Blogs.tsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Projects />,
      },
      {
        path: "experience",
        element: <ExperienceList />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

const idRoot = document.getElementById("root") as HTMLElement;
const root = createRoot(idRoot);
root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>

);
