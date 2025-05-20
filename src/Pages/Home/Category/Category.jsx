import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Category = () => {
  return (
      <section className="my-20">
        <SectionTitle 
          subHeading={"From 11.00am to 10.00pm"}
          heading={"Order Online"}>
        </SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
            <img src={slide1} alt="" />
            <div className="absolute inset-0 bg-black/30"></div>
            <h3 className="absolute text-3xl uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">Salads</h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <img src={slide2} alt="" />
            <div className="absolute inset-0 bg-black/30"></div>
            <h3 className="absolute text-3xl uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <img src={slide3} alt="" />
            <div className="absolute inset-0 bg-black/30"></div>
            <h3 className="absolute text-3xl uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">Soupes</h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <img src={slide4} alt="" />
            <div className="absolute inset-0 bg-black/30"></div>
            <h3 className="absolute text-3xl uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">Deseserts</h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <img src={slide5} alt="" />
            <div className="absolute inset-0 bg-black/30"></div>
            <h3 className="absolute text-3xl uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">Salads</h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <img src={slide2} alt="" />
            <div className="absolute inset-0 bg-black/30"></div>
            <h3 className="absolute text-3xl uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <img src={slide3} alt="" />
            <div className="absolute inset-0 bg-black/30"></div>
            <h3 className="absolute text-3xl uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">Soupes</h3>
        </SwiperSlide>
      </Swiper>
      </section>
  );
};

export default Category;
