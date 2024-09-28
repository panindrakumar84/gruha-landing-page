import React from 'react'
import Button from '../components/Button'
import home from "../assets/home.jpg"
import tech from "../assets/tech.png"
const Hero = () => {
    return (
        <section id='home'
            className="  w-full flex flex-col items-center justify-center   min-h-screen max-container gap-16 ">

            <div className=" relative w-full flex flex-col  justify-center items-center font-poppins mt-16  gap-6   ">

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

            <div className="w-full grid grid-rows-3 grid-cols-3 lg:w-[80%] items-center justify-center  ">
                <img src={tech} alt="home automation tools "  className=' w-full h-auto rounded-md row-start-1 row-end-3 col-start-1 col-end-3
                  lg:max-w-[80%] lg:ml-[5%]'  />
                <img src={home} alt="smart home automation"  className=' w-full h-auto rounded-md row-start-4 row-end-2 col-start-4 col-end-2 
                lg:max-w-[80%] justify-self-end lg:mr-[5%]' />

            </div>

            

        </section>
    )
}

export default Hero