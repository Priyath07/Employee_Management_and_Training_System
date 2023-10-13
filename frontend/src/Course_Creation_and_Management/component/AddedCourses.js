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
        .get("http://localhost:8050/Course_Creation_and_Management/course/")
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
      <h1>New Added Courses</h1>
      <br></br>
      <div className="row">
        {courses.map((course, index) => (
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
                  {editingIndex === index ? (
                    <>
                      <input
                        type="text"
                        placeholder="Course Name"
                        value={editData.courseName}
                        onChange={(e) => setEditData({ ...editData, courseName: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="Description"
                        value={editData.description}
                        onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="Duration"
                        value={editData.duration}
                        onChange={(e) => setEditData({ ...editData, duration: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="Price"
                        value={editData.price}
                        onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="Lecture Name"
                        value={editData.lectureName}
                        onChange={(e) => setEditData({ ...editData, lectureName: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="Category"
                        value={editData.category}
                        onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                      />
                    </>
                  ) : null}
                  {editingIndex === index ? (
                    <div className="button-group">
                      <MDBBtn color="primary" onClick={handleSave}>Save</MDBBtn>
                      <MDBBtn color="secondary" onClick={() => setEditingIndex(-1)}>Cancel</MDBBtn>
                    </div>
                  ) : (
                    <div className="button-group">
                      <MDBBtn color="warning" onClick={() => handleEdit(index)}>Edit</MDBBtn>
                      <MDBBtn color="danger" onClick={() => handleDelete(index)}>Delete</MDBBtn>
                    </div>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        ))}
      </div>
    </MDBContainer>
  );
}
