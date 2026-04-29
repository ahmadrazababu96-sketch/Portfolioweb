import { div, image } from 'framer-motion/client'
import React from 'react'

const Projects = () => {
    const ProjectData = [
        {
            id: 1,
            image: "/images/pimg1.png",
            tittle: "Nexus Analytics",
            desc: "A real-time data visualization platform for SaaS companies built with React.",
            btn1:"Live",
            btn2:"Github",
        },
        {
            id: 2,
            image: "/images/pimg2.png",
            tittle: "DevSocial",
            desc: "Connecting developers through collaborative coding challenges and peer reviews.",
            btn1:"Live",
            btn2:"Github",
        },
        {
            id: 3,
            image: "/images/pimg3.png",
            tittle: "VaultOS",
            desc: "Secure, decentralized asset management system with multi-chain support.",
            btn1:"Live",
            btn2:"Github",
        },
    ]



    return (
        <>

            <section className=' justify-center max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16  ' >

              <h1 className="text-2xl md:text-4xl text-black font-bold text-center mb-10">
    Featured Projects
  </h1>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
                  {ProjectData.map((item) => (
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




            </section>

        </>
    )
}

export default Projects
