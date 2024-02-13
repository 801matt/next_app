import styled from "styled-components";
import Link from "next/link";

const InternalNav = styled.nav`
  margin-top: -3px;
  font-size: 20px;
  font-weight: 600;
  color: #2d3743;
  .main-nav {
    ul {
      list-style: none;
      display: flex;
      li {
        margin-right: 50px;
        a {
          display: inline-block;
          line-height: 40px;
        }
        a.home {
          border-bottom: solid 3px transparent;
        }
        a.active {
          border-bottom: solid 3px #c72f3e;
        }
      }
    }
  }
  @media only screen and (max-width: 1140px) {
    .main-nav {
      display: none;
    }
  }
`;

const Nav = ({ currentPage }) => {
  return (
    <InternalNav>
      <div className="main-nav">
        <ul>
          <li>
            <Link href="/">
              <a
                className={[currentPage === "/" ? "active" : "", "home"].join(
                  " "
                )}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={currentPage === "/about" ? "active" : ""}>About</a>
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
      </div>
    </InternalNav>
  );
};

export default Nav;
