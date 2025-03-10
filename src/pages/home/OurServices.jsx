
import React, { useEffect } from "react";
import MyImage from "../../lazyLoadImage/MyImage";

const OurServices = () => {

  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  const serviceLists = [
    {
      id: 1,
      title: "Catering",
      des: "Delight your guests with our flavors and  presentation",
      img: "/images/home/services/icon1.png",
    },
    {
      id: 2,
      title: "Fast delivery",
      des: "We deliver your order promptly to your door",
      img: "/images/home/services/icon2.png",
    },
    {
      id: 3,
      title: "Online Ordering",
      des: "Explore menu & order with ease using our Online Ordering",
      img: "/images/home/services/icon3.png",
    },
    {
      id: 4,
      title: "Gift Cards",
      des: "Give the gift of exceptional dining with Foodi Gift Cards",
      img: "/images/home/services/icon4.png",
    },
  ];
  return (
    <section>
      <section className="section-container py-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div data-aos="fade-right" className="md:w-1/2 md:max-w-xl">
            <div className="text-left">
              <p className="subtitle">Our Story & Services</p>
              <h2 className="title">Our Culinary Journey And Services</h2>
            </div>
            <p className="text-secondary text-sm md:text-xl font-medium my-6">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>
            <button className="btn bg-green transition hover:bg-greenhover px-9 py-1 font-semibold text-white rounded-full shadow-sm border-none shadow-green">
              Explore
            </button>
          </div>

          <div
            data-aos="fade-left"
            className="md:w-1/2 flex-wrap flex gap-8 items-center justify-center"
          >
            {serviceLists.map((service, i) => (
              <div
                key={i}
                className="bg-white flex items-center flex-col gap-4 w-[270px] p-8 text-center rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 "
              >
                <MyImage src={service.img} alt={service.title} />
                <h2 className="text-green font-bold text-2xl">
                  {service.title}
                </h2>
                <p className="text-[#90BD95]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurServices;
