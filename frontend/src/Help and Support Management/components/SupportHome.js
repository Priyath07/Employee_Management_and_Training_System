import React from "react";
import { Link } from "react-router-dom";
import './SupportHome.css'; // Import your CSS file

const SupportHome = () => {
  return ( 
    <div className="Support-Page-Container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 border-0"> {/* Added border-0 class */}
            <div className="text">
              <h1>How Can<br/>We Help You?...</h1>
              <p>
                The Help and Support Page aims to streamline your
                problem-solving, offering a range of options to cater
                to different preferences and levels of complexity. Live
                Chat ensures immediate assistance, FAQs address 
                common concerns instantly, and the ticket-raising 
                system handles more complex or unique issues through 
                a structured process. This multifaceted approach 
                enhances your satisfaction by providing timely and 
                effective resolutions to your needs.
              </p>
            </div>
          </div>
          <div className="col-md-6 " style={{boxShadow:'none'}}> {/* Added border-0 class */}
            <div className="image">
              <img
                src={require('./images/Feedback_img2.png')}
                alt="Shuttle"
                className="shuttle-image"
              />
            </div>
          </div>
        </div>


        <div className="row">
        <div className="col-md-6 " style={{boxShadow:'none'}}> {/* Added border-0 class */}
            <div className="image">
              <img
                src={require('./images/img_frame31.png')}
                alt="Shuttle"
                className="shuttle-image2"
              />
            </div>
          </div>
          <div className="col-md-6 border-0"> {/* Added border-0 class */}
            <div className="text">
            <br/><br/>
              <h1>FAQ's</h1>
              <p>
              A collection of commonly asked questions along with their corresponding answers.
              FAQs provide users with quick solutions to common issues, reducing the need for
              direct support interactions.
              </p>
              <Link to="/FAQ" className="btn btn-primary">
               FAQ's <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 border-0"> 
            <div className="text">
            <br/>
            <br/>
            <br/>
              <h1>Ticket Raise</h1>
              <p>
                
              A mechanism for users to submit detailed inquiries or 
              problems that require more personalized attention. 
              Users can fill out a form describing their issue, which 
              generates a support ticket. This allows support teams 
              to track, prioritize, and efficiently resolve individual 
              cases.
              </p>
              <Link to="/Ticket" className="btn btn-primary">
              Raise A Ticket <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-6 " style={{boxShadow:'none'}}> {/* Added border-0 class */}
            <div className="image">
              <img
                src={require('./images/img-ticket.png')}
                alt="Shuttle"
                className="shuttle-image3"
              />
            </div>
          </div>
          </div>

          <div className="row">
        <div className="col-md-6 " style={{boxShadow:'none'}}> {/* Added border-0 class */}
            <div className="image">
              <img
                src={require('./images/img-feedback.png')}
                alt="Shuttle"
                className="shuttle-image4"
              />
            </div>
          </div>
          <div className="col-md-6 border-0"> {/* Added border-0 class */}
            <div className="text">
            <br/><br/>
              <h1>Feedback</h1>
              <p>
              Providing feedback is the process of offering constructive
              comments, observations, or evaluations to individuals or groups
              in order to help them improve, learn, or grow. It plays a crucial
              role in personal and professional development, as it can promote
              better performance, enhance communication, and foster positive
              relationships. Effective feedback should be specific, actionable,
              and delivered in a respectful and empathetic manner, with the ultimate
              goal of facilitating growth and improvement in the recipient.
              Whether in the workplace, education, or personal relationships,
              the skill of providing feedback is an important tool for promoting
              continuous learning and development
              </p>
              <Link to="/add" className="btn btn-primary">
              Give your Feedback <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <Link to="/AllTickets"><button>Check Tickets</button></Link>
      <Link to="/AllFeedbacks"><button>Check Feedbacks</button></Link>

      {/* //sandaru */}
      <Link to="/Attendance"><button>Attendance</button></Link>
      {/* <Link to="/add"><button>Add New Feedback</button></Link>
      <Link to="/AllTickets"><button>Check Tickets</button></Link>
      <Link to="/Ticket"><button>Add New Ticket</button></Link> */}
        </div>

        
      </div>
    </div>
  );
}

export default SupportHome;
