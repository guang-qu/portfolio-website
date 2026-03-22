import React from "react";
import { BiMap } from "react-icons/bi";
import { GrGithub } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      {/**Contact Me Left Side Info */}
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Contact Me
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            You can reach me using this form! I will respond as promptly as
            possible.
          </p>
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">United States</p>
            </div>
          </div>

          {/*Outside links */}
          <div className="flex items-center mt-8 space-x-3">
            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
              <a href="https://www.linkedin.com/in/guang-qu/" target="_blank">
                <LiaLinkedin className="text-white w-10 h-10 " />
              </a>
            </div>
            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
              <a href="https://github.com/guang-qu" target="_blank">
                <GrGithub className="text-white w-10 h-10 " />
              </a>
            </div>
          </div>
        </div>

        {/*Contact Form*/}
        <div className="md:p-10 p-5 bg-[#131332] rounded-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          ></input>
          <input
            type="email"
            placeholder="example@email.com"
            className="mt-6 px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          ></input>
          <textarea
            placeholder="Write your message here"
            className="mt-6 px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-40"
          ></textarea>
          <button className="mt-6 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
