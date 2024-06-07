import { dataProjects } from "../../data/dataProjects"
import { Project } from "./Project"

const Blogs = () => {
  return (
    <>
      {
        dataProjects.map(data => (
          <Project key={data.id} data={data} />
        ))
      }
    </>
  )
}

export default Blogs