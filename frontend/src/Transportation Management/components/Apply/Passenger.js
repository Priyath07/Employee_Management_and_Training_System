import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Passenger = () => {
  const [query, setQuery] = useState("");
  const [Applys, setApplys] = useState([]);
  
  const handleSearch = () => {
    if (!query) {
      setQuery('');
      return;
    }

    axios.get(`http://localhost:8070/apply/search?query=${query}`)
      .then((res) => {
        setApplys(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const [selectedRoute, setSelectedRoute] = useState('');
  
  useEffect(() => {
    const getApplys = () => {
      axios.get("http://localhost:8070/apply")
        .then((res) => {
          setApplys(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getApplys();
  }, []);

  const handleDeleteApply = (applyId) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete this Shuttle?");
    
    if (confirmDeletion) {
      axios.delete(`http://localhost:8070/apply/delete/${applyId}`)
        .then((response) => {
          const updatedApplys = Applys.filter((item) => item._id !== applyId);
          setApplys(updatedApplys);
        })
        .catch((error) => {
          console.error("Error deleting feedback:", error);
        });
    }
  };

  return ( 
    <div className="passenger-container">
      <h1 className="passenger-header">All Passenger</h1>
                
      <div className="passenger-search-container">
        <input
          type="text"
          placeholder="Search Name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="passenger-input"
        />
        <button onClick={handleSearch} className="passenger-search-button">
          Search
        </button>
      </div>
      <table className="passenger-table">
        <thead> 
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>PhoneNo</th>
            <th>Route</th>
            <th>PickupLocation</th>
     
          </tr>
        </thead>
        <tbody>
          {Applys.map((apply, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: 
                  query && apply.Name.toLowerCase().includes(query.toLowerCase()) ? 'yellow' : 'transparent',
              }}>
              <td>{apply.Name}</td>
              <td>{apply.Id}</td>
              <td>{apply.PhoneNo}</td>
              <td>{apply.Route}</td>
              <td>{apply.PickupLocation}</td>
              <td>
                {apply.liveLocationLink && (
                  <a
                    href={apply.liveLocationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="passenger-live-location-link"
                  >
                    View Live Location
                  </a>
                )}
              </td>
              <td>
                <button onClick={() => handleDeleteApply(apply._id)} className="passenger-delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Passenger;
