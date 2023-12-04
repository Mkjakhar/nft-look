import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { PageLogo, Search } from "./common/Icons";

const Header = () => {
  const [resNav, setresNav] = useState(true);
  if (resNav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <React.Fragment>
      <Nav className="bg-white">
        <Container className="py-1 custom_container d-flex justify-content-between align-items-center">
          <span>
            <PageLogo />
          </span>
          <div className="d-flex align-items-center">
            <form>
              <div className="search_bar w-100 rounded-pill overflow-hidden d-flex align-items-center gap-2">
                <Search />
                <input
                  type="text"
                  placeholder="Search..."
                  className="text_darkblack w-100 fw-normal border-0 ff_josefin bg-transparent"
                />
              </div>
            </form>
            <button
              onClick={() => setresNav(false)}
              className="menu_btn d-flex flex-column justify-content-between d-lg-none align-items-start"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className="list-unstyled d-none d-lg-flex nav_list_gap align-items-center mb-0 ps-0">
              <li>
                <a
                  href="#Profile"
                  className="nav_list text-black opacity_06 ff_josefin fw-medium fs_sm"
                >
                  My Profile
                </a>
              </li>
              <li>
                <a
                  href="#Profile"
                  className="nav_list text-black opacity_06 ff_josefin fw-medium fs_sm"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="#Profile"
                  className="nav_list text-black opacity_06 ff_josefin fw-medium fs_sm"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#Profile"
                  className="nav_list text-black opacity_06 ff_josefin fw-medium fs_sm"
                >
                  Activity
                </a>
              </li>
              <li>
                <button className="ff_josefin text-white fs_md text-uppercase fw-semibold bg-black rounded-pill sign_btn">
                  SIGN IN
                </button>
              </li>
            </ul>
          </div>
          <div
            className={`d-flex justify-content-center ${
              resNav ? "responsive_nav" : "responsive_nav show_nav"
            }`}
          >
            <button
              onClick={() => setresNav(true)}
              className="btn btn-close btn-close-black fs-3 position-absolute top-0 end-0 mt-3 me-3"
            ></button>
            <ul className="list-unstyled flex-column justify-content-center d-flex d-lg-none gap-4 align-items-center mb-0 ps-0">
              <li onClick={() => setresNav(true)}>
                <a
                  href="#Profile"
                  className="nav_list text-black opacity_06 ff_josefin fw-medium fs_sm"
                >
                  My Profile
                </a>
              </li>
              <li onClick={() => setresNav(true)}>
                <a
                  href="#Profile"
                  className="nav_list text-black opacity_06 ff_josefin fw-medium fs_sm"
                >
                  Explore
                </a>
              </li>
              <li onClick={() => setresNav(true)}>
                <a
                  href="#Profile"
                  className="nav_list text-black opacity_06 ff_josefin fw-medium fs_sm"
                >
                  News
                </a>
              </li>
              <li onClick={() => setresNav(true)}>
                <a
                  href="#Profile"
                  className="nav_list text-black opacity_06 ff_josefin fw-medium fs_sm"
                >
                  Activity
                </a>
              </li>
              <li onClick={() => setresNav(true)}>
                <button className="ff_josefin text-white fs_md text-uppercase fw-semibold bg-black rounded-pill sign_btn">
                  SIGN IN
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </Nav>
    </React.Fragment>
  );
};

export default Header;
