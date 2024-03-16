import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import "./SearchBar.css";

import image1 from './images/Image1.png';
import image2 from './images/Image2.jpg';
import image3 from './images/Image4.jpg';

import addimage1 from './images/Image4.jpg';
import addimage2 from './images/Cimage1.jpg';
import addimage3 from './images/Cimage2.jpg';
import addimage4 from './images/Cimage3.jpeg';
import addimage5 from './images/Cimage4.jpeg';
import addimage6 from './images/Cimage5.png';

const buyButtonStyle = {
  backgroundColor: "blue", // Change to your desired color
  marginRight: "10px", // Add right margin for spacing
};

const seeMoreButtonStyle = {
  backgroundColor: "#DFA75A", // Change to your desired color
};

export default function CourseHome() {

  const [searchQuery, setSearchQueary] = useState("");
  const [courses, setCourses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editData, setEditData] = useState({
    courseID: '',
    courseName: '',
    description: '',
    duration: '',
    courseImage: '',
    price: '',
    lectureName: '',
    category: ''
  });

  useEffect(() => {
    function getCourses() {
      axios
        .get("http://localhost:8050/Course_Creation_and_Management/course/")
        .then((res) => {
          console.log(res.data);
          setCourses(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getCourses();
  }, []);

  // Filter the courses
  const filteredCourses = courses.filter((course) => {
    const courseName = course.courseName.toLowerCase();
    return courseName.includes(searchQuery.toLowerCase());
  });

  const handleEdit = (index) => {
    setEditingIndex(index);
    const courseToEdit = courses[index];
    setEditData({ ...courseToEdit });
  };

  const handleSave = () => {
    if (editingIndex !== -1) {
      const updatedCourses = [...courses];
      updatedCourses[editingIndex] = editData;

      // Send a PUT request to update the data in your backend
      axios
        .put(`http://localhost:8050/Course_Creation_and_Management/course/update/${courses[editingIndex].courseID}`, editData)
        .then((res) => {
          console.log("Data updated successfully:", res.data);
          setCourses(updatedCourses);
          setEditingIndex(-1);
          setEditData({
            courseID: '',
            courseName: '',
            description: '',
            duration: '',
            courseImage: '',
            price: '',
            lectureName: '',
            category: ''
          });
        })
        .catch((err) => {
          alert("Error updating data: " + err.message);
        });
    }
  };

  const handleDelete = (index) => {
    // Send a DELETE request to remove the data from your backend
    axios
      .delete(`http://localhost:8050/Course_Creation_and_Management/course/delete/${courses[index].courseID}`)
      .then((res) => {
        console.log("Data deleted successfully:", res.data);
        const updatedCourses = [...courses];
        updatedCourses.splice(index, 1);
        setCourses(updatedCourses);
      })
      .catch((err) => {
        alert("Error deleting data: " + err.message);
      });
  };

  return (
    <MDBContainer>
      <Carousel data-bs-theme="dark" className="carousel-with-shadow">
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


      <br></br>
      <h1 class="title">New Courses</h1>

      <br></br>
      <div>
        <div className="custom-search-bar">
          <input
            type="text"
            placeholder="Search by Course Name"
            value={searchQuery}
            onChange={(e) => setSearchQueary(e.target.value)}
          />
          <span className="search-icon">&#128269;</span>
        </div>
      </div>


      <br />


      <div className="row">
        <div className="col-md-4 mb-4">
          <MDBCol md="10" lg="10" className="mb-5">
            <div className="w-100" />
            <MDBCard>
              <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                {/* Display the course image using the courseImage URL */}
                <MDBCardImage src={addimage1} fluid alt="" style={{ width: '400px', height: '300px' }} />
                <a>
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>UI/UX</MDBCardTitle>
                <MDBCardText>
                  <div>Course ID:IT2050 </div><br></br>
                  {/* <div> User interface (UI) developers use multiple development frameworks to ensure the user-friendliness of applications, allowing for seamless interaction between user and software. They use HTML, CSS, and JavaScript skills to ensure high UI/UX scores. They work closely with UX developers and other programming team members.</div><br></br> */}
                  <div><b>Duration:</b>6hr </div>
                  <div><b>Price:</b>$130 </div>
                  <div><b>Lecture Name:</b>Prof.Kasun Gamage </div>
                  <div><b>Category:</b> IT </div>
                </MDBCardText>
                <Link to={``} className="btn btn-primary" style={buyButtonStyle}>
                    Buy Now
                  </Link>
                  <Link to={``} className="btn btn-info" style={seeMoreButtonStyle} >
                    More Details
                  </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
        <div className="col-md-4 mb-4">
          <MDBCol md="10" lg="10" className="mb-5">
            <div className="w-100" />
            <MDBCard>
              <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                {/* Display the course image using the courseImage URL */}
                <MDBCardImage src={addimage2} fluid alt="" style={{ width: '400px', height: '300px' }} />
                <a>
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>Data Science</MDBCardTitle>
                <MDBCardText>
                  <div>Course ID:IT2070 </div><br></br>
                  {/* <div> User interface (UI) developers use multiple development frameworks to ensure the user-friendliness of applications, allowing for seamless interaction between user and software. They use HTML, CSS, and JavaScript skills to ensure high UI/UX scores. They work closely with UX developers and other programming team members.</div><br></br> */}
                  <div><b>Duration:</b>27hr </div>
                  <div><b>Price:</b>$180 </div>
                  <div><b>Lecture Name:</b>Prof.Kusal Perera </div>
                  <div><b>Category:</b> IT </div>
                </MDBCardText>
                <Link to={``} className="btn btn-primary" style={buyButtonStyle}>
                    Buy Now
                  </Link>
                  <Link to={``} className="btn btn-info" style={seeMoreButtonStyle} >
                    More Details
                  </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
        <div className="col-md-4 mb-4">
          <MDBCol md="10" lg="10" className="mb-5">
            <div className="w-100" />
            <MDBCard>
              <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                {/* Display the course image using the courseImage URL */}
                <MDBCardImage src={addimage4} fluid alt="" style={{ width: '350px', height: '300px' }} />
                <a>
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>Software Engineering</MDBCardTitle>
                <MDBCardText>
                  <div>Course ID:IT2090 </div><br></br>
                  {/* <div> User interface (UI) developers use multiple development frameworks to ensure the user-friendliness of applications, allowing for seamless interaction between user and software. They use HTML, CSS, and JavaScript skills to ensure high UI/UX scores. They work closely with UX developers and other programming team members.</div><br></br> */}
                  <div><b>Duration:</b>40hr </div>
                  <div><b>Price:</b>$190 </div>
                  <div><b>Lecture Name:</b>Prof.Nimal Kumarage </div>
                  <div><b>Category:</b> IT </div>
                </MDBCardText>
                <Link to={``} className="btn btn-primary" style={buyButtonStyle}>
                    Buy Now
                  </Link>
                  <Link to={``} className="btn btn-info" style={seeMoreButtonStyle} >
                    More Details
                  </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
        <div className="col-md-4 mb-4">
          <MDBCol md="10" lg="10" className="mb-5">
            <div className="w-100" />
            <MDBCard>
              <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                {/* Display the course image using the courseImage URL */}
                <MDBCardImage src={addimage3} fluid alt="" style={{ width: '400px', height: '300px' }} />
                <a>
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>UI/UX</MDBCardTitle>
                <MDBCardText>
                  <div>Course ID:IT2050 </div><br></br>
                  <div><b>Duration:</b>6hr </div>
                  <div><b>Price:</b>$130 </div>
                  <div><b>Lecture Name:</b>Prof.Kasun Gamage </div>
                  <div><b>Category:</b> IT </div>
                </MDBCardText>
                <Link to={``} className="btn btn-primary" style={buyButtonStyle}>
                    Buy Now
                  </Link>
                  <Link to={``} className="btn btn-info" style={seeMoreButtonStyle} >
                    More Details
                  </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>

        <div className="col-md-4 mb-4">
          <MDBCol md="10" lg="10" className="mb-5">
            <div className="w-100" />
            <MDBCard>
              <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                {/* Display the course image using the courseImage URL */}
                <MDBCardImage src={addimage5} fluid alt="" style={{ width: '400px', height: '300px' }} />
                <a>
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>UI/UX</MDBCardTitle>
                <MDBCardText>
                  <div>Course ID:IT2050 </div><br></br>
                  <div><b>Duration:</b>6hr </div>
                  <div><b>Price:</b>$130 </div>
                  <div><b>Lecture Name:</b>Prof.Kasun Gamage </div>
                  <div><b>Category:</b> IT </div>
                </MDBCardText>
                <div class="center-button">
                <Link to={''} className={`btn btn-success button-spacing`}>
                  <i className="fas fa-pen" /> Edit
                </Link>
                <button className={`btn btn-danger button-spacing`} onClick={() => handleDelete()}>
                  <i className="fas fa-trash" /> Delete
                </button>
                </div>
                <div class="center-button">
                <button className={`btn btn-info button-spacing`} onClick={''}>
                  More Details
                </button></div>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
        <div className="col-md-4 mb-4">
          <MDBCol md="10" lg="10" className="mb-5">
            <div className="w-100" />
            <MDBCard>
              <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                {/* Display the course image using the courseImage URL */}
                <MDBCardImage src={addimage6} fluid alt="" style={{ width: '400px', height: '300px' }} />
                <a>
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>UI/UX</MDBCardTitle>
                <MDBCardText>
                  <div>Course ID:IT2050 </div><br></br>
                  <div><b>Duration:</b>6hr </div>
                  <div><b>Price:</b>$130 </div>
                  <div><b>Lecture Name:</b>Prof.Kasun Gamage </div>
                  <div><b>Category:</b> IT </div>
                </MDBCardText>
                <div class="center-button">
                <Link to={''} className={`btn btn-success button-spacing`}>
                  <i className="fas fa-pen" /> Edit
                </Link>
                <button className={`btn btn-danger button-spacing`} onClick={() => handleDelete()}>
                  <i className="fas fa-trash" /> Delete
                </button>
                </div>
                <div class="center-button">
                <button className={`btn btn-info button-spacing`} onClick={''}>
                  More Details
                </button></div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      </div>

      <div className="row">
        {filteredCourses.map((course, index) => (
          <div key={index} className="col-md-4 mb-4">
            <MDBCol md="10" lg="10" className="mb-5">
              <div className="w-100" />
              <MDBCard>
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                  <MDBCardImage src={course.courseImage} fluid alt="Course Image" />
                  <a>
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{course.courseName}</MDBCardTitle>
                  <MDBCardText>
                    <div>Course ID: {course.courseID}</div><br></br>
                    <div>Description: {course.description}</div><br></br>
                    <div>Duration: {course.duration}</div>
                    <div>Price: ${course.price}</div>
                    <div>Lecture Name: {course.lectureName}</div>
                    <div>Category: {course.category}</div>
                  </MDBCardText>

                  <Link to={`/coursePaymentAdd`} className="btn btn-primary" style={buyButtonStyle}>
                    Buy Now
                  </Link>
                  <Link to={`/get/${course.courseID}`} className="btn btn-info" style={seeMoreButtonStyle} >
                    See More
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        ))}
      </div>
    </MDBContainer>
  );
}
