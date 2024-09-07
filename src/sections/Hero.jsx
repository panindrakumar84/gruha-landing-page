import React from 'react'
import Button from '../components/Button'
import home from "../assets/home.jpg"
import tech from "../assets/tech.jpg"
const Hero = () => {
    return (
        <section id='home'
            className="  w-full flex flex-col justify-evenly items-center  min-h-screen max-container  ">

            <div className=" relative w-full flex flex-col  justify-center items-center font-poppins  gap-6   ">
                <h1 className=' text-6xl text-heading max-sm:text-4xl lg:text-7xl font-medium max-w-4xl'>
                    <span>Home Automation Simplified</span>
                    <span className='text-falu-red'> With Gruha</span>
                </h1>
                <p className='text-paragraph text-lg'>Control your home effortlessly with cutting-edge automation solutions.</p>

                <div className="  flex max-sm:flex-col   justify-between items-center gap-4  ">
                    <Button label="About us" />
                    <Button label="Get a quote"
                        backgroundColor='bg-white'
                        borderColor="border-heading"
                        textColor="text-heading" />
                </div>
            </div>

            <div className="w-full  flex flex-col md:flex-row items-center justify-between  ">
                <img src={tech} alt="home automation tools" width={500} height={500} className=' w-full md:w-[49%] h-auto max-md:my-3 rounded-md'  />
                <img src={home} alt="smart home automation" width={500} height={500} className=' w-full md:w-[49%] h-auto max-md:my-3 rounded-md' />
            </div>

            

        </section>
    )
}

export default Hero