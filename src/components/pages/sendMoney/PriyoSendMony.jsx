import React from 'react'
import Topbar from '../../Topbar'
import Hadding from '../../Hadding'
import { Link } from 'react-router-dom'

const PriyoSendMony = () => {
  return (
    <>
    <Topbar topText={'Priyo Number'}/>
    <div className="lg:w-[450px] bg-logoBg m-auto p-4 pb-[400px] relative">
        <div className="relative pb-4">
            <Hadding className={'text-sm text-stone-500 font-outfit font-normal'} text={'Free Monthly Transaction Limit'} as={'h6'}/>
            <div className="lg:w-[450px] w-screen h-[2px] bg-stone-300 absolute bottom-0 -left-4"></div>
        </div>
        <div className="text-center relative pb-5">
            <Hadding className={'text-base text-stone-500 font-outfit font-normal py-2'} text={'You have used'} as={'h6'}/>
            <p className='text-xl text-pink-700 font-semibold font-poppins tracking-[1px] pb-5'>123</p>
            <Hadding className={'text-sm text-stone-800 font-poppins font-normal'} text={'Free Limit Up To ৳ 25,000.00'} as={'h6'}/>
            <div className="lg:w-[450px] w-screen h-[5px] bg-stone-200 absolute bottom-0 -left-4"></div>
        </div>

        <div className="flex items-center justify-between py-3 relative">
            <Hadding className={'text-sm text-stone-500 font-outfit font-medium'} text={'My Priyo number'} as={'h4'}/>
            <Hadding className={'text-sm text-stone-600 font-outfit font-medium'} text={'1/5 Priyo number'} as={'h4'}/>
            <div className="lg:w-[450px] w-screen h-[2px] bg-stone-200 absolute bottom-0 -left-4"></div>
        </div>

        <div className="py-5 relative">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center"><span className='text-lg text-white font-poppins font-bold'>T</span></div>
                    <div className="">
                        <Link to={'/conformSendMonye'}>
                        <Hadding className={'text-sm text-textC font-poppins font-normal'} text={'Titu Sarkar'} as={'h5'}/>
                        <Hadding className={'text-sm text-stone-500 font-outfit font-normal'} text={'01761110819'} as={'h5'}/>
                        </Link>
                    </div>
                </div>
                <button className='text-base text-red-500 font-poppins font-normal'>Remov</button>
            </div>
            <div className="lg:w-[450px] w-screen h-[2px] bg-stone-200 absolute bottom-0 -left-4"></div>
        </div>

        <div className="bg-pink-600 px-6 py-2 rounded-full absolute bottom-5 right-3">
            <button className='text-base text-white'>+ Add</button>
        </div>
    </div>
    </>
  )
}

export default PriyoSendMony