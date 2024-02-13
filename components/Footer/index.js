import styled from "styled-components";

const InternalFooter = styled.footer`
  min-height: 300px;
  background: #222;
  padding: 40px;
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    color: #fff;
    font-weight: 300;
    display: flex;
    .col-1 {
      span {
        display: inline;
        position: relative;
      }
      .copyright {
        position: absolute;
        left: 105px;
        top: 0;
        display: inline;
        font-size: 10px;
      }
    }
    .col {
      width: 25%;
      strong {
        display: block;
        margin-bottom: 14px;
      }
      a,
      span {
        display: block;
        color: #ccc;
        margin-bottom: 6px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    .footer-content {
      /* min-width: 400px; */
      display: block;
      .col {
        width: 100%;
        margin-bottom: 60px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <InternalFooter>
      <div className="footer-content">
        <div className="col col-1">
          <strong>Site Info</strong>
          <span>
            Jackson4Utah<span className="copyright">&copy;</span>
          </span>
          <span>www.jackson4utah.org</span>
          <span>Copyright 2024</span>
          <span>All rights reserved</span>
        </div>
        <div className="col col-2">
          <strong>Follow Andrew</strong>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">X</a>
        </div>
        <div className="col col-4">
          <strong>In the Press</strong>
          <a
            href="https://www.heraldextra.com/news/local/2024/jan/09/stratton-to-run-for-state-senate-sakievich-not-seeking-reelection-in-2024/"
            target="_blank"
          >
            The Daily Herald
          </a>
        </div>
        <div className="col col-3">
          <strong>Join Andrew</strong>
          <a href="/donate">Donate</a>
          <a href="#">Volunteer</a>
        </div>
      </div>
    </InternalFooter>
  );
};

export default Footer;
