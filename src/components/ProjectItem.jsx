import React from 'react'

const ProjectItem = ({img, title, link}) => {
  return (
    
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-400 to-[var(--primary-color)] hover:scale-110 ease-in duration-200'>
        <img className='sm:w-108 sm:h-56 object-fit rounded-xl group-hover:opacity-10' src={img} alt="/" />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-xl m-2 font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <a href={link}>
                <p className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm hover:scale-110 ease-in duration-200'>More Info</p>
            </a>
        </div>
    </div>
    
    
  )
}

export default ProjectItem