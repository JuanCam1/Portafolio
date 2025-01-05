import { Logo } from "../../Icons/Logo";
import { Switch } from "../switch/Switch";

export const Navbar = () => {
	return (
		<header className="dark:bg-[#16191D] bg-white h-[4.3rem] flex justify-between px-4 py-2 border-b border-solid border-cecece dark:border-gray-500">
			<div className="w-[40px] h-[40px]">
				<a
					href="#"
					className="cursor-default bg-red text-white dark:text-black"
				>
					<Logo />
				</a>
			</div>
			<Switch />
		</header>
	);
};
