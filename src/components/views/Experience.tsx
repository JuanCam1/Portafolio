import { dataExperience } from "../../data/dataExperience";
import Layout from "../Layout";
import ExperienceUnique from "./ExperienceUnique";

export const Experience = () => {
	return (
		<Layout>
			<ol className="relative border-gray-300 border-s dark:border-gray-700">
				{dataExperience.map((experience, index) => (
					<li className="mb-10 ms-4" key={index}>
						<div className="absolute border-white dark:border-gray-900 bg-blue-600 dark:bg-blue-300 mt-1.5 border rounded-full w-3 h-3 -start-1.5"></div>
						<ExperienceUnique
							date={experience.date}
							title={experience.title}
							description={experience.description}
						/>
					</li>
				))}
			</ol>
		</Layout>
	);
};
