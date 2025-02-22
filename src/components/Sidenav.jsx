import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <AiOutlineMenu
        size={30}
        fill="text-gray-800"
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden"
      />

      {/* Mobile Menu */}
      {nav && (
        <div className="fixed w-full min-h-screen bg-white flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            onClick={closeNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#projects"
            onClick={closeNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#resume"
            onClick={closeNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <IoIosContact size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#contact"
            onClick={closeNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaEnvelope size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      )}

      {/* Desktop Side Navigation */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <IoIosContact size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
