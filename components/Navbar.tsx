"use client";
import Link from 'next/link';
import {Menu,X} from "lucide-react"
import React, { useState } from 'react'

const Navbar = () => {
    const [open,Setopen]=useState(false);
  return (
    <>
    
    <nav className="w-full sticky top-2 z-50 shadow-[#F4F2FE]">
  <div className="max-w-6xl mx-auto h-16 bg-white shadow-md flex items-center justify-between px-4 md:px-6 lg:px-8 rounded-full">
    
   <Link href={"/"}>
    <div className="text-2xl font-bold text-black">
      PortFolio
    </div>
   </Link>

    <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
      <Link href={"/"}>Home</Link>
      <Link href={"/projects"}>Project</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/"}>Contact</Link>
    </div>

    <button className="bg-[#E040A0] text-white px-5 py-2 rounded-full hidden md:block hover:bg-gray-800 transition">
      Login
    </button>

      <button onClick={ ()=>Setopen(!open)} className='md:hidden text-black '>

        {open ? <X size={28}/> : <Menu size={28}/>}
      </button>

       { open&&(
        <div className='absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col gap-6 py-6 items-center 
        md:hidden text-black'>

       <Link href={"/"} onClick={()=>Setopen(false)}>Home</Link>
       <Link href={"/"} onClick={()=>Setopen(false)}>Project</Link>
       <Link href={"/"} onClick={()=>Setopen(false)}>About</Link>
       <Link href={"/"} onClick={()=>Setopen(false)}>Contact</Link>
        <button className='bg-black text-white px-5 py-2 rounded-full
        hover:bg-gray-800 transition w-full'>Login</button>
      </div>
       )}

  </div>
</nav>
    </>
  )
}

export default Navbar