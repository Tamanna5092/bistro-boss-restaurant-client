import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure, { axiousSecure } from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiousSecure = useAxiosSecure()
  const [, refetch] = useCart()

  const handleAddToCart = () => {
    console.log("Adding to cart");
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiousSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top",
            title: "Good job!",
            text: `${name} has been added to your cart.`,
            showConfirmButton: false,
            timer: 1500,
            icon: "success",
          });
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "Your are not logged in",
        text: "Please login to add items to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signIn", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="border border-[#BB8506]  dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between flex-grow p-2 md:p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl text-center font-semibold tracking-wide">
            {name}
          </h2>
          <p className="text-center dark:text-gray-800">
            {recipe.slice(0, 70)}
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide uppercase rounded-md bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-none border-b-4 border-[#BB8506] dark:bg-violet-600 dark:text-gray-50"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
