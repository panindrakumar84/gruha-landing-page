import { ArrowRight } from 'lucide-react'
import React from 'react'

const Button = ({label,type,iconURL,backgroundColor, textColor, borderColor,fullWidth}) => {
  return (
    <button type={type}  className={`flex justify-center items-center gap-2 px-5 py-4 border-2 font-montserrat text-base leading-none 
      ${
        backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:
        "bg-primary text-white border-falu-red "
      }
      
    rounded-full  ${fullWidth && 'w-full'}`}>
        {label}
        {iconURL && <ArrowRight />        
        }
    </button>
  )
}

export default Button