import axios from "axios";
import React, { useState, useEffect } from "react";
import { format } from "date-fns"; // Import the format function from date-fns

const AddTicket = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [idError, setIdError] = useState("");
  const [nameError, setNameError] = useState("");
  const num = [1,2,3,4,5,6,7,8,9,0];

  useEffect(() => {
    // Auto-fill the current date and time when the component mounts
    const currentDateTime = new Date();
    const formattedDate = format(currentDateTime, "MM/dd/yyyy"); // Format the date
    const formattedTime = format(currentDateTime, "HH:mm");
    setDate(formattedDate);
    setTime(formattedTime);

    // Auto-fill the email with a Gmail-like pattern
    setEmail("yourname@gmail.com");
  }, []);

  // Validation functions
  function isEmailValid(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/; 
    return emailRegex.test(email);
  }

  function isIdValid(id) {
    return id.startsWith("IT");
  }

  function isNameValid(name) {
    
    return isNaN(name) && name.length > 1;
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!isEmailValid(newEmail)) {
      setEmailError("Email is not in a valid format (e.g., aa@gmail.com)");
    } else {
      setEmailError("");
    }
  };

  const handleIdChange = (e) => {
    const newId = e.target.value;
    setId(newId);
    if (!isIdValid(newId)) {
      setIdError("ID should start with 'IT'");
    } else {
      setIdError("");
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    if (!isNameValid(newName)) {
      setNameError("Name should have more than one letter");
    } else {
      setNameError("");
    }
  };

  function sendData(e) {
    e.preventDefault();

    if (!isEmailValid(email)) {
      alert("Email is not in a valid format (e.g., aa@gmail.com)");
      return;
    }

    if (!isIdValid(id)) {
      alert("ID should start with 'IT'");
      return;
    }

    if (!isNameValid(name)) {
      alert("Name should have more than one letter");
      return;
    }

    const newTicket = {
      name,
      id,
      subject,
      description,
      date,
      time,
      email,
    };

    axios
      .post("http://localhost:8070/ticket/add", newTicket)
      .then(() => {
        alert("Ticket Added");
        setSubmitted(true);
      })
      .catch((error) => {
        alert("Fill all fields before submit");
      });
  }

  // Rest of your code

  return (
    <div className="container">
      <h1>Raise your Ticket</h1>
      <br />
      <br />
      <div className="add-form">
        <form onSubmit={sendData}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={handleNameChange}
            />
            {nameError && <div className="text-danger">{nameError}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              ID Number
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              placeholder="Enter your ID"
              value={id}
              onChange={handleIdChange}
            />
            {idError && <div className="text-danger">{idError}</div>}
          </div>

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
                <option value="Support">Support</option>
                <option value="Courses">Courses</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

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
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="text" // Change input type to "text"
              className="form-control"
              id="date"
              value={date}
              readOnly // Make the field read-only
            />
          </div>

          <div className="mb-3">
            <label htmlFor="time" className="form-label">
              Time
            </label>
            <input
              type="text" // Change input type to "text"
              className="form-control"
              id="time"
              value={time}
              readOnly // Make the field read-only
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTicket;
