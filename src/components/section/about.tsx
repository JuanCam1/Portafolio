import { Link } from "react-router-dom";
import { GithubLogo } from "../icons/github-logo";
import TypographyH1 from "../shared/typography-h1";
import TypographyH2 from "../shared/typography-h2";
import TypographyP from "../shared/typography-p";
import ContainerFlex from "../shared/container-flex";
import { dataUrl } from "../../data/dataUrl";
import LinkedInLogo from "../icons/linkedin-logo";
import { Download } from 'lucide-react';
import documentPdf from "@/assets/documents/CV Juan Camilo Rojas Diaz.pdf"

export const About = () => {
  return (
    <article className="flex flex-col gap-2">
      <TypographyH1 className="text-blue-500 text-center tracking-tight" text="Juan Camilo Rojas" />

      <TypographyH2 className="text-blue-300 text-center" text="⭐ ¡Desarrollador Fronted! ⭐" />

      <TypographyP className="mt-6 text-balance text-center">
        Me destaco por mi habilidad para adaptarme rápidamente a nuevos entornos
        y desafíos. Soy un aprendiz ágil y los retos no me intimidan, sino que
        los considero oportunidades para crecer. Mi naturaleza proactiva y
        creativa me impulsa a buscar soluciones innovadoras en equipo,
        aprovechando mis habilidades de comunicación y colaboración.
        Constantemente me mantengo al tanto de las últimas tecnologías y estoy
        siempre receptivo a aprender de los demás.😁
      </TypographyP>

      <ContainerFlex>
        <Link
          to={dataUrl.github}
          target="_blank"
          className="iconsLinks"
        >
          <GithubLogo className="size-7" />
        </Link>
        <Link
          to={dataUrl.linkedin}
          target="_blank"
          className="iconsLinks"
        >
          <LinkedInLogo className="size-7" />
        </Link>
        <a
          href={documentPdf}
          target="_blank"
          rel="noreferrer"
          download="CV Juan Camilo Rojas Diaz.pdf"
          className="flex justify-center items-center gap-2 border-[0.5px] dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 ml-2 px-2 py-1 border-blue-500 rounded-md text-black dark:text-white transform transition duration-300 ease-in-out group hover:scale-105"
        >
          <span className="font-semibold text-blue-600 text-sm">CV</span>
          <Download className="h-5 text-blue-600 transform transition-transform group-hover:translate-x-1 duration-300 ease-in-out" />
        </a>
      </ContainerFlex>
    </article>
  );
};
