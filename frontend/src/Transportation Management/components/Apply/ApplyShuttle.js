import React, { useState } from "react";
import axios from "axios";


const ApplyShuttle = () => {
  const [Name, setName] = useState("");
  const [Id, setId] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Route, setRoute] = useState("");
  const [PickupLocation, setPickupLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  

  function sendData(e) {
    e.preventDefault();

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
  
  const [liveLocationLink, setLiveLocationLink] = useState(''); // State to store the live location link

  // Function to fetch live location and set the link
  const fetchLiveLocation = () => {
    // Use Google Maps Geocoding API to retrieve the live location based on the pickup location
    const location = encodeURIComponent(PickupLocation); // Encode the pickup location for the URL
    const apiKey = 'AIzaSyCJ4YE3oVAeebRV15VshtKSl8rMPljNba4'; // Replace with your actual Google Maps API Key

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=Colombo,+SriLanka&key={AIzaSyCJ4YE3oVAeebRV15VshtKSl8rMPljNba4}`
      )
      .then((response) => {
        const { results } = response.data;
        if (results.length > 0) {
          const { geometry } = results[0];
          const { lat, lng } = geometry.location;
          const link = `https://www.google.com/maps?q=${lat},${lng}`; // Create the live location link
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
            onChange={(e) => setName(e.target.value)}
          />
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
            onChange={(e) => setId(e.target.value)}
          />
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
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>

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

