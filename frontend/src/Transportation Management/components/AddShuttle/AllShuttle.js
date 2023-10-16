
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './AllShuttle.css';


const AllShuttle = () => {
  const [query, setQuery] = useState('');
  const handleSearch = () => {
    if (!query) {
      setQuery('');
      return;
    }

    axios
      .get(`http://localhost:8070/shuttle/search?query=${query}`)
      .then((res) => {
        setShuttles(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [sortDirection, setSortDirection] = useState('asc'); // Initial sorting direction
  const [shuttles, setShuttles] = useState([]);
  const [filteredShuttles, setFilteredShuttles] = useState([...shuttles]);

  // edit
  const [isEditing, setIsEditing] = useState(false);
  const [editedShuttle, setEditedShuttle] = useState({
    VehicleNumber: '',
    Route: '',
    VehicleType: '',
    
  });
  const [editedShuttleId, setEditedShuttleId] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDriverName, setSelectedDriverName] = useState('');
  // useEffect
  useEffect(() => {
    const getShuttles = () => {
      axios
        .get('http://localhost:8070/shuttle/shuttles')
        .then((res) => {
          setShuttles(res.data);
          setFilteredShuttles(res.data); // Set filteredShuttles to all shuttles initially
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    getShuttles();
  }, []);

  // edit
  const handleEditShuttle = (shuttle) => {
    setIsEditing(true);
    setEditedShuttle(shuttle);
    setEditedShuttleId(shuttle._id);
    setSelectedRoute(shuttle.Route);
    setSelectedType(shuttle.VehicleType); 
    setSelectedDriverName(shuttle.DriverName);
   
 };

  const handleSaveShuttle = () => {
    // Create a new object with the edited values
    const formData = new FormData();

    formData.append('VehicleNumber', editedShuttle.VehicleNumber);
    formData.append('Route', selectedRoute);
    formData.append('VehicleType', editedShuttle.VehicleType);
    formData.append('DriverName', editedShuttle.DriverName);
    
    axios
      .put(`http://localhost:8070/shuttle/shuttles/${editedShuttleId}`, formData)
      .then(() => {
        alert('Shuttle updated successfully');
        setIsEditing(false);
        
        setShuttles((prevShuttles) =>
          prevShuttles.map((shuttle) =>
            shuttle._id === editedShuttleId
              ? { ...shuttle, ...editedShuttle }
              : shuttle
          )
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // delete
  const handleDeleteShuttle = (shuttleId) => {
    const confirmDeletion = window.confirm(
      'Are you sure you want to delete this Shuttle?'
    );

    if (confirmDeletion) {
      axios
        .delete(`http://localhost:8070/shuttle/shuttles/${shuttleId}`)
        .then((response) => {
          // Handle the response if needed
          // Remove the deleted shuttle from the list
          const updatedShuttles = shuttles.filter((item) => item._id !== shuttleId);
          setShuttles(updatedShuttles);
          filterShuttlesByRoute(selectedRoute);
        })
        .catch((error) => {
          console.error('Error deleting shuttle:', error);
          // Handle errors if needed
        });
    }
  };

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  // Function to filter shuttles by route
  const filterShuttlesByRoute = (route) => {
    setSelectedRoute(route);
    if (route === '') {
      setFilteredShuttles([...shuttles]); // Show all shuttles if no route is selected
    } else {
      const filtered = shuttles.filter((shuttle) => shuttle.Route === route);
      setFilteredShuttles(filtered);
    }
  
  };
  return (
    <div className="shuttle-container">
      <h1>All Shuttles</h1>
      <div>
        <input
          type="text"
          placeholder="Search Route..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Add filtering buttons */}
      <div className="route-filter">
        <button onClick={() => filterShuttlesByRoute('')}>All Routes</button>
        {Array.from(new Set(shuttles.map((shuttle) => shuttle.Route))).map(
          (route, index) => (
            <button key={index} onClick={() => filterShuttlesByRoute(route)}>
              {route}
            </button>
          )
        )}
           </div>
      <table className="shuttle-table">
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th onClick={toggleSortDirection}>Route</th>
          
            <th>Vehicle Type</th>
            <th>Driver Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredShuttles.map((shuttle, index) => (
            <tr
              key={index}
              style={{
                backgroundColor:
                  query && shuttle.Route.toLowerCase().includes(query.toLowerCase())
                    ? 'yellow'
                    : 'transparent',
              }}
            >
              <td>
                {isEditing && editedShuttleId === shuttle._id ? (
                  <input
                    type="text"
                    value={editedShuttle.VehicleNumber}
                    onChange={(e) =>
                      setEditedShuttle({ ...editedShuttle, VehicleNumber: e.target.value })
                    }
                  />
                ) : (
                  shuttle.VehicleNumber
                )}
              </td>
              <td>
                {isEditing && editedShuttleId === shuttle._id ? (
                  <select
                    className="form-control"
                    value={selectedRoute}
                    onChange={(e) => setSelectedRoute(e.target.value)}
                  >
                    <option value="">Select a Route</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Kaduwela">Kaduwela</option>
                    <option value="Gampaha">Gampaha</option>
                    {/* Add more options as needed */}
                  </select>
                ) : (
                  shuttle.Route
                )}
              </td>
          
                 
                

              <td>
                {isEditing && editedShuttleId === shuttle._id ? (
                  <select
                    className="form-control"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="">Vehicle Type</option>
                    <option value="Van-AC">Van-AC</option>
                    <option value="Van-Non-AC">Van-Non-AC</option>
                    <option value="Bus-AC">Bus-AC</option>
                    <option value="Bus-Non-AC">Bus-Non-AC</option>
                  </select>
                ) : (
                  shuttle.VehicleType
                )}
              </td>
              <td>
                {isEditing && editedShuttleId === shuttle._id ? (
                  <input
                    type="text"
                    value={editedShuttle.DriverName}
                    onChange={(e) =>
                      setEditedShuttle({ ...editedShuttle, DriverName: e.target.value })
                    }
                  />
                ) : (
                  shuttle.DriverName
                )}
              </td>
              <td>
                {isEditing && editedShuttleId === shuttle._id ? (
                  <>
                    <button onClick={() => handleSaveShuttle(editedShuttle)}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEditShuttle(shuttle)}>Edit</button>
                )}
                <button onClick={() => handleDeleteShuttle(shuttle._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllShuttle;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Shuttle.css';

// const AllShuttle = () => {
//   const [shuttles, setShuttles] = useState([]);

//   useEffect(() => {
//     // Make an HTTP GET request to fetch all shuttle data
//     axios.get("http://localhost:8070/shuttle/shuttles")
//       .then((response) => {
//         setShuttles(response.data); // Update the state with the retrieved data
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []); // The empty dependency array ensures this effect runs only once, like componentDidMount

//   return (
//     <div className="container">
//       <h2>All Shuttle Data</h2>
//       <ul>
//         {shuttles.map((shuttle) => (
//           <li key={shuttle._id}>
//             Vehicle Number: {shuttle.VehicleNumber}<br />
//             Route: {shuttle.Route}<br />
//             Driver Name: {shuttle.DriverName}<br />
//             Vehicle Type: {shuttle.VehicleType}<br />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AllShuttle;
