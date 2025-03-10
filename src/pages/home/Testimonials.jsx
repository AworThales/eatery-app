
import React, { useEffect } from "react";
import MyImage from "../../lazyLoadImage/MyImage";
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="md:w-1/2"
        >
          <MyImage
            src="/images/home/testimonials/testimonials.png "
            alt="testimonials"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="md:w-1/2 md:max-w-lg"
        >
          <div className="text-left">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>
          </div>
          <p className="text-secondary text-sm md:text-xl font-medium mt-6">
            “I had the pleasure of dining at Foodi last night, and I&apos;m
            still raving about the experience! The attention to detail in
            presentation and service was impeccable”
          </p>

          <div className=" flex items-center gap-10 mt-8">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <MyImage
                    src="/images/home/testimonials/testimonial1.png "
                    alt="testimonial1"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <MyImage
                    src="/images/home/testimonials/testimonial2.png "
                    alt="testimonial2"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <MyImage
                    src="/images/home/testimonials/testimonial2.png "
                    alt="testimonial2"
                  />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center ">
              <h5 className="font-bold">Customer Feedback</h5>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-300 text-xl" />
                <h6 className="font-bold">4.9</h6>
                <p className="text-[#807E7E] text-sm">(18.6k Reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;