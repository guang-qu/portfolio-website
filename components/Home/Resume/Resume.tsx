import React from "react";
import WorkCard from "./WorkCard";
import EducationCard from "./EducationCard";
import { MdLocalHospital } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { SiBookstack } from "react-icons/si";

const Resume = () => {
  return (
    <div id="resume" className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto block">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Work Experience</span>
          </h1>
          <div className="mt-10">
            <WorkCard
              Icon={MdLocalHospital}
              role="Kondor Primary Care PLLC - Office Manager"
              date="Oct 2025 - Present"
              desc=""
            />
            <WorkCard
              Icon={MdLocalHospital}
              role="Reunion Medical Services PLLC - Office Manager"
              date="Feb 2020 - Oct 2025"
              desc=""
            />
            <WorkCard
              Icon={MdLocalHospital}
              role="Reunion Medical Services PLLC - Medical Assistant"
              date="Apr 2016 - Feb 2020"
              desc=""
            />
            <WorkCard
              Icon={MdLocalHospital}
              role="Reunion Medical Services PLLC - Receptionist"
              date="Nov 2015 - Mar 2016"
              desc=""
            />
            <WorkCard
              Icon={SiBookstack}
              role="Kuei Luck Enrichment Center - Teacher's Assistant/Tutor"
              date="June 2014 - Nov 2015"
              desc=""
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
              desc=""
            />
            <EducationCard
              Icon={HiAcademicCap}
              role="CUNY Hunter College - Bachelor in Biology"
              date="June 2019"
              desc=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
