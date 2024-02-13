import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";

const InternalSurvey = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  .survey-header {
    text-align: center;
    font-size: 22px;
    line-height: 1.8;
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

const Survey = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
    <>
      <Header currentPage={currentPage} />
      <InternalSurvey>
        <div className="survey-header">
          I would love to hear what is most important to you.
          <br></br>
          Please share your top three concerns with me.
        </div>
        <div className="survey-form">
          <form>
            <div className="name">
              <div className="form-group first-name">
                <label>First Name (optional):</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="form-group last-name">
                <label>Last Name (optional):</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label>Email (optional):</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="concern-list">
              <div className="form-group">
                <label>Concern #1:</label>
                <textarea rows="3" />
              </div>
              <div className="form-group">
                <label>Concern #2:</label>
                <textarea rows="3" />
              </div>
              <div className="form-group">
                <label>Concern #3:</label>
                <textarea rows="3" />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Submit My Concerns
            </button>
          </form>
        </div>
      </InternalSurvey>
      <Footer />
    </>
  );
};

export default Survey;
