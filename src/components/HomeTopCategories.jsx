import React from 'react'
import { Link } from 'react-router'

const HomeTopCategories = () => {
  return (
    <div className='h-max px-[35px] md:px-16 py-14'>
        <div className=' flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>Top Categories</h2>
            <Link to="/category-page" className="text-sm hover:underline underline-offset-2 duration-150 transition-all ease-linear text-[#3B82F6] font-medium">See All</Link>
        </div>
    </div>
  )
}

export default HomeTopCategories