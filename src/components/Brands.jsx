// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import cliente from "../assets/img/proveedor1.jpg";
import cliente2 from "../assets/img/proveedor2.png";
import cliente3 from "../assets/img/proveedor3.png";
import cliente4 from "../assets/img/proveedor4.jpg";
import cliente5 from "../assets/img/proveedor5.png";
import cliente6 from "../assets/img/proveedor6.png";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

export default function Brands({ title }) {
  return (
    <>
      <div className="text-center ">
        <h1 className=" pt-5">{title}</h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente5} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrado ">
            <img className="brands-width" src={cliente6} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
