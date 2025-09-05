import React from 'react'
import Topbar from '../../Topbar'
import Hadding from '../../Hadding'
import Button from '../../Button'

const ConformSendMonye = () => {
  return (
    <>
    <Topbar topText={'Send Money'}/>
    <div className="lg:w-[450px] bg-logoBg m-auto p-4 pb-[400px] relative">
        <div className="pb-5 relative">
            <Hadding className={'text-sm text-stone-500 font-poppins font-normal'} text={'Recipient'} as={'h6'}/>
            <div className="flex items-center gap-x-3 pt-5">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center"><span className='text-lg text-white font-poppins font-bold'>T</span></div>
                    <div className="">
                        <Hadding className={'text-sm text-textC font-poppins font-normal'} text={'Titu Sarkar'} as={'h5'}/>
                        <Hadding className={'text-sm text-stone-500 font-outfit font-normal'} text={'01761110819'} as={'h5'}/>
                    </div>
                    <div className="lg:w-[450px] w-screen h-[3px] bg-stone-200 absolute bottom-0 -left-4"></div>
                </div>
        </div>

        <div className="relative py-5">
            <Hadding className={'text-base text-stone-500 font-outfit font-medium'} text={'Amount'} as={'h4'}/>
            <div className="text-center py-5">
                <input className='outline-0 p-2 text-2xl text-pink-600 font-poppins font-semibold text-center' type="text" placeholder='00.00'/>
            </div>
            <Hadding className={'text-sm text-stone-700 font-outfit font-normal text-center'} text={<><span>Available Blanace</span> <span className='text-textC'>৳ 33.5</span></>} as={'h4'}/>
            <div className="lg:w-[450px] w-screen h-[3px] bg-stone-200 absolute bottom-0 -left-4"></div>
        </div>
        <button className='lg:w-[420px] w-screen text-base text-white font-outfit font-medium text-center bg-pink-600 py-2 absolute bottom-1 left-1/2 -translate-x-1/2'>Proceed</button>
    </div>
    </>
  )
}

export default ConformSendMonye