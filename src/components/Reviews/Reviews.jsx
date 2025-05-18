import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <section className="my-20">
      <div>
        <SectionTitle
          subHeading={"What Our Clients Say"}
          heading={"Testimonials"}
        ></SectionTitle>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-row justify-center gap-2">
              <span>
                <FaStar className="w-6 h-6 text-[#CD9003]"></FaStar>
              </span>
              <span>
                <FaStar className="w-6 h-6 text-[#CD9003]"></FaStar>
              </span>
              <span>
                <FaStar className="w-6 h-6 text-[#CD9003]"></FaStar>
              </span>
              <span>
                <FaStar className="w-6 h-6 text-[#CD9003]"></FaStar>
              </span>
              <span>
                <FaStar className="w-6 h-6 text-[#A1A1A1]"></FaStar>
              </span>
            </div>
            <p className="flex justify-center mt-6"><FaQuoteLeft className="w-20 h-20"></FaQuoteLeft></p>
            <p className="my-4 text-center px-4 md:px-0">
              Their professionalism, attention to detail, and dedication to
              delivering high-quality results truly set them apart. From start
              to finish, they listened to our needs, communicated clearly, and
              exceeded our expectations.
            </p>
            <h3 className="text-center text-2xl font-medium mt-2 text-[#BB8506]">Jon Doe</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Reviews;
