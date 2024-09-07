import React from 'react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import Button from '../components/Button'
import { Quote } from 'lucide-react'
const AboutUs = () => {
  return (
    <section className=" max-container flex flex-col lg:flex-row justify-between max-lg:gap-10 ">
        <div className='relative w-full h-auto lg:w-[48%] grid grid-cols-3 grid-rows-3 self-center '>

            <img src={img1}   alt="home automation" className='row-start-1 row-end-3 col-start-1 col-end-3 z-10 w-[90%] h-auto'  />

            <div className='bg-gradient-to-tr from-red-800 to-red-950 rounded-xl row-start-1 col-start-2  
            row-end-4 col-end-4 w-[80%] h-[90%] place-self-center mr-[50%] shadow-2xl'></div>

            <img src={img2} alt="home automation"
            className='row-start-4 col-start-4 row-end-2  col-end-2 self-end justify-self-end w-[90%] h-auto z-20' />

        </div>
        <div className=' w-full lg:w-[48%]  flex flex-col items-start justify-center gap-8'>
            <h3 className='text-heading text-3xl font-semibold '>About Gruha</h3>
            <p className='text-paragraph text-justify'>Imagine a home that works for you, not the other way around. That's what true home automation is all about. It's not just about asking Alexa to turn off lights or juggling multiple apps to control different gadgets. It's about making your life easier and more comfortable, without you having to think about it.            
            </p>
            <p  className='text-paragraph text-justify'>That's where Gruha comes in. We're your friendly guide in the world of smart homes. We take care of the complex stuff so you can enjoy a simpler, more comfortable life at home.</p>
      
        </div>
    </section>
  )
  
}

export default AboutUs