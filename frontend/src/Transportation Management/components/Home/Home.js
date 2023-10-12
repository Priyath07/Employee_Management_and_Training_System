import React from 'react';
import './Home.css'; // Import your CSS file
import { Link } from "react-router-dom";

const Home = () => {
  return (  
    <div className="Home-container">
      <div className="Home-content-container">
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
          <button className="button1">Learn More</button>
        </Link>
        <Link to="/ApplyShuttle">
          <button className="button1">Apply</button>
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

export default Home;
