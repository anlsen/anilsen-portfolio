import React from 'react'
import { IoMdMail } from "react-icons/io";
const Contact = () => {
  return (
    <div id="contact" className="mt-12 text-center py-20">
        <h2 className="text-3xl font-bold text-[var(--primary-color)]">Contact</h2>
        <p className="visible text-[#3b3c45] mt-2">Feel free to reach out!</p>
        
        <div className="flex justify-center mt-4">
        <a href="mailto:anilsen@gmail.">
            <IoMdMail className='cursor-pointer hover:scale-110 ease-in duration-200' fill='var(--primary-color)' size={40}/>
        </a>
        </div>
  </div>
  )
}

export default Contact