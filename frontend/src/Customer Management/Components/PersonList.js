import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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

  const filteredPersons = persons.filter((person) => {
    if (!searchQuery) return true;
    if (!person || !person.name) return false;
    return person.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8070/person/delete/${userId}`);
      setPersons(persons.filter((person) => person._id !== userId));
      alert('User deleted successfully.');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user.');
    }
  };

  return (
    <div className='person-list-container'>
      
      <div className="main-content left-align-content">
      <h2 style={{ textAlign: 'center' }}>User Profiles</h2>

        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className='left-aligned-users'>
          <table className='person-table' style={{ position: 'absoulte' , right:'30px'}}>
            <thead>
              <tr>
                <th className="narrow-column">Name</th>
                <th className="narrow-column">Age</th>
                <th className="narrow-column">Date of Birth</th>
                <th className="narrow-column">Job Experience</th>
                <th className="narrow-column">Gender</th>
                <th className="narrow-column">Education</th>
                <th className="wide-column">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPersons.map((person) => (
                <tr key={person._id}>
                  <td className="narrow-column">{person.name}</td>
                  <td className="narrow-column">{person.age}</td>
                  <td className="narrow-column">{person.dateOfBirth}</td>
                  <td className="narrow-column">{person.jobExperience}</td>
                  <td className="narrow-column">{person.gender}</td>
                  <td className="narrow-column">{person.education}</td>
                  <td className="wide-column">
                    <Link to={`/person/${person._id}`} className="view-link">View</Link>
                    <button className="delete-button" onClick={() => handleDelete(person._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PersonList;
