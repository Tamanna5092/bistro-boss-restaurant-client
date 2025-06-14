import React from "react";
import { BiSolidWallet } from "react-icons/bi";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome, IoMdMail } from "react-icons/io";
import { IoList } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { TbBookmarksFilled } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin()


  return (
    <div className="flex flex-col md:flex-row items-start justify-between">
      {/* dashboard sidebar */}
      <div className="w-full md:w-64 min-h-screen bg-[#D1A054] dark:bg-gray-800 p-6 shadow-md">
        <div className="flex flex-col">
          <a className="text-base font-bold uppercase md:text-xl">
            Bistro boss
          </a>
          <span className="font-medium tracking-[0.02rem] uppercase md:tracking-[0.2rem]">
            Restaurant
          </span>
        </div>
        <div className="mt-10">
          <ul className="space-y-3">
            {
              isAdmin? <>
               <li>
              <NavLink
                to={"/dashboard/adminHome"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <IoMdHome className="w-5 h-5 mr-2"></IoMdHome>
                Admin home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/addItems"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <FaUtensils className="w-5 h-5 mr-2"></FaUtensils>
                Add items
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/manageItems"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <IoList className="w-5 h-5 mr-2"></IoList>
                Manage items
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/mangeBooking"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <FaBook className="w-5 h-5 mr-2"></FaBook>
                Manage Booking
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/allUsers"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <FaUsers className="w-5 h-5 mr-2"></FaUsers>
                All users
              </NavLink>
            </li>
              </>
              :
              <>
              <li>
              <NavLink
                to={"/dashboard/home"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <FaHome className="w-5 h-5 mr-2"></FaHome>
                User home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/reservation"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <FaCalendar className="w-5 h-5 mr-2"></FaCalendar>
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/payment-history"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <BiSolidWallet className="w-5 h-5 mr-2"></BiSolidWallet>
                Payment History
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/cart"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <FaShoppingCart className="w-5 h-5 mr-2"></FaShoppingCart>
                My cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/review"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <MdRateReview className="w-5 h-5 mr-2"></MdRateReview>
                Add review
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/booking"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <TbBookmarksFilled className="w-5 h-5 mr-2"></TbBookmarksFilled>
                My booking
              </NavLink>
            </li>
              </>
            }
            <div>
              <hr className="my-10" />
            </div>
            <li>
              <NavLink
                to={"/"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <FaHome className="w-5 h-5 mr-2"></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/allMenu"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <GiHamburgerMenu className="w-5 h-5 mr-2"></GiHamburgerMenu>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <FaShoppingBag className="w-5 h-5 mr-2"></FaShoppingBag>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="flex items-center uppercase hover:text-white dark:text-gray-300 hover:underline"
              >
                <IoMdMail className="w-5 h-5 mr-2"></IoMdMail>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* dashboard main content */}
      <div className="w-full flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
