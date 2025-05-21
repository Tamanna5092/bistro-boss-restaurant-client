import React from "react";

const FoodCard = ({ item }) => {
    const { image, name, recipe } = item;
    
  return (
    <div className="border border-[#BB8506]  dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between flex-grow p-2 md:p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl text-center font-semibold tracking-wide">
            {name}
          </h2>
          <p className="text-center dark:text-gray-800">
            {recipe.slice(0, 70)}
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide uppercase rounded-md bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-none border-b-4 border-[#BB8506] dark:bg-violet-600 dark:text-gray-50"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
