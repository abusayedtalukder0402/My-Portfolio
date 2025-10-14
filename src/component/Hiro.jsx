import React from "react";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";


const Hiro = () => {
  return (
    <section className="min-h-screen bg-[#0b0b0b]  text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-20">
      <div className="max-w-5xl w-full 
         p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg " >
      {/* Left Side: Text */}
      <div className="flex-1 text-center md:text-left mt-10 md:mt-0" data-aos="fade-right">
        <p className="text-[#BF092F] text-sm md:text-base mb-2">
          Hello World, I'm
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">
          ABU SAYED
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold  mb-4 text-[#BF092F]">
          Web Developer
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Welcome to my personal website. 👋
        </p> <br />
        <ul className="flex space-x-10 text-4xl text-[#BF092F] ">
          <li className="hover:scale-110"><Link to="https://github.com/abusayedtalukder0402"><FaGithub /></Link></li>
          <li className="hover:scale-110"><Link  to="https://www.upwork.com/freelancers/~01dc15f78f2fee15c9"><FaSquareUpwork /></Link></li>
          <li className="hover:scale-110"><Link  to="https://www.linkedin.com/in/md-abu-sayed-486ab2367/"><IoLogoLinkedin /></Link></li>
          <li className="hover:scale-110"><Link  to="https://www.facebook.com/share/1BXmwGDeCh/"><FaFacebookSquare /></Link></li>
        </ul>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#BF092F] blur-3xl opacity-30 animate-pulse"></div>
          <img
            src="/src/img/20251012_221615.png" 
            alt="Profile"
            className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#BF092F] shadow-[0_0_60px_rgba(234,179,8,0.4)]"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hiro;
