import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ContactUs from './sections/ContactUs'
import Title from './components/Title'
import Testimonials from './sections/Testimonials'
import FeatureCard from './components/FeatureCard'
import Feature from './sections/Feature'
import AboutUs from './sections/AboutUs'

const App = () => {
  return (
    <main className='relative font-poppins  '>
      <Navbar />

      <section className=' padding-b '>
        <Hero />
      </section >

      <section 
      id='about-us'
      className='padding-x padding-b scroll-mt-32 max-md:mt-32'>
        <Title subTitle="About us" title="Who We Are" />
        <AboutUs/>


      </section>

      <section id="features" className='padding-b scroll-mt-32 '>
        <Title subTitle="Features" title="What We Provide" />
        <Feature />
      </section>

     

      <section
        id="contact-us"
        className="padding-b padding-x scroll-mt-32 ">
        <Title subTitle="contact us" title="Get in Touch" />
        <ContactUs />
      </section>


    </main>
  )
}

export default App