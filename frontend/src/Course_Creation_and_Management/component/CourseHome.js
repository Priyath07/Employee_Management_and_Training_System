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
        .get("http://localhost:8070/Course_Creation_and_Management/course/AddedCourses")
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
        .put(`http://localhost:8070/Course_Creation_and_Management/course/update/${courses[editingIndex].courseID}`, editData)
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
      .delete(`http://localhost:8070/Course_Creation_and_Management/course/delete/${courses[index].courseID}`)
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
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
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
