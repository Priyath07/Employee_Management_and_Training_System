import React from "react";
import { Link } from "react-router-dom";

const SupportHome = () => {
  return ( 
    <div className="container">
      <h1>SUPPORT HOME</h1>

      <Link to="/AllShuttles"><button>Check Shuttles</button></Link>
      <Link to="/AddShuttle"><button>Add New Shuttle</button></Link>
      <Link to="/ApplyShuttle"><button>Apply  Shuttle</button></Link>
      <Link to="/Passenger"><button>Passenger List</button></Link>
      <Link to="/DriverPassenger"><button>Driver Passenger List</button></Link>
      <Link to="/Home"><button>Home</button></Link>
      
     </div>
  );
}

export default SupportHome;