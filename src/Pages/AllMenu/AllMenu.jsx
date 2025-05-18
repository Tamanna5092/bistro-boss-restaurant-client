import React, { useEffect, useState } from 'react';

const AllMenu = () => {
      const [menus, setMenus] = useState([]);
    
      useEffect(() => {
        fetch("menu.json")
          .then((res) => res.json())
          .then((data) => setMenus(data));
        console.log(menus);
      }, []);

    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menus.map((menu) => (
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center border-2 p-4">
            <div className="md:w-1/4">
              <img
                className="w-full h-full rounded-[0%_57%_49%_50%_/_0%_52%_48%_76%]"
                src={menu.image}
                alt=""
              />
            </div>
            <div className="md:w-3/4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl uppercase">{menu.name}--------------</h3>
                <span className="text-[#BB8506] text-xl">{menu.price}</span>
              </div>
              <p className="mt-2 text-justify pr-0 md:pr-10">{menu.recipe}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default AllMenu;