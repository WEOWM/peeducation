import React from 'react'

const Button = ({ children, className = '' }) => {
  return (
    <button 
    className={`px-3 py-2 rounded-md font-medium text-[15px] lg:flex hidden justify-center items-center ${className}`}
  >
    {children}
  </button>
  
  )
}

export default Button
