
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Report from './Report';
const AllRecruits = () => {
  const [recruits, setRecruits] = useState([]);
  const [originalRecruits, setOriginalRecruits] = useState([]);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    const getRecruits = () => {
      axios.get('http://localhost:8070/recruit/recruits')
        .then((res) => {
          setOriginalRecruits(res.data);
          setRecruits(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getRecruits();
  }, []);

  const handleSearch = () => {
    if (!query) {
      setRecruits(originalRecruits);
      return;
    }

    const filteredRecruits = originalRecruits.filter((recruit) =>
      recruit.fullName.toLowerCase().includes(query.toLowerCase())
    );
    setRecruits(filteredRecruits);
  };
 
  return (
    <div className="recruit-container">
      <h1>All Recruits</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
   
     </div>
      <table className="recruit-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>NIC</th>
           <th>City</th> {/* Added City */}
           <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recruits.map((recruit) => (
            <tr key={recruit._id}>
              <td>{recruit.fullName}</td>
              <td>{recruit.email}</td>
              <td>{recruit.nic}</td>
              <td>{recruit.city}</td> {/* Added City */}
             <td>
                <Link to={`/RecruitDetail/${recruit._id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    
  );
};

export default AllRecruits;
