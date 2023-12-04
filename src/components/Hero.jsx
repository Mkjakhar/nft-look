import React from "react";
import Header from "./Header";

export const Hero = () => {
  return (
    <>
      <Header />
      <section>
        <div className="hero_bg d-flex flex-column align-items-center">
          <h1 className="fw-semibold fs_6xl ff_playfair text-white text-center mb-0">
            "Best New NFT to look out for"
          </h1>
          <p className="ff_josefin text-white opacity_07 lh_120 fw-semibold text-center fs_sm">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <span className="d-md-block">
              incididunt ut labore et dolore magna aliqua.
            </span>
          </p>
          <div className="hero_logo rounded-pill mx-auto"></div>
          <button className="mx-auto join_btn text-uppercase ff_josefin bg-transparent fs_md fw-semibold rounded-pill">
            JOIN US
          </button>
        </div>
      </section>
    </>
  );
};
