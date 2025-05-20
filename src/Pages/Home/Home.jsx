import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefService from "../../components/ChefService/ChefService";
import Featured from "../../components/Featured/Featured";
import Menu from "../../components/Menu/Menu";
import CallUs from "../../components/CallUs/CallUs";
import MenuCards from "../../components/MenuCards/MenuCards";
import Reviews from "../../components/Reviews/Reviews";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Home = () => {
const location = useLocation()

useEffect(() => {
  document.title = "Bistro Boss | Home";
}, [location.pathname])

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
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
