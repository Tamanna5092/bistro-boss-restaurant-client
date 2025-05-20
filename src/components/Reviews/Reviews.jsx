import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json").then((res) =>
      res.json().then((data) => {
        setReviews(data);
        // console.log(data);
      })
    );
  }, []);

  return (
    <section className="my-20">
      <div>
        <SectionTitle
          subHeading={"What Our Clients Say"}
          heading={"Testimonials"}
        ></SectionTitle>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-row justify-center gap-2">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>
              <p className="flex justify-center mt-6">
                <FaQuoteLeft className="w-20 h-20"></FaQuoteLeft>
              </p>
              <p className="my-4 text-center px-4 md:px-0">{review.details}</p>
              <h3 className="text-center text-2xl font-medium mt-2 text-[#BB8506]">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
