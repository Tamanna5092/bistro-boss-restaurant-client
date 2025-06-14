import React from "react";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiouPublic from "../../../hooks/useAxiouPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiouPublic();
  const axiousSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get the url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("image upload response --->", res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiousSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset()
        Swal.fire({
          title: `${data.name} has been added to the menu.`,
          showConfirmButton: false,
          icon: "success",
          timer: 1000,
        });
      }
    }
  };

  return (
    <section>
      <SectionTitle
        subHeading={"What's new?"}
        heading={"Add an item"}
      ></SectionTitle>
      <div className="my-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container w-full max-w-4xl p-4 md:p-20 mx-auto bg-[#F3F3F3] space-y-6 shadow dark:bg-gray-50"
        >
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Recipe name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="block mb-1 ml-1">
                Category
              </label>
              <select
                {...register("category", { required: true })}
                className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block mb-1 ml-1">
                Price
              </label>
              <input
                {...register("price", { required: true })}
                className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                type="number"
                placeholder="Price"
              />
            </div>
          </div>
          <div>
            <label htmlFor="recipe" className="block mb-1 ml-1">
              Recipe Details
            </label>
            <textarea
              {...register("recipe", { required: true })}
              type="text"
              placeholder="Recipe Details..."
              className="block w-full h-40 border-2 p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            ></textarea>
          </div>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center px-6 py-2 text-center rounded-sm text-white bg-gradient-to-r from-[#835D23] to-[#B58130] dark:text-gray-50 dark:bg-violet-600"
            >
              Add Item
              <span>
                <FaUtensils className="w-5 h-5 ml-2" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddItems;
