import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const InternalDonate = styled.section`
  min-height: 450px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  .donations-content {
    text-align: center;
    .donation-link {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      .paypal-link {
        width: 200px;
        text-align: center;
        img {
          width: 100%;
        }
      }
    }
  }
`;
const Donate = () => {
  return (
    <>
      <Header />
      <InternalDonate>
        <div className="donations-content">
          <h1>Donations & Contributions</h1>
          <p>Thank you so much for your kind support and donation.</p>
          <p>
            Every penny is appreciated and every donation will go towards
            fighting for conservative values.
          </p>
          <div className="donation-link">
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=GSAA97PWBY8DN"
              target="_blank"
            >
              <div className="paypal-link">
                <img src="paypal.png" />
              </div>
            </a>
          </div>
        </div>
      </InternalDonate>
      <Footer />
    </>
  );
};

export default Donate;
