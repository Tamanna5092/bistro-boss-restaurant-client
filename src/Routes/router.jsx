import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AllMenu from "../Pages/AllMenu/AllMenu";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";

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
          path: '/order/:category',
          element: <PrivateRoute><Order></Order></PrivateRoute>,
        },
        {
          path: '/signIn',
          element: <SignIn></SignIn>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
    },
  ]);