import TypographyH2 from "@/components/shared/typography-h2";
import TypographyP from "@/components/shared/typography-p";
import CarouselItems from "@/components/shared/carousel-items";
import ReactLogo from "@/components/icons/react-logo";

import { Project } from "./project";
import { dataProjects } from "@/data/dataProjects";

import ExpoLogo from "@/components/icons/expo-logo";
import ContainerFlex from "@/components/shared/container-flex";
import TailwindLogo from "@/components/icons/tailwind-logo";
import FirebaseLogo from "@/components/icons/firebase-logo";
import ReactRouterLogo from "@/components/icons/router-logo";
import TypeScriptLogo from "@/components/icons/typescript-logo";
import TooltipItem from "@/components/shared/tooltip-item";
import ElectronLogo from "@/components/icons/electron-logo";
import ShadcnLogo from "@/components/icons/shadcn-log";

const Projects = () => {
	const project1 = dataProjects[0];
	const project2 = dataProjects[1];
	const project3 = dataProjects[2];
	const project4 = dataProjects[3];
	const project5 = dataProjects[4];
	const project6 = dataProjects[5];
	return (
		<>
			<Project
				state={project1.state}
				github={project1.github}
				url={project1.url}
			>
				<div className="max-sm:px-0 py-2 w-full">
					<div className="mb-4 w-full">
						<TypographyH2
							text={project1.title}
							className="pb-2 font-extrabold text-blue-400 text-2xl"
						/>

						<TypographyP className="leading-6">
							{project1.description}
						</TypographyP>

						<ContainerFlex className="justify-start mt-4 w-full h-8">
							<TooltipItem text="React">
								<ReactLogo />
							</TooltipItem>
							<TooltipItem text="Shadcn">
								<ShadcnLogo />
							</TooltipItem>
							<TooltipItem text="Tailwind">
								<TailwindLogo />
							</TooltipItem>
							<TooltipItem text="Firebase">
								<FirebaseLogo />
							</TooltipItem>
							<TooltipItem text="React Router Dom">
								<ReactRouterLogo />
							</TooltipItem>
							<TooltipItem text="TypeScript">
								<TypeScriptLogo />
							</TooltipItem>
						</ContainerFlex>
					</div>
					<div className="justify-center items-center w-full h-[300px]">
						<CarouselItems items={project1.images} />
					</div>
				</div>
			</Project>

			<Project
				state={project2.state}
				github={project2.github}
				url={project2.url}
			>
				<div className="max-sm:px-0 py-2 w-full">
					<div className="mb-4 w-full">
						<TypographyH2
							text={project2.title}
							className="pb-2 font-extrabold text-blue-400 text-2xl"
						/>

						<TypographyP className="leading-6">
							{project2.description}
						</TypographyP>

						<ContainerFlex className="justify-start mt-4 w-full h-8">
							<TooltipItem text="Electron">
								<ElectronLogo />
							</TooltipItem>
							<TooltipItem text="React">
								<ReactLogo />
							</TooltipItem>
							<TooltipItem text="Shadcn">
								<ShadcnLogo />
							</TooltipItem>
							<TooltipItem text="Tailwind">
								<TailwindLogo />
							</TooltipItem>
							<TooltipItem text="TypeScript">
								<TypeScriptLogo />
							</TooltipItem>
						</ContainerFlex>
					</div>
					<div className="justify-center items-center w-full h-[300px]">
						<CarouselItems items={project2.images} />
					</div>
				</div>
			</Project>

			<Project
				state={project3.state}
				github={project3.github}
				url={project3.url}
			>
				<div className="max-sm:px-0 py-2 w-full">
					<div className="mb-4 w-full">
						<TypographyH2
							text={project3.title}
							className="pb-2 font-extrabold text-blue-400 text-2xl"
						/>

						<TypographyP className="leading-6">
							{project3.description}
						</TypographyP>

						<ContainerFlex className="justify-start mt-4 w-full h-8">
							<div className="h-7 iconsLinks">
								<ReactLogo />
							</div>
							<div className="h-7 iconsLinks">
								<TailwindLogo />
							</div>
							<div className="h-7 iconsLinks">
								<ShadcnLogo />
							</div>
						</ContainerFlex>
					</div>
					<div className="justify-center items-center w-full h-[300px]">
						<CarouselItems items={project3.images} />
					</div>
				</div>
			</Project>

			<Project
				state={project4.state}
				github={project4.github}
				url={project4.url}
			>
				<div className="max-sm:px-0 py-2 w-full">
					<div className="mb-4 w-full">
						<TypographyH2
							text={project4.title}
							className="pb-2 font-extrabold text-blue-400 text-2xl"
						/>

						<TypographyP className="leading-6">
							{project4.description}
						</TypographyP>

						<ContainerFlex className="justify-start mt-4 w-full h-8">
							<div className="h-7 iconsLinks">
								<ReactLogo />
							</div>
							<div className="h-7 iconsLinks">
								<TailwindLogo />
							</div>
							<div className="h-7 iconsLinks">
								<FirebaseLogo />
							</div>
						</ContainerFlex>
					</div>
					<div className="justify-center items-center w-full h-[300px]">
						<CarouselItems items={project4.images} />
					</div>
				</div>
			</Project>

			<Project
				state={project5.state}
				github={project5.github}
				url={project5.url}
			>
				<div className="max-sm:px-0 py-2 w-full">
					<div className="mb-4 w-full">
						<TypographyH2
							text={project5.title}
							className="pb-2 font-extrabold text-blue-400 text-2xl"
						/>

						<TypographyP className="leading-6">
							{project5.description}
						</TypographyP>

						<ContainerFlex className="justify-start mt-4 w-full h-8">
							<div className="h-7 iconsLinks">
								<ReactLogo />
							</div>
							<div className="h-7 iconsLinks">
								<TailwindLogo />
							</div>
							<div className="h-7 iconsLinks">
								<ExpoLogo />
							</div>
						</ContainerFlex>
					</div>
					<div className="justify-center items-center w-full h-[300px]">
						<CarouselItems items={project5.images} />
					</div>
				</div>
			</Project>

			<Project
				state={project6.state}
				github={project6.github}
				url={project6.url}
			>
				<div className="max-sm:px-0 py-2 w-full">
					<div className="mb-4 w-full">
						<TypographyH2
							text={project6.title}
							className="pb-2 font-extrabold text-blue-400 text-2xl"
						/>

						<TypographyP className="leading-6">
							{project6.description}
						</TypographyP>

						<ContainerFlex className="justify-start mt-4 w-full h-8">
							<div className="h-7 iconsLinks">
								<ReactLogo />
							</div>
							<div className="h-7 iconsLinks">
								<TailwindLogo />
							</div>
							<div className="h-7 iconsLinks">
								<ExpoLogo />
							</div>
						</ContainerFlex>
					</div>
					<div className="justify-center items-center w-full h-[300px]">
						<CarouselItems items={project6.images} />
					</div>
				</div>
			</Project>
		</>
	);
};

export default Projects;
