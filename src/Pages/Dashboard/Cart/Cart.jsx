import React from "react";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiousSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDeleteItem = (id) => {
    console.log("Deleting item with id:", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiousSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading={"My Cart"}
        heading={"Wanna add more?"}
      ></SectionTitle>
      <div className="w-3/4 mx-auto my-10 p-10 bg-[#F3F3F3] rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium uppercase">
            Total Orders: {cart.length}
          </h1>
          <h1 className="text-3xl font-medium uppercase">
            Total Price: ${totalPrice}
          </h1>
          <button className="text-white px-4 bg-[#D1A054] uppercase">
            Pay
          </button>
        </div>
        {/* table */}
        <div className="w-full overflow-x-auto">
          <table className="table my-4">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] text-white uppercase">
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(item._id)}
                      className="btn bg-[#B91C1C] text-white"
                    >
                      <MdOutlineDeleteForever className="w-5 h-5"></MdOutlineDeleteForever>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
