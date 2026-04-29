import React from 'react'

const Cta = () => {
  return (
    <>
    <div className='bg-[#C8EAFF] text-[#001A33] mx-20 rounded-2xl py-20 '>
      <div className='max-w-4xl mx-auto px-4 text-center '>
         <h1 className='text-[#001A33] text-3xl md:text-5xl font-semibold'>
            Join Developer Community
         </h1>
         <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          Start building your professional presence and connect with top-tier talent from around the globe.
        </p>
        <button className="mt-8 bg-[#001A33] text-white px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </div>
    </>
  )
}

export default Cta
