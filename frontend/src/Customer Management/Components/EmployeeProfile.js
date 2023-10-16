import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Frame from '../img/Frame.png';
import { Link } from 'react-router-dom';


function EmployeeProfile() {
  const { itNumber } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPerson = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/person/employee/itNumber/${itNumber}`);
        setPerson(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false);
      }
    };

    getPerson();
  }, [itNumber]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!person) {
    return <div className="employee-user-not-found">User not found</div>;
  }

  return (
    <div className="profile-container">
      <div className="sidebar">
      <Link to={`/person/update/${person._id}`}>Update</Link>
              <Link to={`/Home`}>View Shuttle</Link>
              <Link to={``}>View Progress</Link>
              <Link to={`/SupportHome`}>Help and Support</Link>
              <Link to={``}>View Salary</Link>
              <Link to={`/login`}>Log Out</Link>
      </div>
      <div className="user-details-container">
      <div className="user-details">
        <div className="user-details-column">
          <label className='person' htmlFor='person'>PERSONAL DETAILS</label>
          <table className="table1">
            <tbody>
              <tr>
                <td><strong>Name:</strong></td>
                <td>{person.name}</td>
              </tr>
              <tr>
                <td><strong>Age:</strong></td>
                <td>{person.age}</td>
              </tr>
              <tr>
                <td><strong>Gender:</strong></td>
                <td>{person.gender}</td>
              </tr>
              <tr>
                <td><strong>Date of Birth:</strong></td>
                <td>{person.dateOfBirth}</td>
              </tr>
            </tbody>
          </table>
          <label className='person-contact' htmlFor='contact'>CONTACT DETAILS</label>
          <table className="table2">
            <tbody>
              <tr>
                <td><strong>Phone Number:</strong></td>
                <td>{person.phoneNumber}</td>
              </tr>
              <tr>
                <td><strong>Address:</strong></td>
                <td>{person.address}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{person.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col1'>
          <label className='person' htmlFor='education'>EDUCATION QUALIFICATIONS</label>
          <div className='qrCode'>
            <label className='person-attendance' htmlFor='education'>Attendance</label>
            <img src={Frame} alt="Frame" />
          </div>
          <table className="table3">
            <tbody>
              <tr>
                <td><strong>National ID:</strong></td>
                <td>{person.nationalId}</td>
              </tr>
              <tr>
                <td><strong>Profession:</strong></td>
                <td>{person.profession}</td>
              </tr>
              <tr>
                <td><strong>User Type:</strong></td>
                <td>{person.userType}</td>
              </tr>
              <tr>
                <td><strong>Skills:</strong></td>
                <td>{person.skills}</td>
              </tr>
              <tr>
                <td><strong>IT Number:</strong></td>
                <td>{person.itNumber}</td>
              </tr>
              <tr>
                <td><strong>Education:</strong></td>
                <td>{person.education}</td>
              </tr>
              <tr>
                <td><strong>Job Experience:</strong></td>
                <td>{person.jobExperience}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EmployeeProfile;
