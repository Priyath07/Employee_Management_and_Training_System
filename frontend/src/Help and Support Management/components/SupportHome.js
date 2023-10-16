import React from "react";
import { Link } from "react-router-dom";

const SupportHome = () => {
  return (
    <div className="support-page">
      {/* Header Banner */}
      <header className="support-header">
        <div className="support-header-content">
          <div className="support-header-text">
            <h1 className="support-header-title">Get the Support You Need</h1>
            <p className="support-header-description">
              The Help and Support Page aims to streamline your problem-solving,
              offering a range of options to cater to different preferences and
              levels of complexity.
            
            </p>
            <Link to="/YourLinkHere" className="custom-btn custom-transparent">
     Contact Us
    </Link>
          </div>
          <img src="/support.png" alt="Support" className="support-header-image" />
        </div>
      </header>

      {/* Main Content */}
      <div className="support-container">
        <div className="support-row">
          <div className="support-col text-left">
            <h2>FAQ's</h2>
            <p>
              A collection of commonly asked questions along with their corresponding answers.
              FAQs provide users with quick solutions to common issues, reducing the need for
              direct support interactions.
            </p>
            <Link to="/FAQ" className="custom-btn custom-primary">
              FAQ's <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="support-col text-left">
            <h2>Ticket Raise</h2>
            <p>
              A mechanism for users to submit detailed inquiries or problems that require
              more personalized attention. Users can fill out a form describing their issue,
              which generates a support ticket. This allows support teams to track, prioritize,
              and efficiently resolve individual cases.
            </p>
            <Link to="/Ticket" className="custom-btn custom-primary">
              Raise A Ticket <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="support-col text-left">
            <h2>Feedback</h2>
            <p>
              Providing feedback is the process of offering constructive comments, observations,
              or evaluations to individuals or groups in order to help them improve, learn, or grow.
            </p>
            <Link to="/Feedbackadd" className="custom-btn custom-primary">
              Give your Feedback <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportHome;
