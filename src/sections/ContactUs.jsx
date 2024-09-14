import React from 'react'
import { MailOpen, Mail, PhoneCall, MapPin } from 'lucide-react'
import Button from '../components/Button'
const ContactUs = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "58fce152-2c03-400d-929e-b483c1995822");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (    
    <section
      
      className="max-container flex  max-md:flex-col justify-center items-center gap-10">
      <div className='w-[48%] max-md:w-full flex flex-col shadow-lg rounded-lg gap-7 py-7 px-4 text-base '>
        <h3 className='inline-flex font-medium text-2xl gap-3'>Send us a message <MailOpen className='self-center' /> </h3>

        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our company</p>

        <ul className=' flex flex-col gap-7 '>
          <li className='inline-flex gap-3'> <Mail /> contact@gruhalabs.com</li>
          <li className='inline-flex gap-3'> <PhoneCall /> +1 123-456-7890</li>
          <li className='inline-flex gap-3'> <MapPin /> 47 W 13th St, New York, NY 10011, USA</li>
        </ul>

      </div>

      <div className="w-[48%] max-md:w-full shadow-lg rounded-lg gap-6 py-7 px-4 text-base ">
        <form onSubmit={onSubmit}
        className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required
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
        <span className='block my-5'>{result}</span>
      </div>
    </section>
  )
}

export default ContactUs