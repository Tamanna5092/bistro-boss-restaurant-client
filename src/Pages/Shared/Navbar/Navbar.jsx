 import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom"; 
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth()
  const { isAdmin } = useAdmin()
  const [cart] = useCart()
  const navOptions = (
    <>
      <li className="uppercase font-medium">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="uppercase font-medium">
        {
          user && isAdmin && <Link to={"/dashboard/adminHome"}>Dashboard</Link>
        }
        {
          user && !isAdmin && <Link to={"/dashboard/userHome"}>Dashboard</Link>
        }
      </li>
      <li className="uppercase font-medium">
        <Link to={"/ourMenu"}>Our menu</Link>
      </li>
      <li className="uppercase font-medium">
        <Link to={""}>Our shop</Link>
      </li>
      <li className="uppercase font-medium">
        <Link to={"/order/salad"}>Order Food</Link>
      </li>
      <li className="uppercase font-medium">
        <Link to={"/contact"}>Contact</Link>
      </li>
    </>
  );

  const handleLogOut = () => {   
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, LogOut!",
        }).then((result) => {
          if (result.isConfirmed) {
            logOut()
            Swal.fire({
              title: "Logged out!",
              text: "Logged out successfully.",
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            });
          }
      })
      .catch((error) => {
        console.error("Logout failed:", error.message);
      });
  };

  return (
    <div className="navbar bg-opacity-30 bg-black absolute top-0 text-white z-10 p-0 md:px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <div className="flex flex-col">
          <a className="text-base font-bold uppercase md:text-xl">
            Bistro boss
          </a>
          <span className="font-medium tracking-[0.02rem] uppercase md:tracking-[0.2rem]">
            Restaurant
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="flex items-center gap-2 mr-2 md:mr-0 navbar-end">
        <Link to={'/dashboard/cart'} className="relative mr-2">
          <button className="text-white text-lg bg-green-600 p-1 rounded-3xl">
          <TiShoppingCart className="w-6 h-6"></TiShoppingCart>
        </button>
        <p className="absolute -bottom-2 -right-2 bg-red-600 text-black rounded-full px-1">{cart.length}</p>
        </Link>
        {user ? (
          <div className="flex items-center gap-2">
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
            <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
          </div>
          <button onClick={handleLogOut} className="uppercase font-medium">
            Sign Out
          </button>
          </div>
        ) : (
          <a className="uppercase font-medium">
            <Link to={"/signIn"}>Sign In</Link>
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
