import React, {  useState } from 'react'
import TestimonialCard from '../components/TestimonialCard'
import { reviews } from '../constants'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
  return (

    <section 
    className='max-container flex justify-center lg:padding-x'>
    <div className='w-full py-4 px-2 md:px-10'>
      
      <Slider {...settings}>
             {
            reviews.map((item,index)=>(
             
                <TestimonialCard key={index}  image={item.imgUrl}
                name={item.name}
                address={item.address}
                review={item.review}/>              
            ))
          }
        </Slider>
      
    </div>
    </section>
  )
}

export default Testimonials