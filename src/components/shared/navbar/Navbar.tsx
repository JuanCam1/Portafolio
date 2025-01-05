import { Link } from "react-router-dom";
import { Logo } from "../../Icons/Logo";
import { Switch } from "../switch/Switch";

export const Navbar = () => {
	return (
		<header className="flex justify-between border-cecece dark:border-gray-500 bg-white dark:bg-[#16191D] px-4 py-2 border-b border-solid h-[4.3rem]">
			<div className="w-[40px] h-[40px]">
				<Link
					to="/"
					className="bg-red text-white dark:text-black cursor-default"
				>
					<Logo />
				</Link>
			</div>
			<Switch />
		</header>
	);
};
