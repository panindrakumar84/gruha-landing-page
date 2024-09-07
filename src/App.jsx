import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <main className='relative  '>
      <Navbar/>   
      <section className='padding-b padding-x '>
        <Hero/>
      </section>
    </main>
  )
}

export default App