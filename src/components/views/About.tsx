import { Link } from "react-router-dom";
import { GithubLogo } from "../Icons/GithubLogo";
import { LinkedinLogo } from "../Icons/LinkedinLogo";
import { dataUrl } from "../../data/dataUrl";

export const About = () => {
	return (
		<article className="flex flex-col gap-2">
			<span className="font-extrabold tracking-tight text-3xl pb-2 text-blue-500 text-center">
				{" "}
				Juan Camilo Rojas
			</span>
			<p className="text-center text-2xl mb-2 text-blue-400 dark:text-blue-200 text-bold">
				⭐ ¡Desarrollador Fronted! ⭐
			</p>
			<p className="text-justify leading-relaxed">
				Me destaco por mi habilidad para adaptarme rápidamente a nuevos entornos
				y desafíos. Soy un aprendiz ágil y los retos no me intimidan, sino que
				los considero oportunidades para crecer. Mi naturaleza proactiva y
				creativa me impulsa a buscar soluciones innovadoras en equipo,
				aprovechando mis habilidades de comunicación y colaboración.
				Constantemente me mantengo al tanto de las últimas tecnologías y estoy
				siempre receptivo a aprender de los demás.😁
			</p>

			<div className="flex gap-2">
				<Link
					to={dataUrl.github}
					target="_blank"
					className="size-10 transition cursor-pointer hover:bg-blue-200 hover:dark:bg-gray-700/70 flex justify-center items-center rounded-sm"
				>
					<GithubLogo />
				</Link>
				<Link
					to={dataUrl.linkedin}
					target="_blank"
					className="size-10 transition cursor-pointer hover:bg-blue-200 hover:dark:bg-gray-700/70 flex justify-center items-center rounded-sm"
				>
					<LinkedinLogo />
				</Link>
			</div>
		</article>
	);
};
