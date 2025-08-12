import type { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	children: ReactNode;
}
const ContainerFlex: FC<Props> = ({ className, children }) => {
	return (
		<div className={cn("flex justify-center items-center w-full", className)}>
			{children}
		</div>
	);
};
export default ContainerFlex;
