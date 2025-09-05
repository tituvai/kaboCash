import React from 'react'
import Topbar from '../../Topbar';
import { FaFileInvoiceDollar } from "react-icons/fa6";
import Hadding from '../../Hadding';
import { TbCoinTaka } from "react-icons/tb";
import { MdGroups } from "react-icons/md";

const SendHome = () => {
  return (
    <>
    <Topbar topText={'Send Money'}/>
    <div className="lg:w-[450px] bg-logoBg m-auto p-4 h-screen">
        <div className="relative">
          <input className='outline-0 p-2 bg-stone-200 w-full rounded placeholder:text-xs' type="text" placeholder='Enter your name or number' />
          <div className="w-[450px] bg-stone-300 h-1 absolute -bottom-5 -left-4"></div>
        </div>
        <div className="pt-10">
          <div className="flex items-center justify-between">
            <div className="w-[32%] bg-white border-1 border-stone-200 px-2 py-6 rounded-lg">
                <FaFileInvoiceDollar className='size-6 text-green-500'/>
                <Hadding className={'text-sm text-textC font-outfit font-normal pt-2'} text={'Priyo Numbers (1)'} as={'h5'}/>
            </div>
            <div className="w-[32%] bg-white border-1 border-stone-200 px-2 py-6 rounded-lg">
                <TbCoinTaka className='size-7 text-green-500'/>
                <Hadding className={'text-sm text-textC font-outfit font-normal pt-2'} text={'Auto Pay'} as={'h5'}/>
            </div>
            <div className="w-[32%] bg-white border-1 border-stone-200 px-2 py-6 rounded-lg">
                <MdGroups className='size-7 text-green-500'/>
                <Hadding className={'text-sm text-textC font-outfit font-normal pt-2'} text={'Group Send Money'} as={'h5'}/>
            </div>
            
          </div>
        </div>
    </div>
    </>
  )
}

export default SendHome