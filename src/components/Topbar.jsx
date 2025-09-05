import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import Hadding from './Hadding'
import Image from './Image'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom';

const Topbar = ({topText}) => {
  return (
    <>
    <div className="lg:w-[450px] m-auto p-3 flex items-center justify-between bg-pink-700">
        <Link to={'/home'}><FaArrowLeft className='text-white'/></Link>
        <Hadding className={'text-sm font-poppins font-medium text-white'} text={topText} as={'h4'}/>
        <Image className={'w-5'} imgSrc={logo} imgAlt={'logo.png'}/>
    </div>
    </>
  )
}

export default Topbar