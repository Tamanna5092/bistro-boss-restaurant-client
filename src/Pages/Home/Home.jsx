import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefService from "../../components/ChefService/ChefService";
import Featured from "../../components/Featured/Featured";
import Menu from "../../components/Menu/Menu";
import CallUs from "../../components/CallUs/CallUs";
import MenuCards from "../../components/MenuCards/MenuCards";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <ChefService></ChefService>
        <Menu></Menu>
        <CallUs></CallUs>
        <MenuCards></MenuCards>
      </div>
      <Featured></Featured>
      <div className="max-w-screen-xl mx-auto">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
