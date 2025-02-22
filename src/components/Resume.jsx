import React from 'react'

const Resume = () => {
  return (
    <div id="resume" className="m-auto md:pl-20 md:pr-20 py-20 bg-[var(--primary-color)]">
        <h1 className="text-4xl p-4 font-bold text-center text-gray-200">Resume</h1>

        {/* View PDF Button */}
        <div className="flex justify-center mt-4">
            <a href="/anilsen-portfolio/assets/CV.pdf">
            <p className="w-32 text-center p-2 rounded-lg bg-gray-200 text-[#3b3c45] font-bold cursor-pointer text-sm">
                View PDF
            </p>
            </a>
        </div>
    </div>
    
    

  )
}

export default Resume