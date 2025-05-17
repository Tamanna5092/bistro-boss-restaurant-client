import React from "react";
import chefSevice from "../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div className="relative my-10">
      <img
        className="w-full h-[450px] bg-cover object-center"
        src={chefSevice}
        alt=""
      />
      <div className="absolute inset-0 m-6 md:m-20 bg-white bg-opacity-80 backdrop-blur-md flex justify-center items-center px-4">
        <div className="text-center max-w-4xl p-4 md:p-10">
          <h1 className="text-2xl md:text-4xl uppercase mb-4">Bistro Boss</h1>
          <p>
            Our chefs are dedicated to providing the highest quality service,
            ensuring that every dish is prepared with care and precision. From
            classic recipes to innovative culinary creations, our chefs bring a
            wealth of experience and passion to every meal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
