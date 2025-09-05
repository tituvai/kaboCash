import React from 'react'
import Button from '/src/components/Button'
import Image from '/src/components/Image'
import reage from '/src/assets/Rectangle.png'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom'


const Login = () => {


  return (
    <>
      <div className="lg:w-[450px] bg-logoBg m-auto py-8 px-4">
    <div className="text-center relative">
      <Image className={'m-auto'} imgSrc={reage} imgAlt={'Rectangle.png'}/>
      <Image className={'absolute top-15 left-1/2 -translate-1/2'} imgSrc={logo} imgAlt={'logo.png'}/>
    </div>
    <div className="lg:w-[402px] m-auto bg-white py-5 px-3 rounded-xl">
        <form action="">
          <label className='text-base text-textC font-medium block ml-2 py-3' htmlFor="#">Mobile Number</label>
          <input className='w-full px-4 py-3 rounded-xl bg-logoBg outline-0 placeholder:text-base text-textC font-light' type="text" placeholder='Enter your Number' />
          <label className='text-base text-textC font-medium block ml-2 py-3' htmlFor="#">4 Digit Pin</label>
          <input className='w-full px-4 py-3 rounded-xl bg-logoBg outline-0 placeholder:text-base text-textC font-light' type="text" placeholder='Enter 4 Digit Pin'/>
          
          <Link to={'/home'}><Button btnText={'Login'}/></Link>
        </form>
    </div>
   </div>
    </>
  )
}

export default Login