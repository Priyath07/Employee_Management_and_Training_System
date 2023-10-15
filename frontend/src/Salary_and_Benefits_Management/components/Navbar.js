import React from "react";

function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-red" >
  <a className="navbar-brand" href="/p">enterprisePro</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/p">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/add">Add New</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Paysheets</a>
      </li>
      
    </ul>
  </div>
</nav>
    )
}

export default Navbar;