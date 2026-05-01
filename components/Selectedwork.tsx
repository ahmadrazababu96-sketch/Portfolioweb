"use client"

import React from 'react'
import { useState } from 'react';
import { SquareArrowOutUpRight,Code } from 'lucide-react';
const projectData=[
    {
                id: 1,
                image: "/images/pimg1.png",
                tittle: "Nexus Analytics",
                category:"frontend",
                desc: "A real-time data visualization platform for SaaS companies built with React.",
                buttons:["React","TypeScript","D3.js"],
                demo:<SquareArrowOutUpRight  size={18}/>,
            },
            {
                id: 2,
                image: "/images/pimg2.png",
                tittle: "Aura Commerce",
                category:"frontend",
                desc: "Full-stack headeless commerce solution with integrated Stripe payments and dynamic inventory management.",
                buttons:["React","TypeScript","D3.js"], 
                color:"#4648D4",
                demo:<SquareArrowOutUpRight size={18} />,
            },
            {
                id: 3,
                image: "/images/pimg3.png",
                tittle: "Streamline Engine",
                category:"backend",
                desc: "High-performance distributed task scheduler designed for ultra-low latency messaging systems.",
                buttons:["React","TypeScript","D3.js"],
                demo:<SquareArrowOutUpRight size={18} />,
            },
                        {
                id: 4,
                image: "/images/pimg3.png",
                tittle: "Prism Designer",
                category:"backend",
                desc: "Browser-based graphic design tool with GPU-accelerated rendering and collaborative live-editing features.",
               buttons:["React","TypeScript","D3.js"],
                demo:<SquareArrowOutUpRight size={18} />,
            },
                       
]
const Selectedwork = () => {
     const [activeCategory,setactiveCategory]=useState("all");
        const categories=[
            {
                id:"all",
                label:"All",
                color:"#4648D4",
            },
            {
                id:"frontend",
                label:"Frontend",
                color:"#4648D4",
            },
            {
                id:"backend",
                label:"Backend",
                color:"#4648D4",
            },
            {
                id:"fullstack",
                label:"Fullstack",
                color:"#4648D4",
            }
        ]
        const filterprojects=activeCategory==="all"?
        projectData
        :
        projectData.filter(project=>project.category===activeCategory);
  return (
    <>
    
    <div className=' py-10 '>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className='text-3xl md:text-4xl text-black font-bold mb-4'>
          Selected Works
        </h1>
        <p className='text-gray-800 leading-relaxed'>
          A collection of digital experiences crafted with technical precision and creative exploration.
        </p>

         <div className="flex flex-wrap    gap-4 mb-12 pt-10 max-w-4xl mx-auto ">
                  {categories.map((category)=>(
                      <button className={`px-6 py-2 rounded-full font-medium transition-all duration-300 
                             hover:cursor-pointer
                    ${activeCategory === category.id 
                      ? 'text-white shadow-lg' 
                      : ' text-gray-600 hover:bg-gray-600'
                    }`}
                      style={{
                    backgroundColor: activeCategory === category.id ? category.color : 'transparent',
                    border: `2px solid ${category.color}`
                  }}
                      key={category.id}
                      onClick={()=>setactiveCategory(category.id)}>
                        {category.label}
                      </button>
                  ))}
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0 max-w-5xl mx-auto ">
                                   {filterprojects.map((item) => (
                                     <div
  key={item.id}
  className="bg-white shadow-md rounded-2xl   
  hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] 
  transition-all duration-300 ease-out"
>

  <img
    src={item.image}
    alt={item.tittle}
    className="w-full h-48 object-cover rounded-2xl"
  />

  
  <div className="flex flex-wrap gap-2 pt-4">
      {item.buttons.map((btn, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-gray-200 text-[#6466DB] hover:bg-[#F080C0] hover:text-black font-light rounded-full text-sm
          cursor-pointer"
        >
          {btn}
        </span>
      ))}
    </div>

  {/* Title */}
  <h2 className="text-lg font-semibold text-black px-3">
    {item.tittle}
  </h2>

  {/* Description */}
  <p className="text-gray-500 text-sm px-3 pb-2">
    {item.desc}
  </p>

  {/* Bottom section */}
  <div className='flex gap-4 items-center p-4'>
    <p className='text-[#64A5F0] flex items-center gap-2 cursor-pointer'>
      Live Demo <span>{item.demo}</span>
    </p>

    <p className='flex text-[#64A5F0] cursor-pointer'>
      <Code size={18} />
    </p>

    <p className='flex text-black cursor-pointer'>
      Github
    </p>
  </div>

</div>
                                 ))}
                               </div>
      </div>
      
                
                            
    </div>
    
    </>
  )
}

export default Selectedwork
