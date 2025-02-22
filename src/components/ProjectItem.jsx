import React, { useState } from 'react';

const ProjectItem = ({ img, title, link }) => {
  const [isMobileActive, setIsMobileActive] = useState(false);

  const handleClick = () => {
    setIsMobileActive(!isMobileActive);
  };

  return (
    <div 
      className={`relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl 
        group hover:bg-gradient-to-r from-gray-400 to-[var(--primary-color)] hover:scale-110 ease-in duration-200 
        ${isMobileActive ? "bg-[#3b3c45] text-gray-200 scale-110" : ""}`}
      onClick={handleClick} // Toggle on click for mobile
    >
      {/* Image with opacity change on hover or mobile click */}
      <img className={`sm:w-108 sm:h-56 object-cover rounded-xl 
        ${isMobileActive ? "opacity-10" : "group-hover:opacity-10"}`}
        src={img} alt="/" 
      />
      
      {/* Text & Button, visible on hover (desktop) or click (mobile) */}
      <div 
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
          ${isMobileActive ? "block text-gray-200" : "hidden group-hover:block"}`}
      >
        <h3 className='text-xl m-2 font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <a href={link}>
          <p className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm'>
            More Info
          </p>
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
