


import React from 'react'
import { GraduationCap,Medal } from 'lucide-react'
const Aboutcontent = () => {
   
  return (
    <>
    <div className='px-6 py-20 text-[#131B2E]'>
        <div className='max-w-6xl mx-auto  flex flex-col md:flex-row '>
          
           <div className='flex-1'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                    Experience & Evolution
                </h2>
                <p className='text-gray-400'>
                    A decade of engineering excellence across diverse industries.
                </p>
           </div>
          
           <div className='flex-1 relative pt-2 flex-col space-y-5 '>
 {/* 🔹 BLOCK 1 */}
        <div className="group relative pl-10 cursor-pointer">

          {/* circle */}
          <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-[#8182E2]
            group-hover:bg-[#8182E2] transition">
          </div>

          <p className="text-sm text-[#8182E2]">2022 - Present</p>

          <h3 className="text-lg font-bold">
            Lead Product Engineer
          </h3>

          <p className="text-gray-400 text-sm">
            Innovation Labs • San Francisco
          </p>

          <p className="text-gray-500 text-sm pt-2">
            Leading the core architecture team in rebuilding the fintech platform. Scaled system throughput by 400% and reduced frontend bundle sizes by 60% through aggressive modularization.
          </p>

        </div>
        <div className="group relative pl-10 cursor-pointer">

          {/* circle */}
          <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-[#8182E2]
            group-hover:bg-[#8182E2] transition">
          </div>

          <p className="text-sm text-[#8182E2]">2018 — 2021</p>

          <h3 className="text-lg font-bold">
            Senior Software Developer
          </h3>

          <p className="text-gray-400 text-sm">
           Nebula Cloud Systems • Remote
          </p>

          <p className="text-gray-500 text-sm pt-2">
          Designed and implemented high-availability dashboard features for enterprise cloud management. Mentored junior developers and established the company's first internal UI library.
          </p>

        </div>
        <div className="group relative pl-10 cursor-pointer">

          {/* circle */}
          <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-[#8182E2]
            group-hover:bg-[#8182E2] transition">
          </div>

          <p className="text-sm text-[#8182E2]">2015 — 2018</p>

          <h3 className="text-lg font-bold">
            Fullstack Web Developer
          </h3>

          <p className="text-gray-400 text-sm">
           Creative Digital Agency • London
          </p>

          <p className="text-gray-500 text-sm pt-2">
            Developed custom digital solutions for high-end retail brands. Specialized in pixel-perfect animations and responsive design execution using modern CSS and JS frameworks.
          </p>

        </div>
           </div>

        </div>


    </div>
 <div className="bg-[#030712] text-white mx-4 md:mx-20 flex flex-col rounded-2xl py-20 px-6 md:px-10">

  {/* Top Content */}
  <div className="max-w-2xl mx-auto mb-12 text-center md:text-left">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Academic Foundation
    </h1>

    <p className="text-gray-300 font-medium">
      Combining rigorous computer science theory with practical creative application.
    </p>
  </div>

  {/* Bottom Items */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

    <div className="flex gap-4 items-start">
      <div className="text-[#8182E2] text-xl">
        <GraduationCap />
      </div>

      <div>
        <h3 className="text-lg font-semibold">BS Computer Science</h3>
        <p className="text-gray-400 text-sm">
          University of Engineering & Technology
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="text-[#8182E2] text-xl">
        <Medal />
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Advanced Web Development
        </h3>
        <p className="text-gray-400 text-sm">
          Specialized in modern frontend & backend technologies
        </p>
      </div>
    </div>

  </div>

</div>
    </>
  )
}

export default Aboutcontent
