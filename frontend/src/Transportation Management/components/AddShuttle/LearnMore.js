
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const LearnMore = () => {
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

  const [shuttles, setShuttles] = useState([]);
  const [filteredShuttles, setFilteredShuttles] = useState([...shuttles]);
  const [selectedRoute, setSelectedRoute] = useState('');
  useEffect(() => {
    const getShuttles = () => {
      axios
        .get('http://localhost:8070/shuttle')
        .then((res) => {
          setShuttles(res.data);
          setFilteredShuttles(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    getShuttles();
  }, []);

  const toggleSortDirection = () => {
    // Toggle sorting logic here if needed
  };

  const filterShuttlesByRoute = (route) => {
    setSelectedRoute(route);
    if (route === '') {
      setFilteredShuttles([...shuttles]);
    } else {
      const filtered = shuttles.filter((shuttle) => shuttle.Route === route);
      setFilteredShuttles(filtered);
    }
  };

  return (
    <div className="shuttle-container">
        <div>
        <input
          type="text"
          placeholder="Search Route..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <h1>Learn More About Our Shuttle Service</h1>
      
      <p>Discover the world of convenience and reliability with our Shuttle Service.
         Whether you're commuting to work, exploring the city, or embarking on exciting journeys,
          our top-notch shuttle service is designed to make your travel experience seamless and enjoyable.
           With an extensive network of routes, a variety of comfortable vehicles, 
           and a team of dedicated professionals, we're committed to providing safe, punctual,
            and affordable transportation. 
        Experience the difference with us and let us take you where you need to go."</p>
     

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
              <td>{shuttle.VehicleNumber}</td>
              <td>{shuttle.Route}</td>
              
              <td>{shuttle.VehicleType}</td>
              <td>{shuttle.DriverName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LearnMore;


