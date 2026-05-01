

import React from 'react'
import { Mail,Phone,Share2,Globe,FileCodeCorner,ArrowBigRight } from 'lucide-react'
const Contacthero = () => {
  return (
    <>
    <section className='w-full px-6 py-16 '>
       <div className='text-center max-w-2xl mx-auto mb-12 '>
          <h2 className='text-3xl md:text-4xl font-bold mb-3 text-black'>
            Let's build something together.
          </h2>
          <p className='text-gray-600'>
            Have a project in mind or just want to chat about technology? I'm always open to new opportunities and interesting collaborations.
          </p>
       </div>

       <div className="max-w-4xl mx-auto p-6 rounded-xl grid md:grid-cols-2 gap-10 items-start">
           <div className='space-y-6'>
              <div className='p-6 rounded-xl shadow-md border bg-[#FFFFFF]'>
                 <h3 className='text-xl font-semibold mb-4 text-black'>
                   Contact Information
                 </h3>
                 <div className='flex items-center gap-3 mb-4 text-black'>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E1E0FF] text-[#4B4DD7] transition-transform duration-300 hover:scale-110">
  <Mail size={18} />
</div>
                    <div className='flex flex-col'>
                        <p className='font-medium text-gray-300'>Email</p>
                    <span>example@gmail.com</span>
                    </div>
                 </div>
                 <div className='flex items-center gap-3 mb-4 text-black'>
           <div className="w-10 h-10 flex items-center justify-center rounded-full  bg-[#E1E0FF] text-[#4B4DD7] transition-transform duration-300 hover:scale-110">
  <Phone size={18} />
</div>
                    <div className='flex flex-col'>
                        <p className='font-medium text-gray-300'>WhatsApp</p>
                    <span>0000 000000</span>
                    </div>
                 </div>
                 <h4 className='font-semibold mb-2 text-black'> 
                   Follow Me
                 </h4>
                 <div className="flex gap-4">
  
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#E1E0FF] text-black hover:bg-[#4B4DD7] transition-transform duration-300 hover:scale-110 cursor-pointer">
    <Share2  size={18} />
                         </div>

                           <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#E1E0FF] text-black hover:bg-[#4B4DD7] transition-transform duration-300 hover:scale-110 cursor-pointer">
    <FileCodeCorner  size={18} />
                            </div>

                       <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#E1E0FF] text-black hover:bg-[#4B4DD7] transition-transform duration-300 hover:scale-110 cursor-pointer">
    <Globe  size={18} />
                      </div>

                      
                   
</div>

              </div>
              <div className='rounded-2xl overflow-hideen shadow-md'>
                        <img
              src="/images/pimg3.png"
              alt="contact"
              className="w-full h-64 object-cover rounded-2xl"
            />
                      </div>
           </div>
           <div className="p-6 rounded-xl shadow-md  border bg-white">
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-black font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full  p-3  text-[#737C8C] rounded-md bg-[#F2F3FF]"
              />
            </div>

            <div>
              <label className="block mb-1 text-black font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full  p-3  text-[#737C8C] rounded-md bg-[#F2F3FF]"
              />
            </div>

            <div>
              <label className="block mb-1 text-black font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full  p-3  text-[#737C8C] rounded-md bg-[#F2F3FF]"
              />
            </div>

            <div>
              <label className="block mb-1 text-black font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full  p-3  text-[#737C8C] rounded-md bg-[#F2F3FF]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#4648D4] cursor-pointer text-white px-6 py-3 rounded-md
               hover:bg-gray-800 flex items-center gap-2"
            >
              Send Message <span><ArrowBigRight className=''  size={22} /></span>
            </button>
          </form>
        </div>
        </div>
        
    </section>
    
    </>
  )
}

export default Contacthero
