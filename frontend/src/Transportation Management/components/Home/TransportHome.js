import React from 'react';
import { Link } from "react-router-dom";

const TransportHome = () => {
  return (  
    <div className="home-container">
      <div className="home-content-container">
        <h1>Welcome To Shuttle Service...</h1>
        <p>
          Explore seamless transportation
          <br />
          with our Shuttle Service. <br />
          Enjoy comfort, reliability,
          <br />
          and convenience as <br />
          we take you to your destination. <br />
          Apply now for a stress-free journey!
        </p>
        <Link to="/LearnMore">
          <button className="home-button learn-more-button">Learn More</button>
        </Link>
        <Link to="/ApplyShuttle">
          <button className="home-button apply-button">Apply</button>
        </Link>
      </div>
      
      <div className="image-container">
        <img
          src={require('../Images/Tranport-Home.png')}
          alt="Shuttle"
          className="shuttle-image"
        />
      </div>
    </div>
  );
}

export default TransportHome;
