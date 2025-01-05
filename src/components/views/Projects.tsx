import { Project } from "./Project";
import { dataProjects } from "../../data/dataProjects";

export const Projects = () => {
	return (
		<>
			{dataProjects.map((data) => (
				<Project key={data.id} data={data} />
			))}
		</>
	);
};
