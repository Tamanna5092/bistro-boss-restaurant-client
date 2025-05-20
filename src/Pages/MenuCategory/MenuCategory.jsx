import React from "react";
import MenuItem from "../../components/Menu/MenuItem";
import Cover from "../Shared/Cover/Cover";

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
      </div>
    </div>
  );
};

export default MenuCategory;
