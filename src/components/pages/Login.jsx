import React, { useState } from 'react'
import Button from '/src/components/Button'
import Image from '/src/components/Image'
import reage from '/src/assets/Rectangle.png'
import logo from '/src/assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import Home from './Home'


const Login = () => {

  const [number, setNumber]=useState('')
  const [pin, setPin]=useState('')
  const [error, setError]= useState('')
  const navage= useNavigate()

  const handleLogin = (e)=>{
    e.preventDefault()
    if(number === '01761110819' && pin==='kabo'){
      navage('/home')
    }
    else{
      setError('Your information is incorrect')
    }
    setNumber('')
    setPin('')
  }

  return (
    <>
      <div className="lg:w-[450px] bg-logoBg m-auto py-8 px-4 h-screen">
    <div className="text-center relative">
      <Image className={'m-auto'} imgSrc={reage} imgAlt={'Rectangle.png'}/>
      <Image className={'absolute top-15 left-1/2 -translate-1/2'} imgSrc={logo} imgAlt={'logo.png'}/>
    </div>
    <div className="lg:w-[402px] m-auto bg-white py-5 px-3 rounded-xl">
        <form action="" onSubmit={handleLogin}>
          <label className='text-base text-textC font-medium block ml-2 py-3' htmlFor="#">Mobile Number</label>
          <input className='w-full px-4 py-3 rounded-xl bg-logoBg outline-0 placeholder:text-sm text-textC font-normal' value={number} onChange={(e)=>setNumber(e.target.value)} type="text" placeholder='Enter your Number' />
          <label className='text-base text-textC font-medium block ml-2 py-3' htmlFor="#">Pin Number</label>
          <input className='w-full px-4 py-3 rounded-xl bg-logoBg outline-0 placeholder:text-sm text-textC font-normal' value={pin} onChange={(e)=>setPin(e.target.value)} type="text" placeholder='Enter 4 Digit Pin'/>
          {error && <p className='text-sm font-outfit font-normal text-red-500'>{error}</p>}
          <Button type={'submit'} btnText={'Login'}/>
        </form>
    </div>
   </div>
    </>
  )
}

export default Login