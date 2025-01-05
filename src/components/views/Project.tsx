import logoProfile from "../../assets/images/perfiImagen.webp";
import type { IProject } from "../../data/dataProjects";
import Carousel from "../shared/carousel/Carousel";

interface ProjectProps {
	data: IProject;
}
export const Project = ({ data }: ProjectProps) => {
	return (
		<section className="flex flex-col border-[0.2px] border-gray-300 dark:bg-[#242930] shadow-md mb-4 p-4 rounded-md">
			<div className="flex gap-2 pb-2">
				<div className="border-2 dark:bg-[rgb(21,24,27)] border-blue-300 border-solid rounded-full overflow-hidden size-12">
					<img
						className="w-full h-full object-cover"
						src={logoProfile}
						alt="logo"
					/>
				</div>
				<div className="flex flex-col">
					<h3 className="m-0 font-bold">Juan ⭐</h3>
					<span
						className={`capitalize  font-medium me-2 px-2.5 py-1 rounded text-[10px]  ${data.state === "pendiente" ? "bg-red-200 text-red-800   dark:bg-red-900 dark:text-red-300" : "bg-indigo-200 text-indigo-800  dark:bg-indigo-900 dark:text-indigo-300"}`}
					>
						{data.state}
					</span>
				</div>
			</div>

			<div className="px-4 max-sm:px-0 py-2">
				<div className="mb-4 w-full">
					<h2 className="pb-2 font-extrabold text-2xl text-blue-400">
						{data.title}
					</h2>
					<p>{data.description}</p>
					<div className="flex gap-2 mt-2">
						{data.tecnologies.map((tecnologie) => (
							<div
								key={tecnologie}
								className="transition hover:-translate-y-1 duration-200 overflow-hidden size-6"
							>
								<img
									className="w-full h-full aspect-auto object-cover"
									src={tecnologie}
									alt="projects"
								/>
							</div>
						))}
					</div>
				</div>
				<Carousel images={data.images} />
			</div>
		</section>
	);
};
