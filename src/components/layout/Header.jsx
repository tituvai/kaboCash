import React from 'react'
import Image from '/src/components/Image'
import kabo from '/src/assets/kabo.png'
import { TbCoinTakaFilled } from "react-icons/tb";
import Hadding from '../Hadding';

const Header = () => {
  return (
    <>
    <div className="lg:w-[450px] bg-logoBg m-auto p-4">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-5">
            <Image className={'w-10 h-10 rounded-full bg-green-200'} imgSrc={kabo}/>
            <div className="">
                <span className='text-sm pl-5 text-textC font-poppins font-normal'>Kabo Sarkar</span>
                <div className="w-[150px] p-1 pl-5 border-1 border-green-500 rounded-full relative">
                    <span className='text-base text-textC font-outfit font-medium'>2000</span>
                    <div className="w-full bg-white flex justify-between items-center rounded-full py-1.5 px-3 absolute top-0 left-0 border-2  border-white">
                        <TbCoinTakaFilled/>
                        <Hadding className={'text-xs text-textC font-poppins font-medium'} text={'Top To Balance'} as={'h4'}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-4 pb-1 border-1 border-gray-500 rounded">
            <span className='text-xs text-textC font-poppins font-medium'>LogOut</span>
        </div>
        </div>
    </div>
    </>
  )
}

export default Header