import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { categoryData } from "./common/Helper";
const NftCategory = () => {
  const [tabs, setTabs] = useState(2);
  return (
    <>
      <div className="container custom_container py-5">
        <h2 className="common_heading text-center pb-4 mb-0">
          Top NFT by Category
        </h2>
        <p className="ff_josefin max_w_800 mt-1 mx-auto pb-sm-4 pb-lg-5 mb-3 text-center explore_para mb-0 text-black opacity_07 lh_120 fw-semibold fs_sm">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </p>
        <div className="d-flex justify-content-center flex-wrap gap-2 gap-md-4">
          <button
            onClick={() => setTabs(1)}
            className={`tabs_btn border-0 text-black fs_2xl fw-medium ff_josefin ${
              tabs === 1 ? "text-white bg-black" : ""
            }`}
          >
            Sport
          </button>
          <button
            onClick={() => setTabs(2)}
            className={`tabs_btn border-0 text-black fs_2xl fw-medium ff_josefin ${
              tabs === 2 ? "text-white bg-black" : ""
            }`}
          >
            Art
          </button>
          <button
            onClick={() => setTabs(3)}
            className={`tabs_btn border-0 text-black fs_2xl fw-medium ff_josefin ${
              tabs === 3 ? "text-white bg-black" : ""
            }`}
          >
            Music
          </button>
          <button
            onClick={() => setTabs(4)}
            className={`tabs_btn border-0 text-black fs_2xl fw-medium ff_josefin ${
              tabs === 4 ? "text-white bg-black" : ""
            }`}
          >
            Fashion
          </button>
          <button
            onClick={() => setTabs(5)}
            className={`tabs_btn border-0 text-black fs_2xl fw-medium ff_josefin ${
              tabs === 5 ? "text-white bg-black" : ""
            }`}
          >
            Memes
          </button>
        </div>
        <div className="mt-5 pt-md-4">
          {tabs === 1 && (
            <Row>
              {categoryData.slice(8, 12).map((val, i) => {
                return (
                  <Col sm={6} md={4} xl={3}>
                    <div className="nft_cards category_cards d-flex flex-column align-items-center">
                      <p className="text-black w-100 ff_josefin fw-semibold lh_normal fs_md mb-2">
                        {val.rank}
                      </p>
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
                  </Col>
                );
              })}
            </Row>
          )}
          {tabs === 2 && (
            <Row>
              {categoryData.map((val, i) => {
                return (
                  <Col sm={6} md={4} xl={3}>
                    <div className="nft_cards category_cards d-flex flex-column align-items-center">
                      <p className="text-black w-100 ff_josefin fw-semibold lh_normal fs_md mb-2">
                        {val.rank}
                      </p>
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
                  </Col>
                );
              })}
            </Row>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <button className="view_btn text-black mt-1 fs_2xl fw-medium ff_josefin text-white bg-black rounded-pill">
            View more
          </button>
        </div>
      </div>
    </>
  );
};

export default NftCategory;
