import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./CourseNavbar.css";

import logo from './images/Logo.png';

function Navrbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sortField, setSortField] = useState(""); // Field to sort by

  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Send a GET request to your server's search route
      const response = await fetch(`/api/course/search?query=${searchQuery}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results);
      }
    } catch (error) {
      console.error("Error searching courses:", error);
    }
  };

  // Handle sorting
  const handleSort = async (field) => {
    try {
      // Send a GET request to your server's sort route
      const response = await fetch(`/api/course/sort/${field}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.courses);
        setSortField(field);
      }
    } catch (error) {
      console.error("Error sorting courses:", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="logo" />
            EnterPrise Pro
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/AddedCourses" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/addForms" className="nav-link active" aria-current="page">Create Course</Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearch}>
              {/* Add your search input field and submit button here */}
            </form>
            {searchResults.length > 0 && (
              <div>
                <p>Sorted by: {sortField}</p>
                <button onClick={() => handleSort("price")}>Sort by Price</button>
                <button onClick={() => handleSort("duration")}>Sort by Duration</button>
                {/* Display search results here */}
                <ul>
                  {searchResults.map((course) => (
                    <li key={course.courseID}>
                      <Link to={`/course/${course.courseID}`}>{course.courseName}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navrbar;
