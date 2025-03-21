import React from "react";
import MyImage from "../../lazyLoadImage/MyImage";

const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    despriction: "(86 dishes)",
    image: "/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    despriction: "(12 break fast)",
    image: "/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    despriction: "(48 dessert)",
    image: "/images/home/category/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    despriction: "(255 Items)",
    image: "/images/home/category/img4.png",
  },
];

const Catagories = () => {
  return (
    <section className="max-w-screen-xl container mx-auto xl:px-24 px-4 py-16">
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        className="text-center"
      >
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Popular Catagories</h2>
      </div>

      {/* category cards */}
      <div className="flex flex-col sm:flex-row gap-8 md:gap-0 flex-wrap justify-around items-center mt-12 ">
        {categoryItems.map((item, i) => (
          <div
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="300"
            key={i}
            className="shadow-lg rounded-3xl bg-white py-6 w-64 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10"
          >
            <div className="w-full mx-auto flex items-center justify-center">
              <MyImage
                src={item.image}
                alt={item.title}
                className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5 className="text-[#1E1E1E] font-semibold">{item.title}</h5>
              <p className="text-secondary text-sm">{item.despriction}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catagories;