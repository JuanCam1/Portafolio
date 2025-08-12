import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import logoProfile from "@/assets/images/perfiImagen.webp";
import TypographyH3 from "@/components/shared/typography-h3";
import type { FC, ReactNode } from "react";
import { GithubLogo } from "@/components/icons/github-logo";
import { Link } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";
interface Props {
  state: string;
  github: string;
  url?: string;
  children: ReactNode;
}

export const Project: FC<Props> = ({ state, github, url, children }) => {
  return (
    <section className="flex flex-col bg-white  dark:bg-zinc-900 shadow-md mb-4 p-8 rounded-md overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Avatar className="size-12">
            <AvatarImage src={logoProfile} />
            <AvatarFallback>Perfil</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <TypographyH3 text="Juan " className="ml-1" />
            <Badge
              className={cn(
                "capitalize font-medium text-[10px] rounded-sm ",
                state === "pendiente"
                  ? "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-300 hover:bg-red-400 dark:hover:bg-red-800 dark:hover:text-red-300"
                  : "bg-indigo-200 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 hover:bg-indigo-400 dark:hover:bg-indigo-800 dark:hover:text-indigo-300"
              )}
            >
              {state}
            </Badge>
          </div>
        </div>
        <div className="flex">
          {url && (
            <Link to={url} target="_blank" className="iconsLinks">
              <LinkIcon />
            </Link>
          )}
          <Link to={github} target="_blank" className="iconsLinks">
            <GithubLogo />
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
};
