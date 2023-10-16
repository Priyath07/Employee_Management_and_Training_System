import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
} from 'mdb-react-ui-kit';

export default function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8070/Course_Creation_and_Management/course/get/${id}`)
            .then((res) => {
                setCourse(res.data.course);
            })
            .catch((err) => {
                alert(err.message);
            });
    }, [id]);

    return (
        <MDBContainer>
            {course ? (
                <div>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardImage src={`course.courseImage`} fluid alt="Course Image" />
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardTitle style={{ fontSize: '24px', fontWeight: 'bold' }}>{course.courseName}</MDBCardTitle>
                                <MDBCardText>
                                    <div style={{ margin: '10px 0' }}>Course ID: {course.courseID}</div>
                                    <div style={{ margin: '10px 0' }}>Description: {course.description}</div>
                                    <div style={{ margin: '10px 0' }}>Duration: {course.duration}</div>
                                    <div style={{ margin: '10px 0' }}>Price: ${course.price}</div>
                                    <div style={{ margin: '10px 0' }}>Lecture Name: {course.lectureName}</div>
                                    <div style={{ margin: '10px 0' }}>Category: {course.category}</div>
                                </MDBCardText>
                            </MDBCard>

                        </MDBCol>
                    </MDBRow>
                    <Link to={`/AddedCourses`} className="btn btn-primary">
                            Back
                    </Link>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </MDBContainer>
    );
}
