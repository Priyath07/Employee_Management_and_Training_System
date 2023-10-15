// UpdatePersonForm.js
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/PersonDetails.css';

function UpdatePersonForm() {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const navigate = useNavigate();
  const [isUpdated, setIsUpdated] = useState(false); // State for showing the alert

  useEffect(() => {
    axios
      .get(`http://localhost:8070/person/${id}`)
      .then((response) => {
        setPerson(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8070/person/update/${id}`, person)
      .then((response) => {
        setIsUpdated(true);
        alert('Employee Updated!'); // Set the flag to show the alert
        // Redirect to the person details page
        
      })
      .catch((error) => {
        console.error('Error updating user details:', error);
      });
  };
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Edit Person Details</h2>
      {isUpdated && <div className="alert">Data Updated</div>}
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={person.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" value={person.age} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input type="text" name="gender" value={person.gender} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="text" name="dateOfBirth" value={person.dateOfBirth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" name="phoneNumber" value={person.phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" value={person.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" value={person.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="nationalId">National ID:</label>
          <input type="text" name="nationalId" value={person.nationalId} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="profession">Profession:</label>
          <input type="text" name="profession" value={person.profession} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="userType">User Type:</label>
          <input type="text" name="userType" value={person.userType} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <input type="text" name="skills" value={person.skills} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="itNumber">IT Number:</label>
          <input type="text" name="itNumber" value={person.itNumber} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education:</label>
          <input type="text" name="education" value={person.education} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="jobExperience">Job Experience:</label>
          <input type="text" name="jobExperience" value={person.jobExperience} onChange={handleChange} />
        </div>
        <button className='custom-button' type="button" onClick={handleUpdate}>
          Update
        </button>
        <br/>
        <br/>
       
        <button className='custom-button'>
        <Link to={`/`}  >Go to Profile</Link>
            </button>
      </form>
    </div>
  );
}

export default UpdatePersonForm;
