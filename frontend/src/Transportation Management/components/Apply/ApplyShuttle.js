import React, { useState } from "react";
import axios from "axios";

const ApplyShuttle = () => {
  const [Name, setName] = useState("");
  const [Id, setId] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Route, setRoute] = useState("");
  const [PickupLocation, setPickupLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [idError, setIdError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Validation functions

  function isIdValid(id) {
    return id.startsWith("IT");
  }

  function isNameValid(name) {
    return isNaN(name) && name.length > 1;
  }

  function isPhoneValid(phone) {
    return /^\d{10}$/.test(phone);
  }

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

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhoneNo(newPhone);
    if (!isPhoneValid(newPhone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
  };

  function sendData(e) {
    e.preventDefault();

    if (!isIdValid(Id)) {
      alert("ID should start with 'IT'");
      return;
    }

    if (!isNameValid(Name)) {
      alert("Name should have more than one letter");
      return;
    }

    if (!isPhoneValid(PhoneNo)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    const newApply = {
      Name,
      Id,
      PhoneNo,
      Route,
      PickupLocation,
      liveLocation: { lat: 0, lng: 0 },
    };

    axios
      .post("http://localhost:8070/apply/add", newApply)
      .then(() => {
        alert("Application Submitted");
        setSubmitted(true);
      })
      .catch((error) => {
        alert("Fill all fields");
      });
  }

  const [liveLocationLink, setLiveLocationLink] = useState(""); // State to store the live location link

  // Function to fetch live location and set the link
  const fetchLiveLocation = () => {
    // Use Google Maps Geocoding API to retrieve the live location based on the pickup location
    const location = encodeURIComponent(PickupLocation); // Encode the pickup location for the URL
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your actual Google Maps API Key

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`
      )
      .then((response) => {
        const { results } = response.data;
        if (results.length > 0) {
          const { geometry } = results[0];
          const { location } = geometry;
          const link = `https://www.google.com/maps?q=${location.lat},${location.lng}`; // Create the live location link
          setLiveLocationLink(link);
        } else {
          alert('Location not found. Please check your pickup location.');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Error fetching location. Please try again.');
      });
  };

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder=""
            onChange={handleNameChange}
          />
          {nameError && <div className="text-danger">{nameError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="Id" className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            id="Id"
            placeholder=""
            onChange={handleIdChange}
          />
          {idError && <div className="text-danger">{idError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="PhoneNo" className="form-label">
            Phone no
          </label>
          <input
            type="text"
            className="form-control"
            id="PhoneNo"
            placeholder="Enter your phone number"
            onChange={handlePhoneChange}
          />
          {phoneError && <div className="text-danger">{phoneError}</div>}
        </div>
        {/* Rest of your form elements */}
        <div className="mb-3">
          <label htmlFor="Route" className="form-label">
            Route
          </label>
          <select
            className="form-control"
            id="Route"
            onChange={(e) => setRoute(e.target.value)}
            defaultValue=""
          >
            <option value="">Select a Route</option>
            <option value="Colombo">Colombo</option>
            <option value="Kaduwela">Kaduwela</option>
            <option value="Gampaha">Gampaha</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="Pickup" className="form-label">
            Pickup location
          </label>
          <input
            type="text"
            className="form-control"
            id="Pickup"
            placeholder=""
            value={PickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
        </div>

        {/* Button to fetch live location */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={fetchLiveLocation}
        >
          Get Live Location
        </button>

        {/* Display live location link */}
        {liveLocationLink && (
          <div className="mb-3">
            <label>Live Location:</label>
            <a href={liveLocationLink} target="_blank" rel="noopener noreferrer">
              View Live Location
            </a>
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyShuttle;
