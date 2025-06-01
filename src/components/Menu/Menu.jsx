import React, { useState } from "react";
import SectionTitle from "../../Pages/Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')
  const [dataLength, setDataLength] = useState(6);

  return (
    <div>
      <SectionTitle
        subHeading={"Popular Items"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {popular.slice(0, dataLength).map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
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
