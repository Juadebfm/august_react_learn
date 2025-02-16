import React from 'react'
import { Link } from 'react-router'
import { IoTelescopeOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { FaReact } from "react-icons/fa";


const HomeTopCategories = () => {
  return (
    <div className='h-max px-[35px] md:px-16 py-14'>
        <div className=' flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>Top Categories</h2>
            <Link to="/category-page" className="text-sm hover:underline underline-offset-2 duration-150 transition-all ease-linear text-[#3B82F6] font-medium">See All</Link>
        </div>

        <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 gap-10'>
          {/* First Box */}
          <div className='flex flex-col items-center justify-center border border-slate-400 rounded-xl p-5 h-[224px] shadow-md hover:shadow-xl cursor-pointer hover:scale-[1.01] duration-200 transition-all ease-linear'>
            <div className='bg-main_skyblue text-main_blue rounded-full h-[80px] w-[80px] flex items-center justify-center'>
              <IoTelescopeOutline size={32}/>
            </div>
            <h3 className='capitalize font-bold text-[20px] m-4'>Astrology</h3>
            <span className='text-[#334155]/60 text-sm'>11 Courses</span>
          </div>
          {/* First Box */}
          <div className='flex flex-col items-center justify-center border border-slate-400 rounded-xl p-5 h-[224px] shadow-md hover:shadow-xl cursor-pointer hover:scale-[1.01] duration-200 transition-all ease-linear'>
            <div className='bg-main_skyblue text-main_blue rounded-full h-[80px] w-[80px] flex items-center justify-center'>
              <FaLaptopCode size={32}/>
            </div>
            <h3 className='capitalize font-bold text-[20px] m-4'>Development</h3>
            <span className='text-[#334155]/60 text-sm'>12 Courses</span>
          </div>
          {/* First Box */}
          <div className='flex flex-col items-center justify-center border border-slate-400 rounded-xl p-5 h-[224px] shadow-md hover:shadow-xl cursor-pointer hover:scale-[1.01] duration-200 transition-all ease-linear'>
            <div className='bg-main_skyblue text-main_blue rounded-full h-[80px] w-[80px] flex items-center justify-center'>
              <FiBriefcase size={32}/>
            </div>
            <h3 className='capitalize font-bold text-[20px] m-4'>Marketing</h3>
            <span className='text-[#334155]/60 text-sm'>12 Courses</span>
          </div>
          {/* First Box */}
          <div className='flex flex-col items-center justify-center border border-slate-400 rounded-xl p-5 h-[224px] shadow-md hover:shadow-xl cursor-pointer hover:scale-[1.01] duration-200 transition-all ease-linear'>
            <div className='bg-main_skyblue text-main_blue rounded-full h-[80px] w-[80px] flex items-center justify-center'>
              <FaReact size={32}/>
            </div>
            <h3 className='capitalize font-bold text-[20px] m-4'>Physics</h3>
            <span className='text-[#334155]/60 text-sm'>14 Courses</span>
          </div>
        </div>
    </div>
  )
}

export default HomeTopCategories