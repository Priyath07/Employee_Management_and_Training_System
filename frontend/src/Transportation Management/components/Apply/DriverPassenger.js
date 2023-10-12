
import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
//import './AllShuttle.css'

const DriverPassenger = () => {
  const [query, setQuery] = useState("");
  const [Applys, setApplys] = useState([])
  const [sortDirection, setSortDirection] = useState('asc'); // Initial sorting direction
  const [filteredApplys, setFilteredApplys] = useState([...Applys]);

  
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
  

  //useEffect
  useEffect(() => {
    const getApplys = () => {
      axios
        .get('http://localhost:8070/apply')
        .then((res) => {
          setApplys(res.data);
          setFilteredApplys(res.data); // Set filteredShuttles to all shuttles initially
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    getApplys();
  }, []);

    //edit
    // const handleEditShuttle = (shuttle) => {
    //     setIsEditing(true);
    //     setEditedShuttle(shuttle);
    //     setEditedShuttleId(shuttle._id);
    //     setSelectedRoute(shuttle.Route);
    //     setSelectedType(shuttle.VehicleType);
    //   };
    
    //   const handleSaveShuttle = () => {
    //     // Create a new object with the edited values
    //     const updatedShuttle = {
    //       ...editedShuttle,
    //       Route: selectedRoute, 
    //       VehicleType: selectedType, 
    //     };
    //       axios.put(`http://localhost:8070/shuttle/update/${editedShuttleId}`, updatedShuttle)
    //       .then(() => {
    //         alert('Shuttle updated successfully');
    //         setIsEditing(false);
    //         // You can also update the state with the updated shuttle if needed
          
    //       setShuttles((prevShuttles) =>
    //       prevShuttles.map((shuttle) =>
    //         shuttle._id === editedShuttleId ? { ...shuttle, ...updatedShuttle } : shuttle
    //       )
    //     );
    //   })
    //       .catch((error) => {
    //         alert(error.message);
    //       });
    //   };

      //delete
    const handleDeleteApply= (applyId) => {
        const confirmDeletion = window.confirm("Are you sure you want to delete this Shuttle?");
        
        if (confirmDeletion) {
          axios
            .delete(`http://localhost:8070/apply/delete/${applyId}`)
            .then((response) => {
              // Handle the response if needed
              // Remove the deleted feedback from the feedback list
              const updatedApplys = Applys.filter((item) => item._id !== applyId);
              setApplys(updatedApplys);
            })
            .catch((error) => {
              console.error("Error deleting feedback:", error);
              // Handle errors if needed
            });
        }
      };
    
const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };
  
  // Function to filter shuttles by route
  const filterApplysByRoute = (route) => {
    setSelectedRoute(route);
    if (route === '') {
      setFilteredApplys([...Applys]); // Show all shuttles if no route is selected
    } else {
      const filtered = Applys.filter((apply) => apply.Route === route);
      setFilteredApplys(filtered);
    }
  };

    return ( 
        <div className="shuttle-container">
                    <h1>All Passenger List</h1>
                
                    
                    <div>
        <input
          type="text"
          placeholder="Search Name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

        {/* Add filtering buttons */}
        <div className="route-filter">
        <button onClick={() => filterApplysByRoute('')}>All Routes</button>
        {Array.from(new Set(Applys.map((apply) => apply.Route))).map(
          (route, index) => (
            <button key={index} onClick={() => filterApplysByRoute(route)}>
              {route}
            </button>
          )
        )}
      </div>
       <table className="shuttle-table">
                        <thead> 
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>PhoneNo</th>
                            
                            <th onClick={toggleSortDirection}>
              Route{' '}
             
            </th>
                            <th>PickupLocation</th>
                            
                        </tr>
                        </thead>
                        <tbody>

                        {filteredApplys.map((apply, index) => (
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
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/report">
      <button>Get Report</button>
    </Link>

    </div>
  );
};

 
export default DriverPassenger;
