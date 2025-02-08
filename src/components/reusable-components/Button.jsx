import React from 'react'

const Button = ({btnText, btnStyle}) => {
  return (
    <div className={`${btnStyle} flex items-center px-3 hover:cursor-pointer hover:shadow-md hover:shadow-main_heading/30 duration-300 transition-all ease-linear`}>{btnText}</div>
  )
}

export default Button


