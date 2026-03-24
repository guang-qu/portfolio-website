import React from "react";
import WorkCard from "./WorkCard";
import EducationCard from "./EducationCard";
import { MdLocalHospital } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { SiBookstack } from "react-icons/si";

const Resume = () => {
  return (
    <div id="resume" className="pt-20 pb-16 scroll-smooth scroll-mt-20 sm:scroll-mt-28">
      <div className="w-[90%] sm:w-[70%] mx-auto block">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Work Experience</span>
          </h1>
          <div className="mt-10">
            <WorkCard
              Icon={MdLocalHospital}
              role="Kondor Primary Care PLLC - Office Manager"
              date="Aug 2024 - Present"
              desc="Scaled patient services and operational systems in a new primary care office while ensuring compliance and high-quality standards, which multiplied patient base by 3x."
            />
            <WorkCard
              Icon={MdLocalHospital}
              role="Reunion Medical Services PLLC - Office Manager"
              date="Feb 2020 - Oct 2025"
              desc="Promoted to Office Manager; spearheaded the successful attainment of national NCQA Patient-Centered Medical Home (PCMH) recognition, resulting in performance-based bonus incentives."
            />
            <WorkCard
              Icon={MdLocalHospital}
              role="Reunion Medical Services PLLC - Medical Assistant"
              date="Apr 2015 - Feb 2020"
              desc="Served diverse population of NYC to increase patient satisfaction, compliance, and health outcomes."
            />
            <WorkCard
              Icon={SiBookstack}
              role="Kuei Luck Enrichment Center - Teacher's Assistant/Tutor"
              date="June 2014 - Nov 2015"
              desc="Educated elementary students during afterschool program. Increased average test scores in Math by 20%"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div className="mt-10">
            <EducationCard
              Icon={HiAcademicCap}
              role="Fullstack Academy - Certificate in Software Engineering"
              date="March 2023"
              desc="Intensive Bootcamp Course on Progamming, Full Stack Development, DS/DA, Computer Science, Version Control"
            />
            <EducationCard
              Icon={HiAcademicCap}
              role="CUNY Hunter College - Bachelor in Biology"
              date="June 2019"
              desc="Minor in Psychology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
