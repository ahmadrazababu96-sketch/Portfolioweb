"use client";

import { p } from 'framer-motion/client';
import React from 'react'
import { useState } from 'react';
const Abouthero = () => {

    const [file,setfFile]=useState<File|null>(null);
    const [showPopup,setShowPopup]=useState(false);
    const [upLoad,setUpload]=useState(false)
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const selectedFile=e.target.files?.[0] || null;
        setfFile(selectedFile);
        setUpload(true);
        if(selectedFile)
        {
            setShowPopup(true);
        }
        setTimeout(()=>{
            setShowPopup(false);
        },20000);
    };
    return (
    <>
    
     <div className="flex flex-col md:flex-row items-center justify-center gap-5 py-16 mx-auto max-w-6xl">
        <div className='flex-1 flex justify-center flex-col space-y-6 '>
            
             <p className='text-[#8182E2] tracking-widest
             text-sm font-medium'>THE ARCHITECT</p>
              <h1 className="text-black text-4xl md:text-5xl font-bold leading-tight max-w-xl">
  Crafting digital experiences with{" "}
  <span className="text-[#8182E2]">technical precision</span>{" "}
  and creative intent.
</h1>
               <p className='text-gray-400 leading-relaxed max-w-xl'>
                I am a Senior Software Engineer specializing in building 
                scalable distributed systems and high-performance front-end architectures.
                 With over 8 years of experience, I bridge the gap between complex backend logic and intuitive user
                  interface design.
               </p> 
               <div className='flex gap-4 pt-4'>
                    <button className="bg-[#8182E2] text-white px-6 py-2 rounded-lg hover:scale-105 transition">
      View Projects
    </button>

    <button className="border border-[#8182E2] text-[#8182E2] px-6 py-2 rounded-lg hover:bg-[#8182E2] hover:text-white transition">
      Contact Me
    </button>
               </div>

          </div>

        <div className='flex-1 relative  '>

             
   <div className="h-130 w-100 bg-[#1F2931] rounded-xl flex flex-col items-center justify-center text-white">

  {!file ? (
    <>
      <h2 className="text-xl font-bold mb-4">Upload Your CV</h2>

      <input
        type="file"
        id="cvUpload"
        className="hidden"
        onChange={handleUpload}
      />

      <label
        htmlFor="cvUpload"
        className="bg-[#8182E2] px-6 py-2 rounded-lg cursor-pointer"
      >
        Upload CV
      </label>
    </>
  ) : (
    <div className="text-center space-y-4">

      

      <iframe
        src={URL.createObjectURL(file)}
        className="w-64 h-80 rounded-lg border"
      />

      <a
        href={URL.createObjectURL(file)}
        target="_blank"
        className="text-[#8182E2] underline block"
      >
        Open Full CV
      </a>

    </div>
  )}

</div>
        

        </div>
            

          

     </div>

</>
  )
}

export default Abouthero
