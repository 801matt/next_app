import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";

const InternalContact = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  .contact-me-content {
    text-align: center;
  }
  form {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 60px;
    .submit-btn {
      margin-top: 24px;
      appearance: none;
      -webkit-appearance: none;
      border: none;
      background: #174793;
      color: white;
      border-radius: 6px;
      padding: 20px;
      width: 100%;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
    }
    .form-group {
      margin-bottom: 18px;
      label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
      }
      input {
        padding: 0 12px;
        display: block;
        width: 100%;
        appearance: none;
        -webkit-appearance: none;
        height: 50px;
        border: solid 1px #444;
        border-radius: 4px;
        font-size: 16px;
      }
      textarea {
        padding: 12px;
        display: block;
        width: 100%;
        appearance: none;
        -webkit-appearance: none;
        border: solid 1px #444;
        border-radius: 4px;
        font-size: 16px;
      }
    }
    .name {
      display: flex;
      .first-name {
        margin-right: 8px;
      }
      .last-name {
        margin-left: 8px;
      }
      .form-group {
        width: 50%;
      }
    }
  }
`;

const Contact = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
    <>
      <Header currentPage={currentPage} />
      <InternalContact>
        <div className="contact-me-content">
          <h1>Contact Me</h1>
          <div>I would love to hear what's most important to you.</div>
          <br></br>
          <div>Email: andrew@jackson4utah.gov</div>
        </div>
        <div className="survey-form">
          <form>
            <div className="name">
              <div className="form-group first-name">
                <label>First Name*:</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="form-group last-name">
                <label>Last Name*:</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label>Email*:</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="concern-list">
              <div className="form-group">
                <label>Message*:</label>
                <textarea rows="3" />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Send My Message
            </button>
          </form>
        </div>
      </InternalContact>
      <Footer />
    </>
  );
};

export default Contact;
