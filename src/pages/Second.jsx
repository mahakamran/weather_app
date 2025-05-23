import React from 'react'
import img from '../images/maha.png'
import { NavLink } from 'react-router-dom';

const Second = () => {
  return (
    <div className="w-full min-h-screen m-0 p-0 bg-gradient-to-r from-[#3a1c71] to-[#5f3dc4] flex items-start justify-center">
      <div id='box' className='bg-white pt-4'>
        <img src={img} className='w-32 h-32 ml-4' alt="" />
        <h1 className='text-yellow-500 font-normal pt-0 pl-[15px]'>Weather</h1>
        <h1 className='text-white font-normal pl-[15px]'>Forecast App.</h1>
        <p className='text-[7px] pl-[15px] pt-3 text-white font-normal'>This is a weather Forecast App to see the</p>
        <p className='text-[7px] pl-[15px] text-white font-normal'>This is a weather Forecast App weather app</p>
        <p className='text-[7px] pl-[15px] text-white font-normal'>use it either</p>
        <NavLink
          to="/maha"
          className="w-[100px] ml-[30px] mt-4 h-[20px] inline-flex items-center justify-center border-none bg-yellow-500 font-normal text-[9px] rounded-[5px] text-white"
        >
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default Second;
