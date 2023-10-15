import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PassengerReport.css'

const PassengerReport = () => {
  const [Applys, setApplys] = useState([]);
  const [reportData, setReportData] = useState({});

  useEffect(() => {
    // Fetch the passenger data from your backend API
    axios
      .get('http://localhost:8070/apply')
      .then((res) => {
        setApplys(res.data);

        // Calculate passenger counts by route
        const counts = {};
        res.data.forEach((apply) => {
          if (apply.Route in counts) {
            counts[apply.Route] += 1;
          } else {
            counts[apply.Route] = 1;
          }
        });
        setReportData(counts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <h1>Passenger Report</h1>
      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Passenger Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(reportData).map(([route, count]) => (
            <tr key={route}>
              <td>{route}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Passenger Details</h1>
      <table className="shuttle-table">
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
            <tr key={index}>
              <td>{apply.Name}</td>
              <td>{apply.Id}</td>
              <td>{apply.PhoneNo}</td>
              <td>{apply.Route}</td>
              <td>{apply.PickupLocation}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default PassengerReport;
