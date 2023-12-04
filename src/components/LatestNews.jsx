import React, { useRef } from "react";
import Slider from "react-slick";
import { newsData } from "./common/Helper";
import { NextArrow, PrevArrow } from "./common/Icons";
const LatestNews = () => {
  const mySlider = useRef();
  var settings = {
    dots: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="news" className="container custom_container py-5">
        <h2 className="common_heading text-center pb-4 mb-0">Latest News</h2>
        <div className="position-relative">
          <Slider ref={mySlider} {...settings}>
            {newsData.map((val, i) => (
              <div key={i} className="news_cards_space">
                <div className="news_cards bg-white d-flex flex-column my-3 my-md-4">
                  <img className="w-100" src={val.img} alt="img" />
                  <p className="ff_josefin news_para mb-0 text-black opacity_07 lh_120 fw-semibold fs_sm">
                    {val.para}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="d-flex gap-4 justify-content-center">
            <span
              onClick={() => mySlider.current.slickPrev()}
              className="top-50 next_arrow_position"
            >
              <PrevArrow />
            </span>
            <span
              onClick={() => mySlider.current.slickNext()}
              className="top-50 prev_arrow_position"
            >
              <NextArrow />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
