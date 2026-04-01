import React from "react";
import Image from "next/image";
import Link from "next/link";


const Projects = () => {
  return (
    <div id="projects" className="pt-16 pb-16 scroll-mt-20 sm:scroll-mt-28">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-cyan-300">
        Technical Projects
      </h1>
      <div className="w-[70%] mx-auto grid gril-cols-1 md:grid-cols-2 gap-10 mt-16">
        <div>
          <Image
            src='/images/HomePage.jpeg'
            alt="Home page of portfolio website"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Modern Portfolio Website | <a href="https://github.com/guang-qu/portfolio-website" className="text-cyan-200">GitHub Link</a></h1>
          <h1 className="pt-2 font-medium text-white/80">Front-End Visuals, API Integration</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
