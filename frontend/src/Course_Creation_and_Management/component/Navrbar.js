//import React from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            EnterPrise Pro
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a> */}
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="/add">
                  Forms
                </a> */}
                <Link to="/add" className="nav-link active" aria-current="page">Create Course</Link>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/lectureProfile"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Lecture
                </a>
                <ul class="dropdown-menu">
                  <li> */}
                    {/* <a class="dropdown-item" href="/lectureProfile">
                      Profile
                    </a> */}
                    {/* <Link to="/lectureProfile" className="dropdown-item" aria-current="page">Profile</Link>
                  </li>
                  <li> */}
                    {/* <a class="dropdown-item" href="/add">
                      Forms
                    </a> */}
                    {/* <Link to="/addLecture" className="dropdown-item" aria-current="page">Add Lecture</Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li> */}
                    {/* <a class="dropdown-item" href="/list">
                      List
                    </a> */}
                    {/* <Link to="/lectureList" className="dropdown-item" aria-current="page">List</Link>
                  </li> */}
                {/* </ul>
              </li>
              <li class="nav-item">
              <Link to="/CourseHome" className="dropdown-item" aria-current="page">Course Home</Link>
              </li> */}
            </ul>
            <form class="d-flex" onSubmit={handleSearch}>
        {/* <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button> */}
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