import React from 'react'
import { MailOpen, Mail, PhoneCall, MapPin } from 'lucide-react'
import Button from '../components/Button'
const ContactUs = () => {


  return (    
    <section
      
      className="max-container flex  max-md:flex-col text-paragraph   justify-center items-center gap-10">
      <div className='w-[48%] max-md:w-full flex flex-col shadow-lg rounded-lg gap-7 py-7 px-4 text-base '>
        <h3 className='inline-flex font-medium text-2xl gap-3 text-heading'>Send us a message <MailOpen className='self-center' /> </h3>

        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our company</p>

        <ul className=' flex flex-col gap-7  '>
          <li className='inline-flex gap-3'> <Mail className='text-heading' /> info@gruha.io</li>
          <li className='inline-flex gap-3'> <PhoneCall className='text-heading' /> +1 123-456-7890</li>
          <li className='inline-flex gap-3'> <MapPin className='text-heading' /> 47 W 13th St, New York, NY 10011, USA</li>
        </ul>

      </div>

      <div className="w-[48%] max-md:w-full shadow-lg rounded-lg gap-6 py-7 px-4 text-base ">
        <form 
        className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required
              className=' text-heading p-3 border border-gray-500 outline-none rounded-md ' />
          </div>
          <div className='flex flex-col gap-3'>
            <label >Email</label>
            <input type="email" name='email' placeholder='Enter your email' required
              className=' text-heading p-3 border border-gray-500 outline-none rounded-md ' />
          </div>
          <div className='flex flex-col gap-3'>
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required
              className=' text-heading p-3 border border-gray-500 outline-none rounded-md ' />
          </div>
          <div className='flex flex-col gap-2'>
            <label >Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message ' required
              className=' text-heading p-3 border border-gray-500 outline-none rounded-md '></textarea>
          </div>
          <div >
            <Button type="submit" label="Submit" iconURL={true} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactUs