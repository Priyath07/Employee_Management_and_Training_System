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
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src='https://mdbootstrap.com/img/new/slides/041.jpg'
          alt='...'
        >
          <h5>Perfect Jurney</h5>
          <p></p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://mdbootstrap.com/img/new/slides/042.jpg'
          alt='...'
        >
          <h5>Creativity</h5>
          <p>.</p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://mdbootstrap.com/img/new/slides/047.jpg'
          alt='...'
        >
          <h5>Success</h5>
          <p></p>
        </MDBCarouselItem>
      </MDBCarousel>
      <h1>New Added Courses</h1>
      <br></br>
      <div>
        <input type="text" placeholder="Search by Course Name " value={searchQuery} onChange={(e) => setSearchQueary(e.target.value)} className="form-control mb-2"/>
      </div>
      <br/>
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
                  {/* <Link to={`/update/${course.courseID}`} className="btn btn-success">
                    <i className="fas fa-pen" /> Edit
                  </Link> */}
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                  <Link to={`/coursePaymentAdd`} className="btn btn-primary">
                  Buy Now
                  </Link>
                  <Link to={`/get/${course.courseID}`} className="btn btn-info">
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
