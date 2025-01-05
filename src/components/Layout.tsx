import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<section className="mb-4 border-[0.2px] p-4 dark:bg-[#242930] rounded-md">
			{children}
		</section>
	);
};

export default Layout;
