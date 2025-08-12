import Option from "./option";
import { Outlet, useLocation } from "react-router-dom";
import { paths } from "@/routes/paths";

const Options = () => {
	const { pathname } = useLocation();
	return (
		<article>
			<ul className="flex flex-wrap justify-between mb-6 font-medium text-center text-gray-500 text-sm dark:text-gray-400">
				{paths.map(({ id, path, text }) => (
					<Option key={id} pathname={pathname} path={path} text={text} />
				))}
			</ul>
			<Outlet />
		</article>
	);
};
export default Options;
