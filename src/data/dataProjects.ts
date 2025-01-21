// appPomodoro
import pomodoro1 from "@/assets/images/pomodora/pomodoro1.webp";
import pomodoro2 from "@/assets/images/pomodora/pomodoro2.webp";
import pomodoro3 from "@/assets/images/pomodora/pomodoro3.webp";

//appTask
import task1 from "@/assets/images/appTask/task1.webp";
import task2 from "@/assets/images/appTask/task2.webp";
import task3 from "@/assets/images/appTask/task3.webp";
import task4 from "@/assets/images/appTask/task4.webp";
import task5 from "@/assets/images/appTask/task5.webp";
import task6 from "@/assets/images/appTask/task6.webp";

//snapLink
import snapLink1 from "@/assets/images/snapLink/snap-link1.png";
import snapLink2 from "@/assets/images/snapLink/snap-link2.png";
import snapLink3 from "@/assets/images/snapLink/snap-link3.png";
import snapLink4 from "@/assets/images/snapLink/snap-link4.png";
import snapLink5 from "@/assets/images/snapLink/snap-link5.png";

//SearchUserGithub
import search1 from "@/assets/images/searchUserGithub/search1.webp";
import search2 from "@/assets/images/searchUserGithub/search2.webp";

export interface IProject {
  id: number;
  title: string;
  state: string;
  url: string;
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
    title: "Pomodoro App",
    description:
      "Aplicación diseñada para gestionar y organizar eficientemente el tiempo dedicado a cada tarea, ayudándote a optimizar tu productividad y mantener el control de tus actividades diarias.",
    images: [pomodoro1, pomodoro2, pomodoro3],
    state: "finalizado",
    url: "https://snaplink-eight.vercel.app/",
    github: "https://github.com/JuanCam1/SnapLink-Client.git",
  },
  {
    id: 3,
    title: "AppTask",
    description:
      "Aplicación para la gestión de proyectos y tareas, con autenticación al inicio de sesión y graficas.",
    images: [task1, task2, task3, task4, task5, task6],
    state: "finalizado",
    url: "https://snaplink-eight.vercel.app/",
    github: "https://github.com/JuanCam1/SnapLink-Client.git",
  },
  {
    id: 4,
    title: "Pomodoro App",
    description:
      "Aplicación para la busqueda de la información de la cuenta de github con el nombre de usuario.",
    images: [search1, search2],
    state: "finalizado",
    url: "https://snaplink-eight.vercel.app/",
    github: "https://github.com/JuanCam1/SnapLink-Client.git",
  },
];
