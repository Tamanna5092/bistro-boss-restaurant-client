import React from 'react';

export const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-4 md:px-0">
            <div className="md:w-1/4">
              <img
                className="w-full h-full rounded-[0%_57%_49%_50%_/_0%_52%_48%_76%]"
                src={image}
                alt=""
              />
            </div>
            <div className="md:w-3/4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl uppercase">{name}--------------</h3>
                <span className="text-[#BB8506] text-xl">{price}</span>
              </div>
              <p className="mt-2 text-justify pr-0 md:pr-10">{recipe}</p>
            </div>
          </div>
    );
};

export default MenuItem;