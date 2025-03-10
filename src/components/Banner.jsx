import React from "react";
import MyImage from "../lazyLoadImage/MyImage";

const Banner = () => {
  return (
    <section className="section-containar bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
      <div className="py-8 flex flex-col md:flex-row-reverse justify-center items-center gap-8">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="md:w-1/2"
        >
          <div className="w-[100%] md:w-[630px] ">
            <MyImage
              alt="banner"
              src="/images/home/banner.png"
              className="w-full object-contain"
            />
          </div>

          <div className="flex justify-between items-center -mt-14  ">
            <div className="flex px-3 md:w-[300px] bg-white shadow-lg rounded-2xl py-2 px3 items-center justify-start gap-3">
              <MyImage
                className="rounded-xl "
                src="/images/home/b-food1.png"
                alt="food1"
              />
              <div className="">
                <h5 className="font-semibold mb-1">Vegetarian salad</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-300"
                    defaultChecked
                  />
                </div>
                <p className="font-semibold text-[#515151]">
                  <span className="text-red ">$</span>23.00
                </p>
              </div>
            </div>
            <div className="hidden md:flex px-3 w-[300px] bg-white shadow-lg rounded-2xl py-2 px3 items-center gap-3">
              <MyImage
                className="rounded-xl "
                src="/images/home/b-food1.png"
                alt="food1"
              />
              <div className="">
                <h5 className="font-semibold mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-300"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                </div>
                <p className="font-semibold text-[#515151]">
                  <span className="text-red ">$</span>18.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="md:w-1/2  space-y-8 md:max-w-lg"
        >
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable
            <span className="text-green"> Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-sm md:text-xl font-[500]">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <div className=" flex gap-4 items-center justify-start">
            <button className="btn bg-green transition hover:bg-greenhover px-9 py-1 font-semibold text-white rounded-full shadow-sm border-none shadow-green">
              Order Now
            </button>
            <button className="btn text-[#4D4D4D] shadow-none px-8 border-none font-semibold rounded-full flex items-center justify-center bg-transparent hover:bg-gray-100 gap-3">
              Watch Video
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 28"
                  fill="none"
                >
                  <path
                    d="M22.5 11.4019C24.5 12.5566 24.5 15.4434 22.5 16.5981L4.49999 26.9904C2.49999 28.1451 -1.34201e-06 26.7017 -1.24107e-06 24.3923L-3.32543e-07 3.60769C-2.31596e-07 1.29829 2.5 -0.145083 4.5 1.00962L22.5 11.4019Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;