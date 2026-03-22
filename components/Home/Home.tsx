import React from "react";
import Hero from "./Hero/Hero";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";
import Projects from "./Projects.tsx/Projects";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
