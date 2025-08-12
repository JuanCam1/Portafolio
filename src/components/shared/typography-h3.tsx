import type { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	text: string;
}
const TypographyH3: FC<Props> = ({ className, text }) => {
	return (
		<h3 className={cn("font-semibold tracking-tight ", className)}>{text}</h3>
	);
};
export default TypographyH3;
