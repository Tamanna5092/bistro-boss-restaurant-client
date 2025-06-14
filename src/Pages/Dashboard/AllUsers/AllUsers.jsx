import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useUser from "../../../hooks/useUser";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [users, refetch] = useUser();
  const axiousSecure = useAxiosSecure();

  const handleMakeAdmin = (user) => {
    console.log("Making admin for user:", user);
    axiousSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: `${user.name} is now an admin.`,
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((error) => {
        console.error("Error making admin:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to make admin.",
          icon: "error",
          showConfirmButton: true,
        });
      });
  };

  const handleDeleteUsers = (user) => {
    console.log("Deleting item with id:", user);
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
        axiousSecure.delete(`/users/${user._id}`).then((res) => {
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
        subHeading={"How Many??"}
        heading={"Mange All Users"}
      ></SectionTitle>
      <div className="w-3/4 mx-auto my-10 p-10 bg-[#F3F3F3] rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium uppercase">
            Total Users: {users.length}
          </h1>
        </div>
        {/* table */}
        <div className="w-full overflow-x-auto">
          <table className="table my-4">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] text-white uppercase">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-[#D1A054] text-white"
                      >
                        <FaUsers className="w-5 h-5"></FaUsers>
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUsers(user._id)}
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

export default AllUsers;
