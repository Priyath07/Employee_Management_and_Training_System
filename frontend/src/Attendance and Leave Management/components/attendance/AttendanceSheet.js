import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AttendanceSheet() {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    const getAttendance = async () => {
      try {
        const response = await axios.get('http://localhost:8070/attendance');
        setAttendanceRecords(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getAttendance();
  }, []);

  const formatTimestamp = (timestamp) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleString(); // You can adjust the format as needed
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return 'Invalid Timestamp';
    }
  };

  return (
    <div className='container'>
      <h2>Attendance Sheet</h2>

     
      <table className="table">
                <thead>
                    <tr className="table-success">  
                        <th scope="col">No</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">On Time</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map((attendance, index) => (
                        <tr key={attendance._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{attendance.employeeId}</td>
                            <td>{attendance.employeeName}</td>
                            <td>{formatTimestamp(attendance.timestamp)}</td>  
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  );
}

export default AttendanceSheet;


