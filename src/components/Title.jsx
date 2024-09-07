import React from 'react'

const Title = ({subTitle, title}) => {
    return (
        <div className='flex flex-col max-container font-semibold text-base justify-center items-center gap-3 pt-4 pb-10'>
            <p className='uppercase'>{subTitle}</p>
            <h2 className='text-3xl text-center transform-none text-primary  drop-shadow-2xl
            '>
                {title}
            </h2>
        </div>
    )
}

export default Title