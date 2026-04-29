"use client";

import React from 'react'

const Hero = () => {
  return (
    <>
    
  <section
  className="w-full h-screen  px-6 md:px-16 pt-50 "
 
>


  <div className=" flex items-center justify-center flex-col text-center">
    <h1 className="text-4xl font-bold text-black">
      Build Your Developer Identity
    </h1>
  <p className="text-gray-600 text-center mt-4 max-w-xl">
  Showcase your skills, creativity, and projects in a modern developer portfolio that helps you stand out.
</p>

  <div className='flex gap-7  items-center justify-center mt-10'>
     <button className='bg-[#AB49A5] rounded-full h-12 w-30 text-black'>Get Started</button>
     <button className='bg-[#FAF8FF]  text-[#BF6B28] border-[#B8A8BF] border-2 rounded-full h-12 w-30'>View Projects</button>
  </div>

 </div>
 <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-10">
  <img
    src="/images/unnamed.png"
    alt="logo"
    className="w-full h-[250px] md:h-[350px] object-cover rounded-2xl"
  />
</div>
 







</section>
    
    
    
    
    
    </>
  )
}

export default Hero
