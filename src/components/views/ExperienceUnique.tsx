import type { FC } from "react";

interface Props {
	date: string;
	title: string;
	description: string;
}

const ExperienceUnique: FC<Props> = ({ date, title, description }) => {
	return (
		<>
			<time className="mb-1 font-normal text-gray-500 text-sm dark:text-gray-400 leading-none">
				{date}
			</time>
			<h3 className="font-semibold text-blue-600 text-lg dark:text-blue-400">
				{title}
			</h3>
			<p className="mb-4 font-normal text-base text-gray-600 dark:text-gray-300">
				{description}
			</p>
		</>
	);
};
export default ExperienceUnique;
