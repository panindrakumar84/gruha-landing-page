import React from 'react'
import Button from '../components/Button'
import tech from "../assets/tech.png"
import heroImage from "../assets/hero-image 2.jpg"
const Hero = () => {
    return (
        <section id='home'
            className="  bg-secondary w-full h-auto max-2xl:padding-x padding-b ">

            <div className='max-container flex flex-wrap  md:flex-row items-center justify-center '>
                <div className=" md:w-1/2 flex flex-col justify-center  lg:justify-start font-poppins mt-16 gap-6    ">

                    <h1 className=' text-heading text-5xl md:text-6xl lg:text-7xl font-medium max-w-xl '>
                         <span>Home Automation Simplified</span>
                        <span className='text-falu-red'> With Gruha</span>
                    </h1>
                    <p className='text-paragraph text-lg max-w-xl'>Take full control of you home effortlessly with cutting-edge automation solutions that simplify your daily tasks.</p>

                    <div className="w-full flex gap-6 justify-center  md:justify-start  ">
                        <Button label="About us" />                     
                        <Button label="Get a quote"
                            backgroundColor='bg-secondary'
                            borderColor="border-heading"
                            textColor="text-heading" />
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center ">
                    <img src={heroImage}  alt="home automation tools " className= 'w-full max-w-sm h-auto shadow-2xl rounded-3xl mt-14 -mb-32 lg:-mb-40'  />
                </div>
            </div>





        </section>
    )
} 

export default Hero