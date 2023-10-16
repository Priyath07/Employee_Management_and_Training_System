import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';



const AllTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [originalTickets, setOriginalTickets] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getTickets = () => {
      axios
        .get(`http://localhost:8070/ticket`)
        .then((res) => {
          setOriginalTickets(res.data);
          setTickets(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    getTickets();
  }, []);

  const handleSearch = () => {
    if (!query) {
      setTickets(originalTickets);
      return;
    }

    const filteredTickets = originalTickets.filter((ticket) =>
      ticket.id.toLowerCase().includes(query.toLowerCase())
    );
    setTickets(filteredTickets);
  };


  return (
    <div className="ticket-container"> {/* Updated class name */}
      <h1>All Tickets</h1>

      <div className="search-bar"> {/* CSS for the search bar */}
        <input
          type="text"
          placeholder="Search by ID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <table className="ticket-table"> {/* Updated class name */}
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr
              key={ticket._id}
              style={{
                backgroundColor:
                  query && ticket.id.toLowerCase().includes(query.toLowerCase())
                    ? 'yellow'
                    : 'transparent',
              }}
            >
              <td>{ticket.name}</td>
              <td>{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>{format(new Date(ticket.date), 'MM/dd/yyyy')}</td>
              <td>{ticket.time}</td>
              <td>
                <Link to={`/TicketDetail/${ticket._id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTickets;
