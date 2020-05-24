import React from "react";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "./App.css";

export default class Carousel extends React.Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      effect: "cube",

      centeredSlides: true,
      speed: 700,
      loop: true,
      spaceBetween: 400,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="./assets/glow-hero2-copy.jpg"
              className="slide"
              alt="Glow"
            />
          </div>
          <div className="swiper-slide">
            <img src="./assets/kimmy-hero2.jpg" className="slide" alt="Kimmy" />
          </div>
          <div className="swiper-slide">
            <img
              src="./assets/trevor-hero.jpg"
              className="slide"
              alt="Trevor"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="./assets/orange-hero.jpg"
              className="slide"
              alt="Orange"
            />
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}
