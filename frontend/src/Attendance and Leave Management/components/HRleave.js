
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HRleave() {
  const [leaves, setLeaves] = useState([]);
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [selectedLeaveRequestType, setSelectedLeaveRequestType] = useState('All Leave Requests');

  useEffect(() => {
    const getLeaves = async () => {
      try {
        const response = await axios.get('http://localhost:8070/leave');
        setLeaves(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getLeaves();
  }, []);

  


  // Function to handle filtering by LeaveRequestType
  const filterLeavesByLeaveRequestType = () => {
    if (selectedLeaveRequestType === 'All Leave Requests') {
      setFilteredLeaves(leaves);
    } else {
      const filtered = leaves.filter(leave => leave.LeaveRequestType === selectedLeaveRequestType);
      setFilteredLeaves(filtered);
    }
  };


  // Call the filter function whenever selectedLeaveRequestType changes
  useEffect(() => {
    filterLeavesByLeaveRequestType();
  }, [selectedLeaveRequestType]);

  
  //approve medical leave request
 const handleApprove = (leaveId) => {
   
    const selectedLeave = leaves.find((leave) => leave._id === leaveId);

    if (selectedLeave.LeaveRequestType === 'medicleLeave') {
      
      const approvedLeaveData = {
        employeeName: selectedLeave.employeeName,
        employeeId: selectedLeave.employeeId,
        description: selectedLeave.description,
        LeaveRequestType: 'Approved Medical Leave',
      };

      axios.post('http://localhost:8070/approvedMedicLv/addAM', approvedLeaveData)
        .then((response) => {
          alert('Medical leave request approved and inserted as Approved Medical Leave.');
          
        })
        .catch((error) => {
          console.error('Error inserting medical leave data:', error);
        });
    } else {
      alert('Leave request approved');
    };
  
    //approve duty leave
    if (selectedLeave.LeaveRequestType === 'dutyLeave') {
      
      const approvedLeaveData = {
        employeeName: selectedLeave.employeeName,
        employeeId: selectedLeave.employeeId,
        description: selectedLeave.description,
        LeaveRequestType: 'Approved Duty Leave',
      };

      axios.post('http://localhost:8070/approvedDutyLv/addDL', approvedLeaveData)
        .then((response) => {
          alert('Duty leave request approved and inserted as Approved Duty Leave.');
        })
        .catch((error) => {
          console.error('Error inserting duty leave data:', error);
        });
    } else {
      alert('Leave request approved');
    };

     //approve half day leave
     if (selectedLeave.LeaveRequestType === 'harfDayLeave') {
      
      const approvedLeaveData = {
        employeeName: selectedLeave.employeeName,
        employeeId: selectedLeave.employeeId,
        description: selectedLeave.description,
        LeaveRequestType: 'Approved Half Day Leave',
      };

      axios.post('http://localhost:8070/approvedhalfDayLv/addHD', approvedLeaveData)
        .then((response) => {
          alert('Half Day leave request approved and inserted as Approved Duty Leave.');
        })
        .catch((error) => {
          console.error('Error inserting Half Day leave data:', error);
        });
    } else {
      alert('Leave request approved');
    };

    

    
  };

  
 


  //deny leave request
  const handleDeny = (leaveId) => {
   
    alert('Leave request denied');
  };

  return (
    <div className='container'>
      <h2>Employee Leaves</h2><br/>
      {/* Dropdown to select LeaveRequestType for filtering */}
      <select
        value={selectedLeaveRequestType}
        onChange={(e) => setSelectedLeaveRequestType(e.target.value)}
        className="form-control"
      >
        
        <option value="All Leave Requests">All Leave Requests</option>
        <option value="medicleLeave">Medical Leave</option>
        <option value="harfDayLeave">Half-Day Leave</option>
        <option value="dutyLeave">Duty Leave</option>
      </select>
      <br/>
      <ul> 
        {filteredLeaves.map((leave) => (
          <li key={leave._id} className="form-label">
            <div className='middlein'>
              <div className='card'>
                <div className='card-body'>
                  Name: {leave.employeeName}<br />
                  Id: {leave.employeeId}<br />
                  Description: {leave.description}<br />
                  LeaveRequestType: {leave.LeaveRequestType}<br />
                  <button onClick={() => handleApprove(leave._id)} className="btn btn-success">
                    Approve
                  </button>
                  <br></br>
                  <br></br>
                  <button onClick={() => handleDeny(leave._id)} className="btn btn-danger">
                    Deny
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HRleave;
