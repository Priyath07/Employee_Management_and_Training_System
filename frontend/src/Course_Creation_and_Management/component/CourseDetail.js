import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
    MDBContainer,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBBtn,
    MDBCardImage,
    MDBRipple,
} from 'mdb-react-ui-kit';

import jsPDF from "jspdf";
import "jspdf-autotable";

// Import your logo image
import logo from './images/Logo.png';

import addimage4 from './images/Cimage3.jpeg';

const backButtonStyle = { 
  marginRight: "10px", // Add right margin for spacing
};

const buyButtonStyle = {
  backgroundColor: "blue", // Change to your desired color
  marginRight: "10px", // Add right margin for spacing
};

const generatePDFButtonStyle = {
  backgroundColor: "green", // Change to your desired color
};

export default function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8050/Course_Creation_and_Management/course/get/${id}`)
            .then((res) => {
                setCourse(res.data.course);
            })
            .catch((err) => {
                alert(err.message);
            });
    }, [id]);

    const generatePDF = () => {
        if (course) {
            // Create a new jsPDF instance
            const doc = new jsPDF();

            // Define the title and date
            const title = "Course Report";
            const date = new Date().toLocaleDateString();

            // Define the table headers and data
            const headers = ["Course Name", "Course ID", "Description", "Duration", "Price", "Lecture Name", "Category"];
            const data = [[
                course.courseName,
                course.courseID,
                course.description,
                course.duration,
                `$${course.price}`,
                course.lectureName,
                course.category
            ]];

            // Set the position and dimensions of the table
            const tableX = 15;
            const tableY = 60; // Adjust the Y position to make space for the title and date
            const tableWidth = 190;
            const tableHeight = 20;

            // Add the title and date
            doc.text(title, tableX, 50);
            doc.text(`Date: ${date}`, tableX, 170);

            // Add the logo image at the top of the page
            const logoWidth = 40;
            const logoHeight = 40;
            const logoX = (doc.internal.pageSize.width - logoWidth) / 2; // Centered horizontally
            const logoY = 5; // Positioned at the top

            doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);

            // Add the table to the PDF
            doc.autoTable({
                head: [headers],
                body: data,
                startY: tableY,
                theme: 'grid',
            });

            // Save or display the PDF
            doc.save("course_report.pdf");
        }
    };

    return (
        <MDBContainer><br></br>
          <h1>Software Engineering</h1>
          <br></br>
          <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                {/* Display the course image using the courseImage URL */}
                <MDBCardImage src={addimage4} fluid alt="" style={{ width: '450px', height: '600px' }} />
                <a>
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <br></br>
              <br></br>
            {course ? (
                <div>
                    <MDBTable>
                        <MDBTableHead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course ID</th>
                                <th>Description</th>
                                <th>Duration</th>
                                <th>Price</th>
                                <th>Lecture Name</th>
                                <th>Category</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td>{course.courseName}</td>
                                <td>{course.courseID}</td>
                                <td>{course.description}</td>
                                <td>{course.duration}</td>
                                <td>{course.price}</td>
                                <td>{course.lectureName}</td>
                                <td>{course.category}</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                    <Link to={`/course`} className="btn btn-dark" style={backButtonStyle}>
                        Back
                    </Link>
                    <Link to={`/coursePaymentAdd`} className="btn btn-primary" style={buyButtonStyle}>
                    Buy Now
                  </Link>
                    <MDBBtn onClick={generatePDF} style={generatePDFButtonStyle}>
                        Generate PDF
                    </MDBBtn>
                    
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <br></br>
            <br></br>
        </MDBContainer>
    );
}
