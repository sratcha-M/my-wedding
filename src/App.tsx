import { Swiper, SwiperSlide } from "swiper/react";

import "./App.css";
import "swiper/css";

const App = () => {
  return (
    <>
      <div>
        <h1>Welcome to My Wedding</h1>
        <p>We're so glad you're here to celebrate with us!</p>
      </div>
      <div className="mx-6">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
};

export default App;
