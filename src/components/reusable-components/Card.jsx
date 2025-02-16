import React from "react";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const Card = ({
  image,
  title,
  author,
  rating,
  reviews,
  description,
  price,
}) => {
  return (
    <div className="border border-slate-400 rounded-xl p-3">
      {/* Image */}
      <img src={image} alt="card image" className="w-full h-[139px] rounded-xl"/>

      {/* card details */}
      <div className="mt-6">
        <h3 className="text-[18px] font-bold capitalize">{title}</h3>
        <p className="text-sm font-light text-gray-500 my-1">By {author}</p>

        <div className="flex items-center justify-start mb-2">
          <div className="flex items-center justify-start">
            {/* Read about the Array Object */}
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>
                {index < rating ? <IoStar className="text-[#EAB308]"/> : <IoStarOutline className="text-[#EAB308]"/>}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm ml-3 font-medium">({reviews} reviews)</p>
        </div>
        <p className="text-gray-500 font-light text-[12px]">{description}</p>

        <p className="font-bold text-[20px]">${price}</p>
      </div>
    </div>
  );
};

export default Card;
