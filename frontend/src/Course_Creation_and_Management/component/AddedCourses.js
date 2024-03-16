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

import './AddedCourses.css'

import addimage1 from './images/Image4.jpg';
import addimage2 from './images/Cimage1.jpg';
import addimage3 from './images/Cimage2.jpg';
import addimage4 from './images/Cimage3.jpeg';
import addimage5 from './images/Cimage4.jpeg';
import addimage6 from './images/Cimage5.png';

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
        .get(`http://localhost:8050/Course_Creation_and_Management/course/`)
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
        alert("Course Deleted");
        const updatedCourses = [...courses];
        updatedCourses.splice(index, 1);
        setCourses(updatedCourses);
      })
      .catch((err) => {
        alert("Error deleting data: " + err.message);
      });
  };

  return (


    // <div className="row">
    //   <div className="mb-4-md-4">
    //     <MDBCol md="10" lg="10" className="mb-5">
    //       <div className="w-100" />
    //       <MDBCard>
    //         <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    //           <img
    //             src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
    //             className="img-fluid"
    //             alt="Card Image" />
    //           <a href="#!">
    //             <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
    //           </a>
    //         </div>
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">
    //             Some quick example text to build on the card title and make up the bulk of the card's content.
    //           </p>
    //           <a href="#!" className="btn btn-primary">
    //             Button
    //           </a>
    //         </div>
    //       </MDBCard>
    //     </MDBCol>
    //   </div>
    //   </div>

    <MDBContainer>
      <div class="center-title">
        <h1>New Added Courses</h1>
      </div>

      <br></br>
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
        {courses.map((course, index) => (
          <div key={index} className="col-md-4 mb-4">
            <MDBCol md="10" lg="10" className="mb-5">
              <div className="w-100" />
              <MDBCard>
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                  {/* Display the course image using the courseImage URL */}
                  <MDBCardImage src={addimage4} fluid alt="" style={{ width: '400px', height: '300px' }} />
                  <a>
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{course.courseName}</MDBCardTitle>
                  <MDBCardText>
                    <div>Course ID: {course.courseID}</div><br></br>
                    {/* <div>Description: {course.description}</div><br></br> */}
                    <div>Duration: {course.duration}</div>
                    <div>Price: {course.price}</div>
                    <div>Lecture Name: {course.lectureName}</div>
                    <div>Category: {course.category}</div>
                  </MDBCardText>
                  <div class="center-button">
                  <Link to={`/update/${course.courseID}`} className="btn btn-success button-spacing">
                    <i className="fas fa-pen" /> Edit
                  </Link>

                  <button className="btn btn-danger button-spacing" onClick={() => handleDelete(index)}>
                    <i className="fas fa-trash" /> Delete
                  </button>
                  </div>
                  <div class="center-button">
                  <button className={`btn btn-info button-spacing`} onClick={'`/get/${course.courseID}`'}>
                  More Details
                </button></div>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        ))}
      </div>
    </MDBContainer>
  );
}
