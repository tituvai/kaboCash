import React, { useState } from 'react'
import Image from '/src/components/Image'
import kabo from '/src/assets/kabo.png'
import { TbCoinTakaFilled } from "react-icons/tb";
import Hadding from '../Hadding';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [balanceOpan, setBalanceOpen] = useState(true)

    // balance Part Start 
    const handleBalance = ()=>{
        setBalanceOpen(!balanceOpan)
    }
   // balance Part Start 
   
   const [openLogOut, setOpenLogOut] =useState (false)
   const navigate = useNavigate()

   const handleLogOut = ()=>{
    setOpenLogOut(!openLogOut)
    
   }

   const handleLogOutYes = ()=>{
    navigate('/')
   }
   
  return (
    <>
    <div className="lg:w-[450px] bg-logoBg m-auto p-4">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-5">
            <Image className={'w-10 h-10 rounded-full bg-green-200'} imgSrc={kabo}/>
            <div className="">
                <span className='text-sm pl-5 text-textC font-poppins font-normal'>Kabo Sarkar</span>
                <div className="w-[150px] py-1 px-3 border-1 border-green-500 rounded-full relative flex justify-between items-center">
                    <span className='text-base text-textC font-outfit font-medium'>2000</span>
                    <TbCoinTakaFilled onClick={handleBalance} className='size-4 text-green-500'/>
                    {balanceOpan  && <div className="w-full bg-white flex justify-between items-center rounded-full py-1.5 px-3 absolute top-0 left-0 border-2  border-white">
                        <TbCoinTakaFilled onClick={handleBalance} className='size-4 text-green-500'/>
                        <Hadding className={'text-xs text-textC font-poppins font-medium'} text={'Top To Balance'} as={'h4'}/>
                    </div>}
                </div>
            </div>
        </div>
        <div className="px-4 pb-1 border-1 border-gray-500 rounded">
            <span className='text-xs text-textC font-poppins font-medium cursor-pointer' onClick={handleLogOut}>LogOut</span>
        </div>
        </div>
        {openLogOut && <div onClick={handleLogOut} className="w-[150px] bg-white rounded py-4 px-3 absolute top-1 left-1/2">
            <p className='text-xs text-textC font-poppins font-normal'>Apni ki page logout korthe chan</p>
            <div className="flex items-center justify-between pt-3">
                <button className='text-base text-red-500 font-outfit font-medium'>No</button>
                <button className='text-base text-green-500 font-outfit font-medium' onClick={handleLogOutYes}>Yes</button>
            </div>
        </div>}
    </div>
    </>
  )
}

export default Header