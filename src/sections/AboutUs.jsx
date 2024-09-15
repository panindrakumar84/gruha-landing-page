import React from 'react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import Button from '../components/Button'
import { Quote } from 'lucide-react'
const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between max-lg:gap-10">
        <div className='relative w-full h-auto lg:w-[48%] grid grid-cols-3 grid-rows-3 self-center'>

            <img src={img1}   alt="home automation" className='row-start-1 row-end-3 col-start-1 col-end-3 z-10 w-[90%] h-auto'  />

            <div className='bg-gradient-to-tr from-red-500 to-red-900 rounded-xl row-start-1 col-start-2  
            row-end-4 col-end-4 w-[80%] h-[90%] place-self-center mr-[50%] shadow-2xl'></div>

            <img src={img2} alt="home automation"
            className='row-start-4 col-start-4 row-end-2  col-end-2 self-end justify-self-end w-[90%] h-auto z-20' />

        </div>
        <div className=' w-full lg:w-[48%]  flex flex-col items-start justify-center gap-8'>
            <h3 className='text-falu-red text-3xl font-semibold '>About Gruha</h3>
            <p className='text-paragraph text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed ea maxime quasi necessitatibus ipsam, voluptatibus dolores sunt earum architecto in impedit? Maiores ex ducimus commodi minus consequuntur aut tempore, numquam illum nam? Quae veniam dolores facere, animi iste nesciunt aut reiciendis esse cum natus odio a dignissimos voluptate vero?             
            </p>
            <p  className='text-paragraph text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quo minima totam repellat excepturi maxime voluptatibus dicta quaerat, aspernatur, voluptate ut non quia atque aut rerum illum perspiciatis quas architecto. Ut esse hic quae aliquid ratione repellendus vero. Officia magni vitae voluptates, ipsam doloremque ex? Consequuntur eum ab quos hic.</p>
            <div className='w-full p-8 shadow-md rounded-md text-black border-l-4 border-falu-red italic relative '>
                <Quote className='scale-x-[-1] -mt-8'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consectetur <span className=' font-medium'>- Jana</span></p>
            </div>
            <Button label="Know more" iconURL={true}/>
        </div>
    </section>
  )
  
}

export default AboutUs