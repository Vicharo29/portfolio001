"use client"

import {BallCanvas} from "./canvas";

// import { technologies } from "../constants";

const technologies = [
    {
      name: "Cpp",
      icon: "/tech/cpp.png",
    },
    {
      name: "Python ",
      icon: "/tech/python.png",
    },
    {
      name: "Qt ",
      icon: "/tech/qt.png",
    },
    {
      name: "MATLAB ",
      icon: "/tech/matlab.png"
    },
    {
      name: "Inventor",
      icon: "/tech/inventor.ico",
    },
    {
      name: "HTML 5",
      icon: "/tech/html.png",
    },
    {
      name: "CSS 3",
      icon: "/tech/css.png",
    },
    {
      name: "JavaScript",
      icon: "/tech/javascript.png",
    },
    {
      name: "React JS",
      icon: "/tech/reactjs.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/tech/tailwind.png",
    },
    {
      name: "Three JS",
      icon: "/tech/threejs.svg",
    },
  ];

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
            {console.log(technology)}
        </div>
      ))}
    </div>
  )
}

export default Tech;