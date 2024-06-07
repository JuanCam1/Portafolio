import logoProfile from "../../assets/images/pixelJuan.svg";
import { IProject } from "../../data/dataProjects";
import Carousel from "../shared/carousel/Carousel";

interface ProjectProps {
  data: IProject;
}
export const Project = ({ data }: ProjectProps) => {
  return (
    <section className="flex flex-col mb-4 border-[0.2px] p-4 dark:bg-[#242930] border-gray-300 rounded-md shadow-md">
      <div className="flex gap-2 pb-2">
        <div className="size-12 overflow-hidden rounded-full border-2 border-solid border-blue-300 dark:bg-[rgb(21,24,27)]">
          <img className="w-full h-full object-contain" src={logoProfile} alt="logo" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold  m-0 ">Juan ⭐</h3>
          <span className={`capitalize  font-medium me-2 px-2.5 py-1 rounded text-[10px]  ${data.state === "pendiente" ? "bg-red-200 text-red-800   dark:bg-red-900 dark:text-red-300" : "bg-indigo-200 text-indigo-800  dark:bg-indigo-900 dark:text-indigo-300"}`}>
            {data.state}
          </span>
        </div>
      </div>

      <div className="max-sm:px-0 px-4 py-2">
        <div className="w-full mb-4">
          <h2 className="font-extrabold text-2xl pb-2 text-blue-400">
            {data.title}
          </h2>
          <p>
            {data.description}
          </p>
          <div className="flex mt-2 gap-2">
            {
              data.tecnologies.map((tecnologie, index) => (
                <div key={index} className="size-6 overflow-hidden transition duration-200 hover:-translate-y-1 ">
                  <img className="w-full h-full object-cover aspect-auto" src={tecnologie} alt="projects" />
                </div>
              ))
            }
          </div>
        </div>
        <Carousel images={data.images} />
      </div>
    </section>
  );
};
