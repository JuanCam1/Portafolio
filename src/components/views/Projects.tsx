import { Project } from "./Project";
import { dataProjects } from "../../data/projects";

export const Projects = () => {

  return (
    <>
      {
        dataProjects.map(data => (
          <Project key={data.id} data={data} />
        ))
      }
    </>
  );
};
