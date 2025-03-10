import React from "react";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddMenu = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  //? Image Hosting Key
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  //? Form Handling
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    try {
      const hostingImage = await axiosPublic.post(
        image_hosting_api,
        imageFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(hostingImage.data);

      // Check whether image conversion was successful
      if (hostingImage.data.success) {
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: hostingImage.data.data.display_url,
        };

        // Menu Item POST to DB
        const postMenuItem = await axiosSecure.post("/menu", menuItem);
        // If success
        if (postMenuItem) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Item is Added!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "This image format is not supported. Please change the image.",
      });
    }
  };

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        Upload A New{" "}
        <span className="text-green underline underline-offset-4">
          Menu Item
        </span>
      </h2>

      {/* Form here */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*  1st Row */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="e.g. : Butter Chicken"
              className="input input-bordered w-full"
            />
          </div>

          {/* 2nd Row */}
          <div className="flex items-center gap-4">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled>Select a catagory</option>
                <option>Popular</option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drink</option>
              </select>
            </div>

            {/*  Price Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="e.g. : 250"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* 3rd Row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Type the product description here..."
            ></textarea>
          </div>

          {/* 4th Row */}
          <div className="form-control w-full max-w-xs my-6">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input  w-full"
            />
          </div>

          {/* Btn */}
          <button className="btn text-white bg-green">
            <FaUtensils /> Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
