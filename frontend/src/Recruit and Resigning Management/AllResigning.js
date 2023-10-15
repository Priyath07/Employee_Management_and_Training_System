import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function AllResigning() {
    const [resignationData, setResignationData] = useState([]);
  
    useEffect(() => {
      // Fetch the data when the component mounts
      axios.get('http://localhost:8070/resigning/resignations/')
        .then((response) => {
          setResignationData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching resignation data:', error.message);
        });
    }, []); // Empty dependency array to run this effect only once when the component mounts
  
    return (
      <div>
        <h2>All Resigning Data</h2>
        <ul>
          {resignationData.map((data) => (
            <li key={data._id}>
              <p>Employee ID: {data.employeeId}</p>
              <p>Name: {data.name}</p>
              <p>Years of Service: {data.years}</p>
              <p>Reason of Resigning: {data.reasonOfResigning}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  