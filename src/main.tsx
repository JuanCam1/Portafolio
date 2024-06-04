import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Blog, Projects, Contact, Experience } from "./components";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Projects />
      },
      {
        path: "experience",
        element: <Experience />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "blog",
        element: <Blog />
      }
    ]
  }
]);

const idRoot = document.getElementById("root") as HTMLElement;
const root = createRoot(idRoot);
root.render(<RouterProvider router={router} />);
