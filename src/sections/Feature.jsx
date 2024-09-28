import React from 'react'
import { features } from '../constants'
import FeatureCard from '../components/FeatureCard'
import { SlidersHorizontal } from 'lucide-react'
import { control } from '../constants'
import Button from '../components/Button'


const Feature = () => {
  return (
    <section 
    id='features'

    className='flex flex-col gap-8 justify-center '>
    <div className='flex flex-wrap items-center xl:w-[90%] self-center  justify-center gap-8 max-sm:padding-x '>

        {
            features.map((item,index)=>(
                <FeatureCard key={index} 
                Icon={<item.icon size={35} className='text-falu-red'/>} 
                Title={item.title} 
                Feature={item.feature}/>
            ))
        }
    </div>


    <div className='bg-gradient-to-tr from-red-700 to-red-950 rounded-md px-8 padding-y flex flex-col flex-wrap items-center justify-evenly lg:flex-row gap-8'>
      <div className='bg-white px-6 py-10 shadow-lg  rounded-2xl -rotate-3 '>
          <div className='flex items-center gap-4 '>
              <SlidersHorizontal size={30} className='text-falu-red '/>
              <h3 className='font-semibold text-lg'>What Can You Control ?</h3>
          </div>
          <ul className='list-disc list-inside text-paragraph md:ml-10  '>
              {
                control.map((item,index)=>(
                  <li key={index} className='m-3'>{item}</li>
                ))
              }
          </ul>
      </div>

      <div className='max-w-[470px] flex flex-col justify-center items-center gap-8 '>
          <h2 className='text-white tracking-wider text-3xl font-semibold '>Get a demo for <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-fuchsia-200 font-bold'>seamless smart living.</span> </h2>

          <p className='text-slate-100'>With Gruha, your home becomes truly smart - working behind the scenes to make your life more comfortable, secure, and enjoyable. Let's make your home work for you!</p>

          <p className='font-medium text-white text-lg self-start mt-4'>Provide email address to get free demo</p>

          <div className=' w-full flex max-sm:flex-wrap self-start max-sm:gap-6 justify-between  sm:px-4 py-4 sm:rounded-full sm:border-2 sm:border-slate-50
          ' >
            <input type="email"
            placeholder='Enter your email address' 
            className='bg-transparent sm:flex-1 text-white placeholder-white outline-none max-sm:border-2 max-sm:border-slate-50 max-sm:p-4  max-sm:rounded-full '/>
            <div >
              <Button label= "Request a demo" backgroundColor="bg-white"/>
            </div>
          </div>

      </div>
      <p className='text-white opacity-60  '>Note: You'll need compatible smart devices for these features to work.</p>

    </div>

    </section>
  )
}

export default Feature