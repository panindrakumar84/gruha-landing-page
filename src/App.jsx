import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ContactUs from './sections/ContactUs'
import Title from './components/Title'
import Testimonials from './sections/Testimonials'
import FeatureCard from './components/FeatureCard'
import Feature from './sections/Feature'

const App = () => {
  return (
    <main className='relative font-poppins max-container  '>
      <Navbar/>  

      <section className='padding-b padding-x overflow-hidden '>
        <Hero/>
      </section>

      <section id="features" className='padding-b md:padding-x scroll-mt-32 '>
        <Title  subTitle="Features" title="What We Provide" />
        <Feature/>
      </section>

      <section 
      id='testimonials'
      className='overflow-hidden padding-b '>
        <Title subTitle="Testimonials" title="What Our Clients Says" />
        <Testimonials/>
      </section>

      <section 
      id="contact-us" 
      className="padding-b padding-x scroll-mt-32 ">  
        <Title subTitle="contact us" title="Get in Touch"/>      
        <ContactUs/>
      </section>


    </main>
  )
}

export default App