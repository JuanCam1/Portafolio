// appPomodoro
import pomodoro1 from "@/assets/images/pomodora/pomodoro1.webp";
import pomodoro2 from "@/assets/images/pomodora/pomodoro2.webp";
import pomodoro3 from "@/assets/images/pomodora/pomodoro3.webp";

//snapLink
import snapLink1 from "@/assets/images/snapLink/snap-link1.webp";
import snapLink2 from "@/assets/images/snapLink/snap-link2.webp";
import snapLink3 from "@/assets/images/snapLink/snap-link3.webp";
import snapLink4 from "@/assets/images/snapLink/snap-link4.webp";
import snapLink5 from "@/assets/images/snapLink/snap-link5.webp";

//projectManager
import projectManager1 from "@/assets/images/manager-project/manager-project1.webp";
import projectManager2 from "@/assets/images/manager-project/manager-project2.webp";
import projectManager3 from "@/assets/images/manager-project/manager-project3.webp";
import projectManager4 from "@/assets/images/manager-project/manager-project4.webp";
import projectManager5 from "@/assets/images/manager-project/manager-project5.webp";
import projectManager6 from "@/assets/images/manager-project/manager-project6.webp";

//imagesManager
import imagesManager1 from "@/assets/images/manager-images/manager-images1.webp";
import imagesManager2 from "@/assets/images/manager-images/manager-images2.webp";
import imagesManager3 from "@/assets/images/manager-images/manager-images3.webp";
import imagesManager4 from "@/assets/images/manager-images/manager-images4.webp";
import imagesManager5 from "@/assets/images/manager-images/manager-images5.webp";
import imagesManager6 from "@/assets/images/manager-images/manager-images6.webp";

//SearchUserGithub
import search1 from "@/assets/images/searchUserGithub/search1.webp";
import search2 from "@/assets/images/searchUserGithub/search2.webp";

//SearchUserGithubClient
import searchClient1 from "@/assets/images/usergithub-client/github-client1.webp";
import searchClient2 from "@/assets/images/usergithub-client/github-client2.webp";

export interface IProject {
	id: number;
	title: string;
	state: string;
	url?: string;
	github: string;
	description: string;
	images: string[];
}

export const dataProjects: IProject[] = [
	{
		id: 1,
		title: "CodeLaunch",
		description:
			"Una aplicación de escritorio que detecta automáticamente todos los proyectos en una carpeta específica, permitiendo visualizarlos, editar sus nombres y abrirlos fácilmente en Visual Studio Code y en la terminal.",
		images: [
			projectManager1,
			projectManager2,
			projectManager3,
			projectManager4,
			projectManager5,
			projectManager6,
		],
		state: "finalizado",
		github: "https://github.com/JuanCam1/File-Manager-Projects.git",
	},
	{
		id: 2,
		title: "ImagesDeck",
		description:
			"Aplicación de escritorio que permite visualizar,editar y eliminar imágenes de manera sencilla y rápida.",
		images: [
			imagesManager1,
			imagesManager2,
			imagesManager3,
			imagesManager4,
			imagesManager5,
			imagesManager6,
		],
		state: "finalizado",
		github: "https://github.com/JuanCam1/File-Manager-Images.git",
	},
	{
		id: 3,
		title: "Search User Github",
		description:
			"Aplicación para la busqueda de la información de la cuenta de github con el nombre de usuario.",
		images: [
			searchClient1,
			searchClient2,
		],
		state: "finalizado",
		github: "https://github.com/JuanCam1/File-Manager-Images.git",
	},
	{
		id: 4,
		title: "SnapLink",
		description:
			"Acortador de enlaces: transforma y comparte tus enlaces de forma rápida, sencilla y eficiente, facilitando su uso y difusión en cualquier plataforma.",
		images: [snapLink1, snapLink2, snapLink3, snapLink4, snapLink5],
		state: "finalizado",
		github: "https://github.com/JuanCam1/SnapLink-Client.git",
	},
	{
		id: 5,
		title: "Pomodoro App",
		description:
			"Aplicación diseñada para gestionar y organizar eficientemente el tiempo dedicado a cada tarea, ayudándote a optimizar tu productividad y mantener el control de tus actividades diarias.",
		images: [pomodoro1, pomodoro2, pomodoro3],
		state: "finalizado",
		github: "https://github.com/JuanCam1/appPomodoroReactNative.git",
	},
	{
		id: 6,
		title: "Search User Github",
		description:
			"Aplicación para la busqueda de la información de la cuenta de github con el nombre de usuario.",
		images: [search1, search2],
		state: "finalizado",
		github: "https://github.com/JuanCam1/SnapLink-Client.git",
	},
];
