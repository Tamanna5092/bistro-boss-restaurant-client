import React from "react";
import MenuItem from "../../components/Menu/MenuItem";
import Cover from "../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, subTitle, img }) => {
  return (
    <div>
      <div>
        {title && <Cover
        img={img}
        title={title}
        subTitle={subTitle}
      ></Cover>}
      </div>
      <div className="max-w-screen-xl mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to={`/order/${title?.toLowerCase()}`} className="py-3 px-6 font-semibold uppercase rounded-md bg-[#fffdfd] hover:bg-[#1F2937] text-black hover:text-[#BB8506] hover:border-none border-b-4 border-black">
          Order Your Favourite Food
        </Link>
      </div>
      </div>
    </div>
  );
};

export default MenuCategory;
