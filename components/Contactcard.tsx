

import React from 'react'
import { LockKeyhole,Trophy,Gauge } from 'lucide-react'
const Contactcard = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mt-10">

  {/* Card 1 */}
  <div className="p-6 rounded-xl shadow-md border text-center hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full  text-[#4B4DD7] mb-4">
      <Gauge  size={25} />
    </div>
    <h3 className="font-semibold text-lg text-black mb-2">Fast Response</h3>
    <p className="text-gray-500 text-sm">
      I typically respond to all inquiries within 24-48 business hours.
    </p>
  </div>

  {/* Card 2 */}
  <div className="p-6 rounded-xl shadow-md border text-center hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full  text-[#4B4DD7] mb-4">
      <LockKeyhole  size={25} />
    </div>
    <h3 className="font-semibold text-lg text-black mb-2">Secure & Private</h3>
    <p className="text-gray-500 text-sm">
      Your details are never shared. All communications are confidential.
    </p>
  </div>

  {/* Card 3 */}
  <div className="p-6 rounded-xl shadow-md border text-center hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full ] text-[#4B4DD7] mb-4">
      <Trophy size={25} />
    </div>
    <h3 className="font-semibold text-lg text-black mb-2">Virtual Coffee</h3>
    <p className="text-gray-500 text-sm">
      Open to casual tech chats or networking over a video call.
    </p>
  </div>

</div>
    
    </>
  )
}

export default Contactcard
