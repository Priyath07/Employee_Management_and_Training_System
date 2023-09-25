import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Forms() {
  const [courseID, setCourseID] = useState("");
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [courseImage, setCourseImage] = useState("");
  const [price, setPrice] = useState("");
  const [lectureName, setLectureName] = useState("");
  const [category, setCategory] = useState("");

  function sendData(e) {
    e.preventDefault();

    const courseDetails = {
      courseID,
      courseName,
      description,
      duration,
      courseImage,
      price,
      lectureName,
      category,
    };

    axios
      .post(
        "http://localhost:8050/Course_Creation_and_Management/course/add",
        courseDetails
      )
      .then(() => {
        alert("Course Added");
        setCourseID("");
        setCourseName("");
        setDescription("");
        setDuration("");
        setCourseImage("");
        setPrice("");
        setLectureName("");
        setCategory("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      
      <Form onSubmit={sendData}>
      <Form.Group className="mb-3" controlId="formBasicCourseID">
          <Form.Label>Course ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Course ID"
            value={courseID}
            onChange={(e) => {
              setCourseID(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCourseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Course Name"
            value={courseName}
            onChange={(e) => {
              setCourseName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDuration">
          <Form.Label>Duration</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Duration"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCourseImage">
          <Form.Label>Course Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Course Image URL"
            value={courseImage}
            onChange={(e) => {
              setCourseImage(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLectureName">
          <Form.Label>Lecture Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Lecture Name"
            value={lectureName}
            onChange={(e) => {
              setLectureName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
