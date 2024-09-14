import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ContactUs from './sections/ContactUs'
import Title from './components/Title'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <main className='relative font-poppins '>
      <Navbar/>  

      <section className='padding-b padding-x '>
        <Hero/>
      </section>

      <section className=''>
        <Title subTitle="Testimonials" title="What Our Clients Says" />
        <Testimonials/>
      </section>

      <section id="contact-us" className="padding ">  
        <Title subTitle="contact us" title="Get in Touch"/>      
        <ContactUs/>
      </section>

    </main>
  )
}

export default App