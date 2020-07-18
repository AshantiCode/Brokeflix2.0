import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./App.css";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay]);

let Carousel = () => {
  const params = {
    effect: "cube",
    speed: 800,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
      stopOnLastSlide: true,
    },
  };

  return (
    <Swiper navigation pagination {...params}>
      <SwiperSlide>
        <img src="./assets/glow-hero2-copy.jpg" className="slide" alt="Glow" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/kimmy-hero2.jpg" className="slide" alt="Kimmy" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/trevor-hero.jpg" className="slide" alt="Trevor" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/orange-hero.jpg" className="slide" alt="Orange" />
      </SwiperSlide>
      <span className="swiper-container" slot="container-start"></span>
      <span slot="container-end"></span>
      <span className="swiper-wrapper" slot="wrapper-start"></span>
      <span slot="wrapper-end"></span>
    </Swiper>
  );
};

export default Carousel;
