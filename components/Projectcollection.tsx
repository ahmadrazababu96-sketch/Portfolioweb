
"use client";
import React, { useState } from 'react'
import { SquareArrowOutUpRight,Code } from 'lucide-react';
const projectData=[
    {
                id: 1,
                image: "/images/pimg1.png",
                tittle: "Nexus Analytics",
                category:"frontend",
                desc: "A real-time data visualization platform for SaaS companies built with React.",
                btn1:"React",
                btn2:"D3.js",
                btn3:"Tailwind",
                demo:<SquareArrowOutUpRight  size={18}/>,
            },
            {
                id: 2,
                image: "/images/pimg2.png",
                tittle: "DevSocial",
                category:"frontend",
                desc: "Connecting developers through collaborative coding challenges and peer reviews.",
                btn1:"Next.js",
                btn2:"Firebase",
                btn3:"Typescript", 
                color:"#4648D4",
                demo:<SquareArrowOutUpRight size={18} />,
            },
            {
                id: 3,
                image: "/images/pimg3.png",
                tittle: "VaultOS",
                category:"backend",
                desc: "Secure, decentralized asset management system with multi-chain support.",
                btn1:"Node.js",
                btn2:"PostgreSQL",
                btn3:"Docker",
                demo:<SquareArrowOutUpRight size={18} />,
            },
                        {
                id: 4,
                image: "/images/pimg3.png",
                tittle: "VaultOS",
                category:"backend",
                desc: "Secure, decentralized asset management system with multi-chain support.",
                btn1:"Vue.js",
                btn2:"OpenWeatherAPI",
                btn3:"Chart.js",
                demo:<SquareArrowOutUpRight size={18} />,
            },
                        {
                id: 5,
                image: "/images/pimg3.png",
                tittle: "VaultOS",
                category:"fullstack",
                desc: "Secure, decentralized asset management system with multi-chain support.",
                btn1:"React",
                btn2:"Prisma",
                btn3:"graphQL",
                demo:<SquareArrowOutUpRight size={18} />,
            },
                        {
                id: 6,
                image: "/images/pimg3.png",
                tittle: "VaultOS",
                category:"fullstack",
                desc: "Secure, decentralized asset management system with multi-chain support.",
                btn1:"Live",
                btn2:"Github",
                demo:<SquareArrowOutUpRight  size={18}/>,
            },
]
const Projectcollection = () => {
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
    <div className='max-w-6xl mx-auto md:px-6 lg:px-8 py-16'>
                  <div className='flex items-center justify-center text-center flex-col'>
              <h1 className='text-4xl text-black font-bold'>My Work</h1>
              <p className='text-gray-800  text-center mt-4 max-w-xl'>
                A collection of projects I've built, ranging from frontend experiments to full-stack applications.
              </p>
                   </div>
           {/* buttons */}
                      <div className='flex flex-wrap justify-center gap-4 mb-12 pt-10 '>
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
           {/* cards */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
                             {filterprojects.map((item) => (
                               <div
                                   key={item.id}
                                   className="bg-white shadow-md rounded-2xl   
           hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] 
           transition-all duration-300 ease-out  "
                               >
                                   <img
                                       src={item.image}
                                       alt={item.tittle}
                                       className="w-full h-48 object-cover  rounded-2xl"
                                   />
                                   <h2 className="text-lg font-semibold text-black p-3  ">{item.tittle}</h2>
                                   <p className="text-gray-500 text-sm p-2">{item.desc}</p>
           <div className='flex gap-3 p-2 '> 
                <button className="border border-gray-300 px-4 py-2 rounded-full  text-sm bg-[#FFFFFF] text-black
                cursor-pointer hover:bg-[#F080C0]">
               {item.btn1}
             </button>
               <button className="border border-[#CABECE] px-4 py-2 bg-[#FFFFFF] text-black font-light rounded-full text-sm
               cursor-pointer hover:bg-[#F080C0]">
               {item.btn2}
             </button>
              <button className="border border-[#CABECE] px-4 py-2 bg-[#FFFFFF] text-black font-light rounded-full text-sm
              cursor-pointer hover:bg-[#F080C0]">
               {item.btn3}
             </button>
             </div>
             <div className='flex  justify-between items-center p-4 '>
                  <p className='text-[#64A5F0] flex items-center gap-2 cursor-pointer'>Live Demo <span>{item.demo}</span></p>
                  <p className='flex text-[#64A5F0] cursor-pointer'>  <Code size={18} /></p>
             </div>
            
           
                               </div>
                           ))}
                         </div>


           


    </div>
    
    </>
  )
}

export default Projectcollection

