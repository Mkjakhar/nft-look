import React from "react";
import { Col } from "react-bootstrap";
const CategoryCards = ({ val, i }) => {
  return (
    <>
      <Col key={i} sm={6} md={4} xl={3}>
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
    </>
  );
};

export default CategoryCards;
