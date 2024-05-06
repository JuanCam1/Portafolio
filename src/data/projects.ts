import logoReact from "../assets/Icons/react-logo.svg";
import logHTML from "../assets/Icons/html-logo.svg";
import logoNode from "../assets/Icons/node-logo.svg";

// pomodoro
import pomodoro1 from "../assets/pomodora/pomodoro1.png";
import pomodoro2 from "../assets/pomodora/pomodoro2.png";
import pomodoro3 from "../assets/pomodora/pomodoro3.png";

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
    description: "Aplicación para la gestión y organización del tiempo que dedicamos a cada tarea. Desarrollada en React Native y TypeScript.",
    tecnologies: [logoReact],
    images: [pomodoro1, pomodoro2, pomodoro3],
    state: "finalizado"
  },
  {
    id: 2,
    title: "Pomodoro App",
    description: "Aplicación para la gestión y organización del tiempo que dedicamos a cada tarea. Desarrollada en React Native y TypeScript.",
    tecnologies: [logoReact, logHTML, logoNode],
    images: [pomodoro1, pomodoro2, pomodoro3],
    state: "finalizado"
  },
  {
    id: 3,
    title: "Pomodoro App",
    description: "Aplicación para la gestión y organización del tiempo que dedicamos a cada tarea. Desarrollada en React Native y TypeScript.",
    tecnologies: [logoNode],
    images: [pomodoro1, pomodoro2, pomodoro3],
    state: "pendiente"
  },
  {
    id: 4,
    title: "Pomodoro App",
    description: "Aplicación para la gestión y organización del tiempo que dedicamos a cada tarea. Desarrollada en React Native y TypeScript.",
    tecnologies: [logHTML],
    images: [pomodoro1, pomodoro2, pomodoro3],
    state: "finalizado"
  }
];
