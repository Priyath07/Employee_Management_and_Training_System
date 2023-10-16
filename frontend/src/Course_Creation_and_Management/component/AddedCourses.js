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
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom"; // Import Link

export default function AddedCourses() {
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
        .get(`http://localhost:8070/Course_Creation_and_Management/course/AddedCourses`)
        .then((res) => {
          console.log(res.data);
          setCourses(res.data)
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getCourses();
  }, []);

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
      <h1>New Added Courses</h1>
      <br></br>
      <div className="row">
        {courses.map((course, index) => (
          <div key={index} className="col-md-4 mb-4">
            <MDBCol md="10" lg="10" className="mb-5">
              <div className="w-100" />
              <MDBCard>
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                  {/* Display the course image using the courseImage URL */}
                  <MDBCardImage src={course.courseImage.data} fluid alt="Course Image" />
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
                  <Link to={`/update/${course.courseID}`} className="btn btn-success">
                    <i className="fas fa-pen" /> Edit
                  </Link>

                  <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                    <i className="fas fa-trash" /> Delete
                  </button>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        ))}
      </div>
    </MDBContainer>
  );
}
