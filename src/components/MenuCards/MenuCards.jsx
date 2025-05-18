import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const MenuCards = () => {
  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-0">
        <div className="max-w-xs border border-[#BB8506]  dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://i.ibb.co/PrPMgTF/download.jpg"
            alt=""
            className="object-cover object-center w-full h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-2 md:p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl text-center font-semibold tracking-wide">
                Caeser Salad
              </h2>
              <p className="text-center dark:text-gray-800">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
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
      </div>
    </div>
  );
};

export default MenuCards;
