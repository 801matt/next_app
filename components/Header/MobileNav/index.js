import Link from "next/link";
import styled from "styled-components";

const InternalMobilNav = styled.div`
  background: blue;
  /* position: relative; */
  /* top: 120px; */

  .mobile-nav--wrapper {
    background: white;
    position: absolute;
    width: 100%;
  }

  ul {
    border-top: solid 1px #efefef;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      a {
        font-size: 20px;
        font-weight: 600;
        color: #2d3743;
        display: inline-block;
        line-height: 80px;
        width: 100%;
        text-align: center;
        border-bottom: solid 1px #efefef;
      }
      a.active {
        color: white;
        background: #c72f3e;
      }
    }
  }

  @media only screen and (min-width: 1140px) {
    display: none;
  }

  @media only screen and (max-width: 1139px) {
    display: block;
  }
`;

const MobileNav = ({ currentPage }) => {
  return (
    <InternalMobilNav>
      <div className="mobile-nav--wrapper">
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className={currentPage === "/" ? "active" : ""}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={currentPage === "/about" ? "active" : ""}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/issues">
                <a className={currentPage === "/issues" ? "active" : ""}>
                  Issues
                </a>
              </Link>
            </li>
            <li>
              <Link href="/solutions">
                <a className={currentPage === "/solutions" ? "active" : ""}>
                  Solutions
                </a>
              </Link>
            </li>
            <li>
              <Link href="/survey">
                <a className={currentPage === "/survey" ? "active" : ""}>
                  Survey
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </InternalMobilNav>
  );
};

export default MobileNav;
