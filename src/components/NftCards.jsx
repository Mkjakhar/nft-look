import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import { Heart } from "./common/Icons";
import { NftCardData } from "./common/Helper";
const NftCards = () => {
  var settings = {
    dots: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "24px",
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "24px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "24px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "24px",
        },
      },
    ],
  };
  return (
    <>
      <Container className="custom_container py-5">
        <h2 className="common_heading pb-4 mb-0">
          Top NFT to look out for in 2022
        </h2>
        <Slider {...settings}>
          {NftCardData.map((val, i) => {
            return (
              <div key={i} className="px_2">
                <div className="nft_cards d-flex flex-column align-items-center">
                  <img className="w-100" src={val.img} alt="nft1" />
                  <p className="text-black w-100 ff_josefin fw-semibold lh_normal fs_2xl mt-2">
                    {val.heading}
                  </p>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <p className="fs_xs fw-semibold mb-0 text-black opacity_07 lh_normal ff_josefin">
                      {val.price}
                    </p>
                    <div className="d-flex align-items-center gap-1">
                      {val.likeimg}
                      <p className="fs_xxs fw-semibold mb-0 text-black opacity_07 lh_normal ff_josefin">
                        {val.likes}
                      </p>
                    </div>
                  </div>
                  <button className="buy_btn fs_md fw-semibold lh_normal ff_josefin rounded-pill text-uppercase bg-transparent">
                    {val.buybtn}
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};

export default NftCards;
