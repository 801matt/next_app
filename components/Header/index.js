import styled from "styled-components";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

const StyledHeader = styled.header`
  .mobile-nav--icon {
    position: absolute;
    right: 40px;
    width: 34px;
    cursor: pointer;
    .hamburger-menu {
      width: 100%;
    }
    .close-menu {
      width: 100%;
    }
  }
  .header-markup {
    color: #222;
    padding: 0px 40px;
    height: 120px;
    background: #fff;
    /* line-height: 90px; */
    display: flex;
    align-items: center;
    h1 {
      margin-top: 6px;
      font-family: "Montserrat";
      font-size: 24px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: -1px;
      margin-right: 34px;
      position: relative;
      z-index: 999999999;
      cursor: pointer;
      .jackson {
        /* font-style: italic; */
      }
      .number {
        font-style: italic;
        color: #174793;
        font-size: 32px;
      }
    }
    .headerCTA {
      /* color: red; */
      /* background: blue; */
      width: 100%;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      .cta-btn {
        /* width: 187px; */
        padding: 0px 40px;
        background: #c72f3e;
        color: white;
        display: block;
        /* height: 55px; */
        line-height: 55px;
        border-radius: 6px;
        cursor: pointer;
        &:hover {
          background: #d13a49;
        }
      }
    }
  }
  @media only screen and (min-width: 1141px) {
    .header-markup {
      .mobile-nav--icon {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 1140px) {
    .header-markup {
      h1 {
        margin-top: 5px;
      }
      .headerCTA {
        .cta-btn {
          display: none;
        }
      }
    }
  }
`;

const Header = ({ currentPage }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <StyledHeader>
      <div className="header-markup">
        <Link href="/">
          <h1>
            <span className="jackson">Jackson</span>
            <span className="number">4</span>Utah
          </h1>
        </Link>
        <div className="mobile-nav--icon">
          {mobileMenuIsOpen ? (
            <img
              src="ico.png"
              className="close-menu"
              onClick={() => setMobileMenuIsOpen(false)}
            />
          ) : (
            <img
              src="mobile-nav.png"
              className="hamburger-menu"
              onClick={() => setMobileMenuIsOpen(true)}
            />
          )}
        </div>
        <Nav currentPage={currentPage} />
        <div className="headerCTA">
          <div className="cta-btn--wrapper">
            <Link href="/contact">
              <a className="cta-btn">Reach Andrew</a>
            </Link>
          </div>
        </div>
      </div>
      {mobileMenuIsOpen && (
        <MobileNav currentPage={currentPage} className="mobile-nav" />
      )}
    </StyledHeader>
  );
};

export default Header;
