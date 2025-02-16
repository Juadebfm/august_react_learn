import React from 'react'
import { useModal } from '../context/ModalContext';

const CategoryPage = () => {
  const {openModal} = useModal();
  return (
    <div className='mt-32'>
      <button
        onClick={() => {
          openModal("We are in the category page");
        }}
        className='py-3 px-6 bg-blue-500 text-white dark:bg-yellow-500 dark:text-black'
      >
        Open Modal
      </button>
    </div>
  )
}

export default CategoryPage