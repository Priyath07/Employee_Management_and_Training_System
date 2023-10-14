import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/UserTable.css';


import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function PersonList() {
  const [persons, setPersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  

  useEffect(() => {
    const getPersons = async () => {
      try {
        const response = await axios.get('http://localhost:8070/person/personlist/');
        setPersons(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getPersons();
  }, []);

  // Filter employees based on the search query
  const filteredPersons = persons.filter((person) => {
    if (!searchQuery) return true; // If searchQuery is empty, show all employees
    if (!person || !person.name) return false; // Ensure person and name are defined
    return person.name.toLowerCase().includes(searchQuery.toLowerCase());

 
});

 //Delete 

 const handleDelete = async (userId) => {
  try {
    await axios.delete(`http://localhost:8070/person/delete/${userId}`);
    // Remove the deleted user from the state
    setPersons(persons.filter((person) => person._id !== userId));
    alert('User deleted successfully.');
  } catch (error) {
    console.error('Error deleting user:', error);
    alert('Error deleting user.');
  }
};
 

  return (
    <div className='display'>
    <h2>User Profiles</h2>
  
    {/* Search bar */}
    <input
      type="text"
      placeholder="Search by Name"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <div className='users'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Job Experience</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Education</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPersons.map((person) => (
            <tr key={person._id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.dateOfBirth}</td>
              <td>{person.jobExperience}</td>
              <td>{person.email}</td>
              <td>{person.phoneNumber}</td>
              <td>{person.address}</td>
              <td>{person.gender}</td>
              <td>{person.education}</td>
              <td>
                <Link to={`/person/${person._id}`} className="button-link">View</Link>
                <br/>
                
                <br/>
                <button onClick={() => handleDelete(person._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
}

export default PersonList;
