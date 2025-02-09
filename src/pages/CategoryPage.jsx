import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const CategoryPage = () => {
  // to use the reservior of the context we say:
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); //accessing theme data
  return (
    <div className='min-h-screen bg-blue-500 dark:bg-purple-500 text-black'>CategoryPage</div>
  )
}

export default CategoryPage