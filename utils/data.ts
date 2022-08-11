import { Vector3 } from "@react-three/fiber";

export type Hobby = {
    state: number;
    position?: Vector3;
    title: string;
    des: string;
  };
 export const myHobby = [
    {
      state: 0,
      position: [10, 0, 18] as Vector3,
      title: "Go Red Devils",
      des: `I'm a huge Manchester United fan. I spent most of my time
    watching the game at 3am. Downside of being an Asian football
    fan.`,
    },
    {
      state: 1,
      title: "PC Master Race",
      des: `Gaming has always been my interest as a child, It is also what led me to love technology. FPS games are my favorite some them are Valorant, Apex, CS 1.6, I'm also down to play other games as well.`,
    },
    {
      state: 2,
  
      title: "Playlist On the Way",
      des: `Music is my haven, The headphones come on, and everything else in the world goes silent. Linkin Park     and Daft Punk were my favorites, right now The Weekend is my go-to. I'm not restricted by a particular genre of music. `,
    },
  ];



  type projectItem = {
    image: string;
    title: string;
    subtitle: string;
    type: string;
    speed: string;
    width: string;
    height: string;
    link: string;
  };
  
  export const projectItems: projectItem[] = [
    {
      image: "/static/Invoicely.png",
      title: "Invoicely",
      subtitle: "a professional web app for Invoices",
      type: "logic, implementation, webapp, ux",
      speed: "-2",
      width: "600",
      height: "600",
      link: "https://github.com/niranjraj/invoice-app",
    },
    {
      image: "/static/supplyco4.png",
      title: "SupplycoKerala",
      subtitle: "an online platform for government supply",
      type: "design, logic, implementation, website, ui/ux",
      speed: "-2",
      width: "600",
      height: "600",
      link: "https://github.com/niranjraj/Supplyco-web-app",
    },
    {
      image:"/static/machinelearning.png",
      title: "Diabetes Prediction",
      subtitle: "diagnosis of diabetes through machine learning",
      type: "logic, implementation, report",
      speed: "-2",
      width: "800",
      height: "800",
      link: "https://github.com/niranjraj/Seminar",
    },
    {
      image: "/static/itiha.png",
      title: "Itiha",
      subtitle: "configuration of arch.",
      type: "logic, implementation, website",
      speed: "-2",
      width: "800",
      height: "800",
      link: "https://github.com/niranjraj/Itiha2022",
    },
    {
      image:"/static/arch1.png",
      title: "Arch",
      subtitle: "configuration of arch.",
      type: "design, experiment, config",
      speed: "-2",
      width: "800",
      height: "800",
      link: "https://github.com/niranjraj/Dotfiles",
    },
  ];