import logoReact from "../assets/Icons/react-logo.svg";
import logHTML from "../assets/Icons/html-logo.svg";
import logoExpo from "../assets/Icons/expo.svg";
// import logoNode from "../assets/Icons/node-logo.svg";
import logoMysql from "../assets/Icons/mysql.svg";
import logoNest from "../assets/Icons/nestjs.svg";
import logoTailwind from "../assets/Icons/tailwindcss.svg";
import logoTs from "../assets/Icons/typescript.svg";

// appPomodoro
import pomodoro1 from "../assets/pomodora/pomodoro1.webp";
import pomodoro2 from "../assets/pomodora/pomodoro2.webp";
import pomodoro3 from "../assets/pomodora/pomodoro3.webp";

//appTask
import task1 from "../assets/appTask/task1.webp";
import task2 from "../assets/appTask/task2.webp";
import task3 from "../assets/appTask/task3.webp";
import task4 from "../assets/appTask/task4.webp";
import task5 from "../assets/appTask/task5.webp";
import task6 from "../assets/appTask/task6.webp";

//SearchUserGithub
import search1 from "../assets/searchUserGithub/search1.webp";
import search2 from "../assets/searchUserGithub/search2.webp";

export interface IProject {
	id: number;
	title: string;
	state: string;
	description: string;
	tecnologies: string[];
	images: string[];
}

export const dataProjects: IProject[] = [
	{
		id: 1,
		title: "Pomodoro App",
		description:
			"Aplicación para la gestión y organización del tiempo que dedicamos a cada tarea.",
		tecnologies: [logoReact, logoTs, logoExpo, logoTailwind],
		images: [pomodoro1, pomodoro2, pomodoro3],
		state: "finalizado",
	},
	{
		id: 2,
		title: "AppTask",
		description:
			"Aplicación para la gestión de proyectos y tareas, con autenticación al inicio de sesión y graficas.",
		tecnologies: [logoReact, logoTailwind, logoTs, logoNest, logoMysql],
		images: [task1, task2, task3, task4, task5, task6],
		state: "finalizado",
	},
	{
		id: 3,
		title: "Pomodoro App",
		description:
			"Aplicación para la busqueda de la información de la cuenta de github con el nombre de usuario.",
		tecnologies: [logoReact, logoTs],
		images: [search1, search2],
		state: "finalizado",
	},
	{
		id: 4,
		title: "Pomodoro App",
		description:
			"Aplicación para la gestión y organización del tiempo que dedicamos a cada tarea.",
		tecnologies: [logHTML],
		images: [pomodoro1, pomodoro2, pomodoro3],
		state: "finalizado",
	},
];
