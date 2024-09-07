import React, { useState } from 'react'
import { Menu, X } from "lucide-react"
import { navLinks } from '../constants'
import Button from './Button';
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }
  return (
    <header className=" bg-secondary max-2xl:padding-x  py-3 w-full sticky top-0 backdrop-blur-lg z-30  ">
      <nav className="flex  items-center w-full max-container justify-between  ">
        <a href="/" className='text-falu-red font-semibold text-3xl '>Gruha</a>

        <ul className="flex-1 flex gap-6 xl:gap-12 justify-center  items-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className='font-poppins leading-normal text-lg text-slate-900'> <a href={item.href}>{item.label}</a> </li>
          ))}
        </ul>

        <div className="  flex justify-between items-center gap-4 max-lg:hidden ">
          <Button label="Get a quote"
            backgroundColor='bg-secondary'
            borderColor="border-heading"
            textColor="text-heading" />
          <Button label="Contact now" />
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleNavbar} >
            {mobileMenuOpen ? <X /> : <Menu  />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed top-14 right-0 w-full p-6 flex flex-col justify-center items-center border-t-2  bg-falu-red lg:hidden ">
            <ul >
              {navLinks.map((item) => (
                <li key={item.label} className='font-poppins leading-normal text-lg text-flash-white  py-2 '> <a href={item.href}>{item.label}</a> </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar