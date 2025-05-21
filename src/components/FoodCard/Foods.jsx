import React, { useState } from "react";
import SectionTitle from "../../Pages/Shared/SectionTitle/SectionTitle";
import FoodCard from "./FoodCard";
import useMenu from "../../hooks/useMenu";

const Foods = () => {
  const [menu] = useMenu()
  const [dataLength, setDataLength] = useState(9);

  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch lg:grid-cols-3 gap-10 px-4 md:px-0">
        {
          menu.slice(0, dataLength).map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
      </div>
    </div>
  );
};

export default Foods;
