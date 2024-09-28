import React from 'react'
import { ShieldCheck, Fingerprint, Cctv, Lamp, Router, Fan } from "lucide-react"

const FeatureCard = ({Icon,Title,Feature}) => {
    
  return (

    <div className='flex flex-col w-full h-auto  sm:w-[450px] sm:h-[250px] shadow-md rounded-sm px-2 py-4 sm:p-2  gap-3 justify-start items-start'>
        <div className='flex gap-2 items-center justify-start mt-4 '>
            {Icon}
            <h3 className='text-lg font-semibold  text-heading '>{Title}</h3>
        </div>
        <p className='ml-10 text-paragraph '>{Feature}</p>

    </div>
  )
}

export default FeatureCard