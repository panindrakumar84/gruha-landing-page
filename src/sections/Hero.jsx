import React from 'react'
import Button from '../components/Button'
import home from "../assets/home.jpg"

const Hero = () => {
    return (
        <section id='home'
            className="w-full flex  justify-center items-center  min-h-screen max-container  ">

            <div className="relative  flex flex-col  justify-start items-center font-poppins gap-6  ">
                <h1 className=' text-6xl text-heading max-sm:text-4xl  font-medium max-w-4xl'>
                    <span>Home Automation Simplified</span>
                    <span className='text-falu-red'> With Gruha Labs</span>
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
            <div className=' '>
                <img src={home}
                className=''
                width={500}
                 alt=""
                 />
            </div>
        </section>
    )
}

export default Hero