"use client";
import React from "react";
import { FaJava, FaPython } from "react-icons/fa";
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "CSS",
    icon: <SiCss />,
  },
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "SQL",
    icon: <SiSequelize />,
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="text-white pt-20 pb-16 scroll-smooth scroll-mt-20 sm:scroll-mt-28"
    >
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skill Set</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill) => {
          return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
              <div className="bg-[14134145] text-center w-50 h-60 rounded-3xp flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                <p className="text-purple-400 mt-1">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
