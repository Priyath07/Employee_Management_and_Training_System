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
      axios
        .get('http://localhost:8070/recruit/recruits')
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
      <h1 className="recruit-header">All Recruits</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <table className="recruit-table">
        <thead>
          <tr>
            <th className="table-header">Full Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">NIC</th>
            <th className="table-header">City</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recruits.map((recruit) => (
            <tr key={recruit._id} className="table-row">
              <td className="table-data">{recruit.fullName}</td>
              <td className="table-data">{recruit.email}</td>
              <td className="table-data">{recruit.nic}</td>
              <td className="table-data">{recruit.city}</td>
              <td className="table-data">
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
