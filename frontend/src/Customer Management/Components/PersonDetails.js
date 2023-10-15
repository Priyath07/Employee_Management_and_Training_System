import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/PersonDetails.css';
import { Link } from 'react-router-dom';



function PersonDetails() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPerson = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/person/${id}`);
        setPerson(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false);
      }
    };

    getPerson();
  }, [id]);


  return (
    <div className="user-details-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : person ? (
        <div className="user-details">
          
          
          <div className="user-details-column">
            

            <label className='person' htmlFor='person'>PERSONAL DETAILS</label>

              <div className="user-detail">
                <label htmlFor="name">Name:</label>
                <p id="name">{person.name}</p>
              </div>
              <div className="user-detail">
                <label htmlFor="age">Age:</label>
                <p id="age">{person.age}</p>
              </div>
              <div className="user-detail">
                <label htmlFor="gender">Gender:</label>
                <p id="gender">{person.gender}</p>
              </div>
              <div className="user-detail">
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <p id="dateOfBirth">{person.dateOfBirth}</p>
              </div>
             
            
         
            
            <label className='person' htmlFor='contact'>CONTACT DETAILS</label>
              <div className="user-detail">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <p id="phoneNumber">{person.phoneNumber}</p>
              </div>
              <div className="user-detail">
                <label htmlFor="address">Address:</label>
                <p id="address">{person.address}</p>
              </div>
        
             
              <div className="user-detail">
                <label htmlFor="email">Email:</label>
                <p id="email">{person.email}</p>
              </div>
          
        
           
            <div className='col1'>
              <label className='person' htmlFor='education'>EDUCATION QUALIFICATIONS</label>
              
              <div className="user-detail">
                <label htmlFor="nationalId">National ID:</label>
                <p id="nationalId">{person.nationalId}</p>
              </div>
              <div className="user-detail">
                <label htmlFor="profession">Profession:</label>
                <p id="profession">{person.profession}</p>
              </div>
              <div className="user-detail">
                <label htmlFor="userType">User Type:</label>
                <p id="userType">{person.userType}</p>
              </div>
              <div className="user-detail">
                <label htmlFor="skills">Skills:</label>
                <p id="skills">{person.skills}</p>
              </div>
              <div className="user-detail">
                <label htmlFor="itNumber">IT Number:</label>
                <p id="itNumber">{person.itNumber}</p>
              </div>
              <div className="user-detail">
                <label htmlFor="education">Education:</label>
                <p id="education">{person.education}</p>
              </div>
              <div className="user-detail">
                <label htmlFor="jobExperience">Job Experience:</label>
                <p id="jobExperience">{person.jobExperience}</p>
              </div>


            
              
              <Link to={`/`}>Back</Link> 
              
              
              
          
          </div>

          

            
            
            
          </div>
          
        </div>
      ) : (
        <div className="user-not-found">User not found</div>
      )}
    </div>
  );
}

export default PersonDetails;
