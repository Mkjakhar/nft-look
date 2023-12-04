import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { categoryData } from "./common/Helper";
import CategoryCards from "./CategoryCards";
const NftCategory = () => {
  const [tabs, setTabs] = useState(2);
  const getCategorySlice = (tabs) => {
    switch (tabs) {
      case 1:
        return categoryData.slice(8, 12);
      case 2:
        return categoryData;
      case 3:
        return categoryData.slice(6, 11);
      case 4:
        return categoryData.slice(2, 8);
      case 5:
        return categoryData.slice(4, 8);
      default:
        return [];
    }
  };
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
          <Row>
            {getCategorySlice(tabs).map((val, i) => (
              <CategoryCards val={val} key={i} />
            ))}
          </Row>
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
