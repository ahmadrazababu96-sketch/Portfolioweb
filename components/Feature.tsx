import React from 'react'
import { Star } from 'lucide-react'
import { div } from 'framer-motion/client'
const Feature = () => {
      
         const CardData =[
               {
                id:1,
                  icon: < Star/>,
                title:"Create Profile",
                desc:"Build your developer identity and define your professional brand."
               },
                {
                id:2,
                  icon: < Star/>,
                title:"Share Projects",
                desc:"Show your work to others with beautifully curated project displays."
               }, 
               {
                id:3,
                icon: < Star/>,
                title:"Connect",
                desc:"Grow with developers, share insights and expand your network."
               }
               
         ]

  return (
    <>
  
    <section className=' justify-center max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-6 ' >
        
         {CardData.map((item) =>(
          <div key={item.id}
          className="bg-white shadow-md rounded-2xl p-6 text-center 
hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] 
transition-all duration-300 ease-out" >
 <div className="flex justify-center mb-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FFD6EE] text-[#E9A9D3]">
              {item.icon}
            </div>
          </div>
           <h2 className="text-lg font-semibold text-black">{item.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
          </div>
         ) )}
    </section>
  
    </>
  )
}

export default Feature