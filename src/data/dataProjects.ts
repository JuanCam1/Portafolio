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


//SearchUserGithub
import search1 from "@/assets/images/searchUserGithub/search1.webp";
import search2 from "@/assets/images/searchUserGithub/search2.webp";

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
    title: "SnapLink",
    description:
      "Acortador de enlaces: transforma y comparte tus enlaces de forma rápida, sencilla y eficiente, facilitando su uso y difusión en cualquier plataforma.",
    images: [snapLink1, snapLink2, snapLink3, snapLink4, snapLink5],
    state: "finalizado",
    url: "https://snaplink-eight.vercel.app/",
    github: "https://github.com/JuanCam1/SnapLink-Client.git",
  },
  {
    id: 2,
    title: "Project Manager App",
    description:
      "Una aplicación de escritorio que detecta automáticamente todos los proyectos en una carpeta específica, permitiendo visualizarlos, editar sus nombres y abrirlos fácilmente en Visual Studio Code.",
    images: [projectManager1, projectManager2, projectManager3, projectManager4, projectManager5, projectManager6],
    state: "finalizado",
    github: "https://github.com/JuanCam1/File-Manager-Projects.git",
  },
  {
    id: 3,
    title: "Pomodoro App",
    description:
      "Aplicación diseñada para gestionar y organizar eficientemente el tiempo dedicado a cada tarea, ayudándote a optimizar tu productividad y mantener el control de tus actividades diarias.",
    images: [pomodoro1, pomodoro2, pomodoro3],
    state: "finalizado",
    github: "https://github.com/JuanCam1/appPomodoroReactNative.git",
  },
  {
    id: 4,
    title: "Search User Github",
    description:
      "Aplicación para la busqueda de la información de la cuenta de github con el nombre de usuario.",
    images: [search1, search2],
    state: "finalizado",
    github: "https://github.com/JuanCam1/SnapLink-Client.git",
  },
];
