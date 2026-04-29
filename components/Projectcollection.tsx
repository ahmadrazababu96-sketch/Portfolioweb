
"use client";
import React, { useState } from 'react'
const projectData=[
    {
                id: 1,
                image: "/images/pimg1.png",
                tittle: "Nexus Analytics",
                category:"frontend",
                desc: "A real-time data visualization platform for SaaS companies built with React.",
                btn1:"Live",
                btn2:"Github",
            },
            {
                id: 2,
                image: "/images/pimg2.png",
                tittle: "DevSocial",
                category:"frontend",
                desc: "Connecting developers through collaborative coding challenges and peer reviews.",
                btn1:"Live",
                btn2:"Github",
            },
            {
                id: 3,
                image: "/images/pimg3.png",
                tittle: "VaultOS",
                category:"frontend",
                desc: "Secure, decentralized asset management system with multi-chain support.",
                btn1:"Live",
                btn2:"Github",
            },
                        {
                id: 4,
                image: "/images/pimg3.png",
                tittle: "VaultOS",
                category:"frontend",
                desc: "Secure, decentralized asset management system with multi-chain support.",
                btn1:"Live",
                btn2:"Github",
            },
                        {
                id: 5,
                image: "/images/pimg3.png",
                tittle: "VaultOS",
                category:"frontend",
                desc: "Secure, decentralized asset management system with multi-chain support.",
                btn1:"Live",
                btn2:"Github",
            },
                        {
                id: 6,
                image: "/images/pimg3.png",
                tittle: "VaultOS",
                category:"frontend",
                desc: "Secure, decentralized asset management system with multi-chain support.",
                btn1:"Live",
                btn2:"Github",
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
            color:"#EAEDFF",
        },
        {
            id:"backend",
            label:"Backend",
            color:"#EAEDFF",
        },
        {
            id:"fullstack",
            label:"Fullstack",
            color:"#EAEDFF",
        }
    ]
    const filterprojects=activeCategory==="all"?projectData:projectData.filter(project=>project.category===activeCategory);

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
              ${activeCategory === category.id 
                ? 'text-white shadow-lg' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                             {projectData.map((item) => (
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
           <div className='flex gap-3 p-2'> 
                <button className="border border-gray-300 px-4 py-2 rounded-full bg-[#F080C0] text-sm">
               {item.btn1}
             </button>
               <button className="border border-[#CABECE] px-4 py-2 bg-[#FFFFFF] text-black font-light rounded-full text-sm">
               {item.btn2}
             </button></div>
           
                               </div>
                           ))}
                         </div>
    </div>
    
    </>
  )
}

export default Projectcollection
