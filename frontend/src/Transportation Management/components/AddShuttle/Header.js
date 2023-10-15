import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"red"}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
        <Link to="/Home"><button>Home</button></Link>
        <Link to="/AllShuttles"><button>Check Shuttles</button></Link>
      <Link to="/AddShuttle"><button>Add New Shuttle</button></Link>
      <Link to="/ApplyShuttle"><button>Apply  Shuttle</button></Link>
      <Link to="/Passenger"><button>Passenger List</button></Link>
      <Link to="/DriverPassenger"><button>Driver Passenger List</button></Link>
    
      
        </li>
      </ul>
      
    </div>
  </div>
</nav>
     );
}
 
export default Header;