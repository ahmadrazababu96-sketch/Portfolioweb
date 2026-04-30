import React from 'react'
import { AppWindowMac,PencilLine,Landmark } from 'lucide-react'
const Aboutcard = () => {
type AboutCardType = {
  id: number;
  icon: React.ReactNode;
  title: string;
  buttons: string[];
};
    const Aboutdata=[
        {
            id:1,
            icon: <AppWindowMac size={24} />,
            title:"Frontend Engine" ,
            buttons: ["React/Next.js","TypeScript","Tailwind CSS","Framer Motion","Three.js"],
            
        },
        {
            id:2,
            icon:<Landmark  size={24} /> ,
            title:"Infrastructure" ,
            buttons: ["Node.js","PostgreSQL","AWS/Vercel","Redis","GraphQL","Docker"],
        },
        {
            id:3,
            icon:<PencilLine size={24}  /> ,
            title:"Infrastructure" ,
             buttons: ["Figma","UI/UX","Design","Agile/Scrum","Design","Systems"],
              }
    ]
  return (
    <>
    <div className="py-20 px-6  text-white">
  <div className="text-center max-w-2xl mx-auto mb-12">
    <h2 className="text-3xl text-black md:text-4xl font-bold mb-4">
      Technical Arsenal
    </h2>

    <p className="text-gray-400">
      Specialized tools for modern digital solutions
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

       {Aboutdata.map((item) => (
  <div
    key={item.id}
    className="bg-white text-black p-6 rounded-2xl shadow-md
      hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]
      transition-all duration-300 ease-out"
  >
    
    {/* Icon */}
    <div className="text-[#6466DB] mb-3">
      {item.icon}
    </div>

    {/* Title */}
    <h3 className="text-lg font-bold mb-3">
      {item.title}
    </h3>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2">
      {item.buttons.map((btn, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-gray-200 text-[#6466DB] hover:bg-[#F080C0] hover:text-black font-light rounded-full text-sm
          cursor-pointer"
        >
          {btn}
        </span>
      ))}
    </div>

  </div>
))}

  </div>

</div>
    
    </>
  )
}

export default Aboutcard
