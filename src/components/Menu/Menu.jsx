import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { key } from "localforage";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [dataLength, setDataLength] = useState(6);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menus.slice(0, dataLength).map((menu) => (
          <div key={menu._id} className="flex flex-col md:flex-row gap-6 justify-center items-center px-4 md:px-0">
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
      <div className="text-center mt-10">
        <Link to={'/allMenu'} className="py-3 px-6 font-semibold uppercase rounded-md bg-[#fffdfd] hover:bg-[#1F2937] text-black hover:text-[#BB8506] hover:border-none border-b-4 border-black">
          View Full Menu
        </Link>
      </div>
    </div>
  );
};

export default Menu;
