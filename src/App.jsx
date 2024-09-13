import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ContactUs from './sections/ContactUs'
import Title from './components/Title'

const App = () => {
  return (
    <main className='relative font-poppins '>
      <Navbar/>  

      <section className='padding-b padding-x '>
        <Hero/>
      </section>

      <section className="padding">  
        <Title subTitle="contact us" title="Get in Touch"/>      
        <ContactUs/>
      </section>
    </main>
  )
}

export default App