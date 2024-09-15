import React from 'react'
import { ShieldCheck, Fingerprint, Cctv, Lamp, Router, Fan } from "lucide-react"

const FeatureCard = ({Icon,Title,Feature}) => {
    
  return (
    <div className='flex flex-col w-[300px] h-[150px] shadow-md rounded-sm p-2 gap-3 justify-center items-start'>
        <div className='flex gap-2 items-center justify-start '>
            {Icon}
            <h3 className='text-lg font-semibold  text-heading'>{Title}</h3>
        </div>
        <p className='pl-10 text-balance text-paragraph'>{Feature}</p>
    </div>
  )
}

export default FeatureCard