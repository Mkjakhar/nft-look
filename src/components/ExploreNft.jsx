import React from "react";
import { Container } from "react-bootstrap";
import { ExploreCardData } from "./common/Helper";
const ExploreNft = () => {
  return (
    <>
      <Container id="explore" className="custom_container py-md-4">
        <h2 className="common_heading pb-4 mb-3">Explore top NFT</h2>
        {ExploreCardData.map((val, i) => (
          <div
            key={i}
            className="explore_cards text-center text-md-start d-flex flex-column flex-md-row align-items-center"
          >
            <div>
              <img
                width={207}
                height={211}
                className="object_style rounded_25"
                src={val.img}
                alt="img"
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="text-black w-100 ff_josefin fw-semibold lh_normal fs_4xl mb-2">
                {val.heading}
              </p>
              <p className="ff_josefin explore_para mb-0 text-black opacity_07 lh_120 fw-semibold fs_sm">
                {val.para}
              </p>
              <div className="d-flex align-items-center justify-content-between w-100">
                <p className="fs_2xxl fw-semibold mb-0 text-black opacity_07 lh_normal ff_josefin">
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
        ))}
      </Container>
    </>
  );
};

export default ExploreNft;
