import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Projects, Contact, Experience } from "./components";
import App from "./App.tsx";
import "./index.css";
import Blogs from "./components/views/Blogs.tsx";

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
				element: <Experience />,
			},
			{
				path: "contact",
				element: <Contact />,
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
root.render(<RouterProvider router={router} />);
