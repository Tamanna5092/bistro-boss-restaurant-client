import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const OurMenu = () => {
  const location = useLocation();
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");

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
        {/* pizza menu item */}
        <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg} subTitle={"Indulge in our mouthwatering pizza selection, featuring a variety of toppings and styles to satisfy every craving. From classic Margherita to gourmet creations, each pizza is crafted with fresh ingredients and baked to perfection."}></MenuCategory>
        {/* soup menu item */}
        <MenuCategory items={soup} title={"Soup"} img={soupImg} subTitle={"Warm up with our delicious soup selection, featuring a variety of flavors and ingredients to satisfy your cravings. Perfect as a starter or a light meal, our soups are crafted with care to provide comfort and nourishment."}></MenuCategory>
        {/* salad menu item */} 
        <MenuCategory items={salad} title={"Salad"} img={saladImg} subTitle={"Fresh and vibrant, our salad menu offers a delightful array of flavors and textures. From classic Caesar to creative combinations, each salad is crafted with the finest ingredients to provide a refreshing and healthy dining experience."}></MenuCategory>
    </div>
  );
};

export default OurMenu;
