import { Outlet, useLocation } from "react-router-dom";
import { paths } from "../../../routes/paths";
import { Option } from "./Option";

export const Options = () => {
	const { pathname } = useLocation();
	return (
		<article>
			<ul className="mb-6 flex flex-wrap justify-between text-sm font-medium text-center text-gray-500 dark:text-gray-400">
				{paths.map(({ id, path, text }) => (
					<Option key={id} pathname={pathname} path={path} text={text} />
				))}
			</ul>
			<Outlet />
		</article>
	);
};
