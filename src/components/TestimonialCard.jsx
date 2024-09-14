import React from 'react'

const TestimonialCard = ({image,name,address,review}) => {
  return (
    <div className='h-[300px] shadow-md px-6 rounded-xl flex flex-col m-4 justify-center gap-4'>
        <div className='flex items-center'>
            <img src={image} alt="" className='w-[65px] rounded-full mr-2 border-4 border-falu-red' />
            <div className=''>
                <h3 className='text-xl text-falu-red font-medium'>{name}</h3>
                <span>{address}</span>
            </div>
        </div>
        <p className=''>{review}</p>
    </div>
  )
}

export default TestimonialCard