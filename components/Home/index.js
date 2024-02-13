import Link from "next/link";
import Styled from "styled-components";

const InternalHome = Styled.section`
padding: 40px;
max-width: 1200px;
margin: 0 auto;
margin-top: 40px;

.sectoion-content {
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
    .section-content--text {
        width: 50%;
        margin-top: -42px;
        p {
            font-size: 18px;
            line-height: 1.5;
        }
        .section-content--btn-wrapper {
            margin-top: 42px;
            .section-content--btn {
                background: #174793;
                color: white;
                border-radius: 6px;
                padding: 20px;
                max-width: 187px;
                text-align: center;
                cursor: pointer;
            }
        }
    }
    .section-content--image {
        height: 100%;
        width: 40%;
        img {
            width: 100%;
        }
    }
} 

@media only screen and (max-width: 900px) {
    .sectoion-content {
    .section-content--text {
        margin-top: 0px;
    }
}
    }
`;

const Home = () => {
  return (
    <InternalHome>
      <section className="about-me">
        <div className="sectoion-content section-content--left">
          <div className="section-content--text">
            <h2>About Me</h2>
            <p>
              This is the breif summary of the about me text. This is the breif
              summary of the about me text. This is the breif summary of the
              about me text. This is the breif summary of the about me text.
              This is the breif summary of the about me text. This is the breif
              summary of the about me text. This is the breif summary of the
              about me text.
            </p>
            <div className="section-content--btn-wrapper">
              <Link href="/about">
                <a className="section-content--btn">More About Me</a>
              </Link>
            </div>
          </div>
          <div className="section-content--image">
            <img src="about-me.png" />
          </div>
        </div>

        <div className="sectoion-content section-content--right">
          <div className="section-content--image">
            <img src="about-me.png" />
          </div>
          <div className="section-content--text">
            <h2>Issues</h2>
            <p>
              This is the breif summary of the about me text. This is the breif
              summary of the about me text. This is the breif summary of the
              about me text. This is the breif summary of the about me text.
              This is the breif summary of the about me text. This is the breif
              summary of the about me text. This is the breif summary of the
              about me text.
            </p>
            <div className="section-content--btn-wrapper">
              <Link href="/issues">
                <a className="section-content--btn">Learn More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="sectoion-content section-content--left">
          <div className="section-content--text">
            <h2>Solutions</h2>
            <p>
              This is the breif summary of the about me text. This is the breif
              summary of the about me text. This is the breif summary of the
              about me text. This is the breif summary of the about me text.
              This is the breif summary of the about me text. This is the breif
              summary of the about me text. This is the breif summary of the
              about me text.
            </p>
            <div className="section-content--btn-wrapper">
              <Link href="/solutions">
                <a className="section-content--btn">Learn More</a>
              </Link>
            </div>
          </div>
          <div className="section-content--image">
            <img src="about-me.png" />
          </div>
        </div>
      </section>
    </InternalHome>
  );
};

export default Home;
