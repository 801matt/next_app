import Link from "next/link";
import styled from "styled-components";

const InternalShapeDividerContainer = styled.div`
  position: relative;
  /* height: 200px; */
  height: 200px;
  margin-top: -200px;
`;

const InternalShapeDivider = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0%;
  width: 100%;
  height: 100%;
  /* width: 100%;
  left: 0;
  bottom: 200px;
  height: 100%;
  position: absolute; */
`;

const InternalHeroContainer = styled.section`
  color: blue;
`;

const Hero = styled.div`
  color: white;
  background-image: url("/hero-4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  /* background-attachment: fixed; */
  height: 700px;
  z-index: 111;
  padding: 20px;
  display: flex;
  align-items: center;
  .hero-content {
    margin-top: -55px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .hero-content--text {
      color: white;
      font-size: 46px;
      font-weight: 500;
      max-width: 550px;
      text-align: center;
    }
    .hero-content--cta {
      margin-top: 32px;
      font-size: 18px;
      /* max-width: 187px; */
      padding: 0 40px;
      background: #c72f3e;
      color: white;
      line-height: 55px;
      border-radius: 6px;
      cursor: pointer;
      &:hover {
        background: #d13a49;
      }
    }
  }
  @media only screen and (max-width: 1140px) {
    .hero-content {
      margin-top: -140px;
      width: 100%;
      .hero-content--text {
        width: 100%;
      }
    }
  }
`;
const ShapeDivider = () => {
  return (
    <InternalHeroContainer>
      <Hero>
        <div className="hero-content">
          <div className="hero-content--text">
            {/* A Vote for Me is a Vote For You. */}
            {/* A Lifetime of Dedication to the Heart of Utah County */}
            {/* Keeping YOU at the Center of Utah County. */}
            {/* Andrew Jackson is a Proven Leader in Conservative Values. */}
            {/* Andrew Jackson is a Proven Leader with Strong Conservative Values. */}
            {/* Vote for Andrew, A Proven Leader with Strong Conservative Values. */}
            {/* A Vision for Utah County where YOUR voice is heard. */}
            Andrew is a Proven Republican Leader with Strong Conservative
            Values.
          </div>
          <Link href="volunteer">
            <a className="hero-content--cta">Join Andrew</a>
          </Link>
        </div>
      </Hero>
      <InternalShapeDividerContainer>
        <InternalShapeDivider
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 300"
          preserveAspectRatio="none"
        >
          <path
            d="M 1014 264 v 122 h -808 l -172 -86 s 310.42 -22.84 402 -79 c 106 -65 154 -61 268 -12 c 107 46 195.11 5.94 275 137 z"
            opacity="0.1"
          ></path>
          <path
            d="M -302 55 s 235.27 208.25 352 159 c 128 -54 233 -98 303 -73 c 92.68 33.1 181.28 115.19 235 108 c 104.9 -14 176.52 -173.06 267 -118 c 85.61 52.09 145 123 145 123 v 74 l -1306 10 z"
            opacity="0.12"
          ></path>
          <path
            d="M -286 255 s 214 -103 338 -129 s 203 29 384 101 c 145.57 57.91 178.7 50.79 272 0 c 79 -43 301 -224 385 -63 c 53 101.63 -62 129 -62 129 l -107 84 l -1212 12 z"
            opacity="0.18"
          ></path>
          <path
            d="M -24 69 s 299.68 301.66 413 245 c 8 -4 233 2 284 42 c 17.47 13.7 172 -132 217 -174 c 54.8 -51.15 128 -90 188 -39 c 76.12 64.7 118 99 118 99 l -12 132 l -1212 12 z"
            opacity="0.33"
          ></path>
          <path d="M -12 201 s 70 83 194 57 s 160.29 -36.77 274 6 c 109 41 184.82 24.36 265 -15 c 55 -27 116.5 -57.69 214 4 c 49 31 95 26 95 26 l -6 151 l -1036 10 z"></path>
        </InternalShapeDivider>
      </InternalShapeDividerContainer>
    </InternalHeroContainer>
  );
};

export default ShapeDivider;
