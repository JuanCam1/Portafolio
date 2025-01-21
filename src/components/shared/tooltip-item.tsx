import type { FC, ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import TypographyP from "./typography-p";

interface Props {
  text: string;
  children: ReactNode;
}
const TooltipItem: FC<Props> = ({ text, children }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="h-5 iconsLinks">
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <TypographyP className="text-sm">{text}</TypographyP>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
export default TooltipItem;