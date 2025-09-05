
import { HiMiniDocumentCurrencyDollar } from "react-icons/hi2";
import Hadding from '../Hadding';
import CashOut from '../../assets/icon/CashOut';
import { FaMobile } from "react-icons/fa6";
import AddMoney from '../../assets/icon/AddMoney';
import PayBill from '../../assets/icon/PayBill';
import Transactions from '../../assets/icon/Transactions';
import Transfer from '../../assets/icon/Transfer';
import GetBonus from '../../assets/icon/GetBonus';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { TbCoinTaka } from "react-icons/tb";
import { GrMagic } from "react-icons/gr";
import Header from "../layout/Header";
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Auto Play Slider Part 

    const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // Auto Play Slider End
  return (
    <>
    <Header/>
    <div className="lg:w-[450px] bg-logoBg m-auto p-4">
      <div className="flex items-center justify-between flex-wrap gap-y-10 pb-10">
        <div className="w-[25%] text-center">
          <Link to={'/sendHome'}>
          <HiMiniDocumentCurrencyDollar className='m-auto size-6 text-green-700'/>
          <Hadding className={'text-xs text-textC font-poppins font-normal pt-2'} text={'Send Money'} as={'h4'}/>
          </Link>
        </div>
        <div className="w-[25%] text-center">
          <CashOut className={'m-auto size-8'}/>
          <Hadding className={'text-xs text-textC font-poppins font-normal'} text={'Cashout'} as={'h4'}/>
        </div>
        <div className="w-[25%] text-center">
          <FaMobile className={'m-auto size-5'}/>
          <Hadding className={'text-xs text-textC font-poppins font-normal pt-2'} text={'Mobile Recharge'} as={'h4'}/>
        </div>
        <div className="w-[25%] text-center">
          <AddMoney className={'m-auto size-6'}/>
          <Hadding className={'text-xs text-textC font-poppins font-normal pt-2'} text={'Add Money'} as={'h4'}/>
        </div>
        
        <div className="w-[25%] text-center">
          <PayBill className={'m-auto size-6'}/>
          <Hadding className={'text-xs text-textC font-poppins font-normal pt-2'} text={'Pay Bill'} as={'h4'}/>
        </div>
        <div className="w-[25%] text-center">
          <Transactions className={'m-auto size-6'}/>
          <Hadding className={'text-xs text-textC pt-2 font-poppins font-normal'} text={'Transactions'} as={'h4'}/>
        </div>
        <div className="w-[25%] text-center">
          <Transfer className={'m-auto size-7'}/>
          <Hadding className={'text-xs text-textC font-poppins font-normal pt-2'} text={'Transfer Money'} as={'h4'}/>
        </div>
        <div className="w-[25%] text-center">
          <GetBonus className={'m-auto size-8'}/>
          <Hadding className={'text-xs text-textC font-poppins font-normal pt-2'} text={'Get Bonus'} as={'h4'}/>
        </div>
        
      </div>

      {/* Bonus Part Start  */}

         <Slider {...settings}>
      <div className="py-20 bg-[url('/src/assets/bonus.png')] bg-no-repeat bg-cover bg-center"></div>
      <div className="py-20 bg-[url('/src/assets/bonusOne.png')] bg-no-repeat bg-cover bg-center"></div>
      <div className="py-20 bg-[url('/src/assets/bonusTwo.png')] bg-no-repeat bg-cover bg-center"></div>

    </Slider>
      {/* Bonus Part End  */}

      {/* Offer Part Start  */}

      <div className="py-10">
          <Slider {...setting} className="-mx-4">
       <div className="p-4">
        <div className="flex items-center justify-between p-5 rounded-md bg-white">
          <div className="flex items-center gap-x-5">
            <div className="">
              <TbCoinTaka className="size-10 text-green-500"/>
            </div>
            <div className="">
          <Hadding className={'text-sm font-poppins text-textC font-normal'} text={'100 Send Money'} as={'h4'}/>
          <Hadding className={'text-xs text-gray-500 pb-2'} text={'30 Days'} as={'h4'}/>
          <div className="p-2 bg-pink-500 flex gap-x-5 rounded">
            <GrMagic className="text-white"/>
          <Hadding className={'text-xs text-textC font-poppins font-medium'} text={'Save ৳ 251'} as={'h4'}/>
          </div>
        </div>
          </div>
        <div className="">
          <Hadding className={'text-base text-textC font-outfit font-medium'} text={"৳ 249.0"} as={'h4'}/>
        </div>
        </div>
       </div>


         <div className="p-4">
          <div className="flex items-center justify-between p-5 rounded-md bg-white">
          <div className="flex items-center gap-x-5">
            <div className="">
              <TbCoinTaka className="size-10 text-green-500"/>
            </div>
            <div className="">
          <Hadding className={'text-sm font-poppins text-textC font-normal'} text={'100 Send Money'} as={'h4'}/>
          <Hadding className={'text-xs text-gray-500 pb-2'} text={'30 Days'} as={'h4'}/>
          <div className="p-2 bg-pink-500 flex gap-x-5 rounded">
            <GrMagic className="text-white"/>
          <Hadding className={'text-xs text-textC font-poppins font-medium'} text={'Save ৳ 251'} as={'h4'}/>
          </div>
        </div>
          </div>
        <div className="">
          <Hadding className={'text-base text-textC font-outfit font-medium'} text={"৳ 249.0"} as={'h4'}/>
        </div>
        </div>
         </div>
         <div className="p-4">
          <div className="flex items-center justify-between p-5 rounded-md bg-white">
          <div className="flex items-center gap-x-5">
            <div className="">
              <TbCoinTaka className="size-10 text-green-500"/>
            </div>
            <div className="">
          <Hadding className={'text-sm font-poppins text-textC font-normal'} text={'100 Send Money'} as={'h4'}/>
          <Hadding className={'text-xs text-gray-500 pb-2'} text={'30 Days'} as={'h4'}/>
          <div className="p-2 bg-pink-500 flex gap-x-5 rounded">
            <GrMagic className="text-white"/>
          <Hadding className={'text-xs text-textC font-poppins font-medium'} text={'Save ৳ 251'} as={'h4'}/>
          </div>
        </div>
          </div>
        <div className="">
          <Hadding className={'text-base text-textC font-outfit font-medium'} text={"৳ 249.0"} as={'h4'}/>
        </div>
        </div>
         </div>
        </Slider>
       
      </div>
      {/* Offer Part End */}
    </div>
    </>
  )
}

export default Home