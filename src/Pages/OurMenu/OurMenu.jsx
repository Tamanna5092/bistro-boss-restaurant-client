import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const OurMenu = () => {
  const location = useLocation();
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  useEffect(() => {
    document.title = "Bistro Boss | Our Menu";
  }, [location.pathname]);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={coverImg}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      ></Cover> 
        <SectionTitle
        heading={"Today's Offers"}
        subHeading={"Don't miss"}
        ></SectionTitle>
        {/* offered menu item */}
        <MenuCategory items={offered}></MenuCategory>
        {/* dessert menu item */}
        <MenuCategory items={dessert} title={"Dessert"} img={dessertImg} subTitle={"Desserts are the perfect way to end a meal, offering a delightful mix of flavors and textures. From creamy cakes to fruity treats, our dessert menu is crafted to satisfy your sweet cravings and leave you with a memorable dining experience."}></MenuCategory>
      
    </div>
  );
};

export default OurMenu;
