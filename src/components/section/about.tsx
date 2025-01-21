import { Link } from "react-router-dom";
import { GithubLogo } from "../icons/github-logo";
import { LinkedinLogo } from "../icons/linkedin-logo";
import TypographyH1 from "../shared/typography-h1";
import TypographyH2 from "../shared/typography-h2";
import TypographyP from "../shared/typography-p";
import ContainerFlex from "../shared/container-flex";
import { dataUrl } from "../../data/dataUrl";

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
          <GithubLogo />
        </Link>
        <Link
          to={dataUrl.linkedin}
          target="_blank"
          className="iconsLinks"
        >
          <LinkedinLogo />
        </Link>
      </ContainerFlex>
    </article>
  );
};
