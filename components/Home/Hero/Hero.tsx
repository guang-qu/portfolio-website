"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

function Hero() {
  return (
    <div className="relative h-screen flex justify-center items-center text-white overflow-hidden flex-col">
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
          Delivering quality solutions to your
          <br /><span className="text-cyan-300">biggest challenges</span>
        </h1>
        <h2 data-aos="fade-up" data-aos-delay="400" className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          Hi! I&apos;m Guang, a
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "non-traditional Software Engineer.",
                  "Problem Solver.",
                  "Web Developer.",
                  "Gamer.",
                  "Gym Bro.",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button data-aos="fade-up" data-aos-delay="600" className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
          <span>See my work!</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
