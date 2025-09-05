import React from 'react'
import Topbar from '../../Topbar';
import { FaFileInvoiceDollar } from "react-icons/fa6";
import Hadding from '../../Hadding';
import { TbCoinTaka } from "react-icons/tb";
import { MdGroups } from "react-icons/md";
import { BiUser } from "react-icons/bi";

const SendHome = () => {
  return (
    <>
    <Topbar topText={'Send Money'}/>
    <div className="lg:w-[450px] bg-logoBg m-auto p-4">
        <div className="relative py-5">
          <input className='outline-0 p-2 bg-stone-200 w-full rounded placeholder:text-sm' type="text" placeholder='Enter your name or number' />
          <div className="lg:w-[450px] w-screen bg-stone-300 h-1 absolute -bottom-5 -left-4"></div>
        </div>
        <div className="py-10 relative">
          <div className="flex items-center justify-between">
            <div className="w-[32%] bg-white border-1 border-stone-200 px-2 h-[120px] flex flex-col justify-center rounded-lg">
                <FaFileInvoiceDollar className='size-6 text-green-500'/>
                <Hadding className={'text-sm text-textC font-outfit font-normal pt-2'} text={'Priyo Numbers (1)'} as={'h5'}/>
            </div>
            <div className="w-[32%] bg-white border-1 border-stone-200 px-2 h-[120px] flex flex-col justify-center rounded-lg">
                <TbCoinTaka className='size-7 text-green-500'/>
                <Hadding className={'text-sm text-textC font-outfit font-normal pt-2'} text={'Auto Pay'} as={'h5'}/>
            </div>
            <div className="w-[32%] bg-white border-1 border-stone-200 px-2 h-[120px] flex flex-col justify-center rounded-lg">
                <MdGroups className='size-7 text-green-500'/>
                <Hadding className={'text-sm text-textC font-outfit font-normal pt-2'} text={'Group Send Money'} as={'h5'}/>
            </div>
          </div>
            <div className="lg:w-[450px] w-screen bg-stone-300 h-1 absolute bottom-0 -left-4"></div>
        </div>
        {/* recent Part Start  */}

        <div className="py-5 relative">
          <Hadding className={'text-base text-gray-500 pb-2 font-poppins font-medium'} text={'Recent'} as={'h5'}/>
          <div className="flex items-center gap-x-3 py-2">
            <div className="w-10 h-10 rounded-full bg-green-500 flex justify-center items-center">
              <Hadding className={'text-lg text-white font-bold font-poppins'} text={'T'} as={'h6'}/>
            </div>
            <div className="">
              <Hadding className={'text-sm text-textC font-poppins font-medium'} text={'Titu Sarkar'} as={'h5'}/>
              <Hadding className={'text-sm text-gray-500 font-outfit font-normal tracking-wider'} text={'01761110819'} as={'h6'}/>
            </div>
            
          </div>
          <div className="flex items-center gap-x-3 py-2">
            <div className="w-10 h-10 rounded-full bg-gray-500 flex justify-center items-center">
              <Hadding className={'text-lg text-white font-bold font-poppins'} text={'K'} as={'h6'}/>
            </div>
            <div className="">
              <Hadding className={'text-sm text-textC font-poppins font-medium'} text={'Kazal Sarkar'} as={'h5'}/>
              <Hadding className={'text-sm text-gray-500 font-outfit font-normal tracking-wider'} text={'01770134368'} as={'h6'}/>
            </div>
            
          </div>
          <div className="flex items-center gap-x-3 py-2">
            <div className="w-10 h-10 rounded-full bg-pink-500 flex justify-center items-center">
              <Hadding className={'text-lg text-white font-bold font-poppins'} text={'K'} as={'h6'}/>
            </div>
            <div className="">
              <Hadding className={'text-sm text-textC font-poppins font-medium'} text={'Kishur Sarkar'} as={'h5'}/>
              <Hadding className={'text-sm text-gray-500 font-outfit font-normal tracking-wider'} text={'01706526920'} as={'h6'}/>
            </div>
            
          </div>
          <div className="lg:w-[450px] w-screen bg-stone-300 h-1 absolute bottom-0 -left-4"></div>
        </div>
        {/* recent Part End */}

        {/* All Contact Part Start  */}

        <div className="py-5">
            <Hadding className={'text-base text-gray-500 py-2 font-poppins font-medium'} text={'All Contact'} as={'h5'}/>
          <div className="flex items-center gap-x-3 py-2">
            <div className="w-10 h-10 rounded-full bg-green-500 flex justify-center items-center">
              <BiUser className='size-5 text-white'/>
            </div>
            <div className="">
              <Hadding className={'text-sm text-textC font-poppins font-medium'} text={'01761110819'} as={'h5'}/>
              <Hadding className={'text-sm text-gray-500 font-outfit font-normal tracking-wider'} text={'01761110819'} as={'h6'}/>
            </div>
            
          </div>
          <div className="flex items-center gap-x-3 py-2">
            <div className="w-10 h-10 rounded-full bg-blue-400 flex justify-center items-center">
              <BiUser className='size-5 text-white'/>
            </div>
            <div className="">
              <Hadding className={'text-sm text-textC font-poppins font-medium'} text={'01747623982'} as={'h5'}/>
              <Hadding className={'text-sm text-gray-500 font-outfit font-normal tracking-wider'} text={'01747623982'} as={'h6'}/>
            </div>
            
          </div>
          <div className="flex items-center gap-x-3 py-2">
            <div className="w-10 h-10 rounded-full bg-gray-500 flex justify-center items-center">
              <BiUser className='size-5 text-white'/>
            </div>
            <div className="">
              <Hadding className={'text-sm text-textC font-poppins font-medium'} text={'01709754326'} as={'h5'}/>
              <Hadding className={'text-sm text-gray-500 font-outfit font-normal tracking-wider'} text={'01709754326'} as={'h6'}/>
            </div>
            
          </div>
          <div className="flex items-center gap-x-3 py-2">
            <div className="w-10 h-10 rounded-full bg-yellow-700 flex justify-center items-center">
              <BiUser className='size-5 text-white'/>
            </div>
            <div className="">
              <Hadding className={'text-sm text-textC font-poppins font-medium'} text={'01734758321'} as={'h5'}/>
              <Hadding className={'text-sm text-gray-500 font-outfit font-normal tracking-wider'} text={'01734758321'} as={'h6'}/>
            </div>
            
          </div>
          <div className="flex items-center gap-x-3 py-2">
            <div className="w-10 h-10 rounded-full bg-green-500 flex justify-center items-center">
              <BiUser className='size-5 text-white'/>
            </div>
            <div className="">
              <Hadding className={'text-sm text-textC font-poppins font-medium'} text={'01761110819'} as={'h5'}/>
              <Hadding className={'text-sm text-gray-500 font-outfit font-normal tracking-wider'} text={'01761110819'} as={'h6'}/>
            </div>
            
          </div>
          <div className="flex items-center gap-x-3 py-2">
            <div className="w-10 h-10 rounded-full bg-pink-500 flex justify-center items-center">
              <BiUser className='size-5 text-white'/>
            </div>
            <div className="">
              <Hadding className={'text-sm text-textC font-poppins font-medium'} text={'01789248746'} as={'h5'}/>
              <Hadding className={'text-sm text-gray-500 font-outfit font-normal tracking-wider'} text={'01789248746'} as={'h6'}/>
            </div>
            
          </div>
          <div className="flex items-center gap-x-3 py-2">
            <div className="w-10 h-10 rounded-full bg-red-800 flex justify-center items-center">
              <BiUser className='size-5 text-white'/>
            </div>
            <div className="">
              <Hadding className={'text-sm text-textC font-poppins font-medium'} text={'01778120934'} as={'h5'}/>
              <Hadding className={'text-sm text-gray-500 font-outfit font-normal tracking-wider'} text={'01778120934'} as={'h6'}/>
            </div>
            
          </div>
        </div>
        {/* All Contact Part End  */}
              
    </div>
    </>
  )
}

export default SendHome