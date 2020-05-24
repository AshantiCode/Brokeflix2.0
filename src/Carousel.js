import React from "react";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "./App.css";

export default class Carousel extends React.Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      speed: 400,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            1
            <img src="../public/assets/glow-hero2.jpg" alt="" />
          </div>
          <div className="swiper-slide">
            2
            <img src="../public/assets/kimmy-hero2.jpg" alt="" />
          </div>
          <div className="swiper-slide">
            3
            <img src="../public/assets/trevor-hero.jpg" alt="" />
          </div>
          <div className="swiper-slide">
            4
            <img src="../public/assets/orange-hero.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
