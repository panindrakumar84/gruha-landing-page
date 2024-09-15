import React from 'react'
import { features } from '../constants'
import FeatureCard from '../components/FeatureCard'

const Feature = () => {
  return (
    <section 
    className='flex justify-center'>
    <div className='flex flex-wrap items-center lg:w-[80%]  justify-center gap-8'>
        {
            features.map((item,index)=>(
                <FeatureCard key={index} 
                Icon={<item.icon size={35} className='text-falu-red'/>} 
                Title={item.title} 
                Feature={item.feature}/>
            ))
        }
    </div>
    </section>
  )
}

export default Feature