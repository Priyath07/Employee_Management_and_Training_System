import axios from "axios";
import React, { useState, useEffect } from "react";
import './Feedback.css';

const AddFeedback = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(""); 
  const [time, setTime] = useState(""); 
  const [feedbackType, setFeedbackType] = useState("Good");  
  const [submitted, setSubmitted] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedFeedback, setEditedFeedback] = useState({
    name: "",
    id: "",
    subject: "",
    description: "",
    date: "",
    time: "",
    feedbackType: "",
  });

  const [nameError, setNameError] = useState("");
  const [idError, setIdError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  // Edit
  const [editedFeedbackId, setEditedFeedbackId] = useState(null);

  const handleEditFeedback = (feedback) => {
    setIsEditing(true);
    setEditedFeedback(feedback);
    setEditedFeedbackId(feedback._id);
  };

  const handleSaveFeedback = (editedFeedback) => {
    axios
      .put(`http://localhost:8070/feedback/update/${editedFeedbackId}`, editedFeedback)
      .then(() => {
        alert('Feedback updated successfully');
        setIsEditing(false);

        setFeedbacks((prevFeedbacks) =>
          prevFeedbacks.map((feedback) =>
            feedback._id === editedFeedbackId ? { ...feedback, ...editedFeedback } : feedback
          )
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  function sendData(e) {
    e.preventDefault();

    if (!isNameValid(name)) {
      setNameError("Name should have more than one letter");
      return;
    }

    if (!isIdValid(id)) {
      setIdError("ID should start with 'IT'");
      return;
    }

    if (!isDescriptionValid(description)) {
      setDescriptionError("Description should not be empty");
      return;
    }

    const newFeedback = {
      name,
      id,
      subject,
      description,
      date,
      time,
      feedbackType,
    };

    axios
      .post("http://localhost:8070/feedback/add", newFeedback)
      .then(() => {
        alert("Feedback Added");
        setSubmitted(true);
      })
      .catch((error) => {
        alert("Fill all fields before submit");
      });
  }

  // Function to validate name
  function isNameValid(name) {
    return name.length > 1;
  }

  // Function to validate ID
  function isIdValid(id) {
    return id.startsWith("IT");
  }

  // Function to validate description
  function isDescriptionValid(description) {
    return description.trim() !== "";
  }

  // Function to fetch feedbacks by ID
  const fetchFeedbacksById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8070/feedback/get/${id}`);
      setFeedbacks(response.data.feedback);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    if (submitted) {
      // After feedback submission, fetch feedbacks by ID
      fetchFeedbacksById(id);
      setSubmitted(false);
    }
  }, [submitted, id]);

  const handleDeleteFeedback = (feedbackId) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete this feedback?");

    if (confirmDeletion) {
      axios
        .delete(`http://localhost:8070/feedback/delete/${feedbackId}`)
        .then((response) => {
          // Handle the response if needed
          // Remove the deleted feedback from the feedback list
          const updatedFeedbacks = feedbacks.filter((item) => item._id !== feedbackId);
          setFeedbacks(updatedFeedbacks);
        })
        .catch((error) => {
          console.error("Error deleting feedback:", error);
          // Handle errors if needed
        });
    }
  };

  useEffect(() => {
    // Auto-fill the current date and time when the component loads
    const currentDateTime = new Date();
    const currentDate = currentDateTime.toISOString().split("T")[0];
    const currentTime = currentDateTime.toTimeString().split(" ")[0];
    setDate(currentDate);
    setTime(currentTime);
  }, []);

  return (
    <div className="container">
      <h1>Give Your Feedback</h1>
      <h1>here...</h1>
      <br/><br/>
      <div className="add-form">
        <form onSubmit={sendData}>
          {/* Name Input */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
            />
            {nameError && <div className="text-danger">{nameError}</div>}
          </div>

          {/* ID Number Input */}
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              ID Number
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              placeholder="Enter your ID"
              onChange={(e) => {
                setId(e.target.value);
                setIdError("");
              }}
            />
            {idError && <div className="text-danger">{idError}</div>}
          </div>

          {/* Subject Dropdown */}
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <div className="input-group">
              <select
                className="form-control"
                id="subject"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                defaultValue=""
              >
                <option value="">Select a Subject</option>
                <option value="Transport">Transport</option>
                <option value="Support">Help & Support</option>
                <option value="Courses">Courses</option>
              </select>
            </div>
          </div>

          {/* Date Input */}
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="text"
              className="form-control"
              id="date"
              value={date}
              readOnly
            />
          </div>

          {/* Time Input */}
          <div className="mb-3">
            <label htmlFor="time" className="form-label">
              Time
            </label>
            <input
              type="text"
              className="form-control"
              id="time"
              value={time}
              readOnly
            />
          </div>

          {/* Feedback Type (Good/Bad) */}
          <div className="mb-3">
            <label className="form-label">Feedback Type</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="feedbackType"
                  value="Good"
                  checked={feedbackType === "Good"}
                  onChange={() => setFeedbackType("Good")}
                />{" "}
                Good
              </label>
              <label>
                <input
                  type="radio"
                  name="feedbackType"
                  value="Bad"
                  checked={feedbackType === "Bad"}
                  onChange={() => setFeedbackType("Bad")}
                />{" "}
                Bad
              </label>
            </div>
          </div>

          {/* Description Textarea */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              placeholder="Enter your Feedback"
              onChange={(e) => {
                setDescription(e.target.value);
                setDescriptionError("");
              }}
            />
            {descriptionError && <div className="text-danger">{descriptionError}</div>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      {/* Rest of your code for displaying and managing feedback entries */}
    </div>
  );
};

export default AddFeedback;
