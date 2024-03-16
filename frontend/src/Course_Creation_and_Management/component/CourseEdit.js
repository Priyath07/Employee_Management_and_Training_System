import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom"; //Import useParams to get the ID parameter from the URL

function CourseEdit() {
    const { id } = useParams(); //Get the ID parameter from the URL
    const navigate = useNavigate(); //Initialize the navigate function

    const [courseID, setCourseID] = useState("");
    const [courseName, setCourseName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    // const [courseImage, setCourseImage] = useState(null);
    const [price, setPrice] = useState("");
    const [lectureName, setLectureName] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        axios
          .get(`http://localhost:8050/Course_Creation_and_Management/course/get/${id}`)
          .then((res) => {
            const courseData = res.data.course;
            setCourseID(courseData.courseID);
            setCourseName(courseData.courseName);
            setDescription(courseData.description);
            setDuration(courseData.duration);
            // setCourseImage(courseData.courseImage);
            setPrice(courseData.price);
            setLectureName(courseData.lectureName);
            setCategory(courseData.category);
          })
          .catch((err) => {
            alert(err.message);
          });
    }, [id]);

    const handleUpdate = () => {
        const updateCourse = { courseID,courseName,description,duration,price,lectureName,category };
        axios.put(`http://localhost:8050/Course_Creation_and_Management/course/update/${id}`, updateCourse).then((res) => {
            //Handle success, you might want to redirect or perform other actions
            alert("Course updated successfully");
            navigate('/'); //Redirect to the AllSociety component
        }).catch((err) => {
            alert(err.message);
        });
    };

    return (
        <div className="container">
        <br/>
        <a href="/"><button type="submit" className="btn btn-outline-warning rounded-circle"><i class="fa-solid fa-arrow-left"></i></button></a>
            <br/><br/>
            <h2>Edit Course Details</h2><br/>
            <form>
                <div className="form-group">
                    <label>Course ID</label>
                    <input
                        type="text"
                        className="form-control"
                        value={courseID}
                        onChange={(e) => setCourseID(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label> Course Name </label>
                    <input
                        type="text"
                        className="form-control"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ height: "400px" }}
                    />
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <input
                        type="text"
                        className="form-control"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </div>
                {/* <div className="form-group">
                    <label>courseImage</label>
                    <input
                        type="text"
                        className="form-control"
                        value={courseImage}
                        onChange={(e) => setCourseImage(e.target.value)}
                    />
                </div> */}
                <div className="form-group">
                    <label> Price </label>
                    <input
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Lecture Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={lectureName}
                        onChange={(e) => setLectureName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input
                        type="text"
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
               
                <br/>
                <button type="button" className="btn btn-success" onClick={handleUpdate}>
                    Update Course
                </button>
            </form>
        </div>
    );
}

export default CourseEdit;