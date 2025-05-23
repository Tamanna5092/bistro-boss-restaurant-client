import React, { useEffect, useState } from "react";
import Cover from "../Shared/Cover/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const { category } = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
  const [menu] = useMenu();
  const location = useLocation()

  useEffect(() => {
    const index = categories.indexOf(category);
    setTabIndex(index === -1 ? 0 : index);
    document.title = "Bistro Boss | Order";
  }, [category, location.pathname]);

  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
        <Helmet>
                <title>Bistro Boss | Order</title>
              </Helmet>
      <Cover
        img={orderCover}
        title={"Order Food"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <div className="max-w-screen-xl mx-auto text-center my-20">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            {/* defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} */}
          <div className="max-w-screen-sm mx-auto uppercase font-semibold">
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soups</Tab>
              <Tab>Desserts</Tab>
              <Tab>Drinks</Tab>
            </TabList>
          </div>
          <div className="my-10">
            <TabPanel>
              <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={desserts}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks}></OrderTab>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
