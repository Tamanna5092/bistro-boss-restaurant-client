import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AllMenu from "../Pages/AllMenu/AllMenu";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home> </Home>
        },
        {
          path: '/allMenu',
          element: <AllMenu></AllMenu>
        },
        {
          path: '/ourMenu',
          element: <OurMenu></OurMenu>
        },
        {
          path: '/order',
          element: <Order></Order>
        }
      ]
    },
  ]);