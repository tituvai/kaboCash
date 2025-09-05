import React from 'react'

const Button = ({className, btnText}) => {
  return (
    <>
    <button className={`w-full rounded-xl bg-pink-700 text-lg my-5 text-white font-semibold py-2 text-center ${className}`}>{btnText}</button>
    </>
  )
}

export default Button