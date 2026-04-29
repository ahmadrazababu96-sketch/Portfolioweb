"use Client";

import React from 'react'
import { Star,Eye,Upload,User} from 'lucide-react'
import { motion } from 'framer-motion';
const Hwork = () => {

      const WorkData=[
        {
            id:1,
            icon:<Star size={24} />,
            tittle:"Sign Up",
            desc:"Quick onboarding",
        },
         {
            id:2,
            icon:<User/>,
            tittle:"Create Profile",
            desc:"Set your identity",
        },
         {
            id:3,
            icon:<Upload/>,
            tittle:"Upload Projects",
            desc:"Add your work",
        },
          {
            id:4,
            icon:<Eye/>,
            tittle:"Get Noticed",
            desc:"Share your link",
        },
      ]
  return (
    <>
    
    <div className='max-w-6xl mx-auto md:px-6 lg:px-8  py-16'>
     
      <h1 className='text-4xl md:text-3xl font-semibold text-center text-black  mb-12'>
        How it Works
      </h1>
       
        <div className='grid grid-cols-2 md:grid-cols-4  gap-4 text-center'>
               
         {WorkData.map((item)=>(
            <div className='flex flex-col items-center' key={item.id}>
             <div className='w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#E146A3] text-[#E146A3]
             '>
                {item.icon}
             </div>
             
              <h1 className='text-lg text-black font-semibold'>{item.tittle}</h1>
              <p className='text-gray-500 text-sm mt-2 max-w-xs'>{item.desc}</p>
            </div>
         ))}
              
        </div>
        
    </div>
 


    </>
  )
}

export default Hwork
