import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Leave.css';

const Leave = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [description, setDescription] = useState('');
  const [LeaveRequestType, setLeaveRequestType] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [editMode, setEditMode] = useState(false); // Add editMode state

  // Function to submit new data or update existing data
  const submitData = async (e) => {
    e.preventDefault();

    const data = {
      employeeName,
      employeeId,
      description,
      LeaveRequestType,
    };

    if (editMode) {
      // If in edit mode, send a PUT request to update the data
      try {
        await axios.put(`http://localhost:8070/leave/update/${submittedData._id}`, data);
        alert("Leave request Updated");
        setEditMode(false);
        // After updating, fetch the updated data
        fetchLeavesById(submittedData._id);
      } catch (error) {
        alert(error);
      }
    } else {
      // If not in edit mode, send a POST request to add new data
      try {
        const response = await axios.post("http://localhost:8070/leave/add", data);
        alert("Request edited");
        setSubmittedData(response.data); // Store the submitted data
      } catch (error) {
        alert(error);
      }
    }
  };

  // Function to enter edit mode and populate form with existing data
  const editData = () => {
    setEditMode(true);
    setEmployeeName(submittedData.employeeName);
    setEmployeeId(submittedData.employeeId);
    setDescription(submittedData.description);
    setLeaveRequestType(submittedData.LeaveRequestType);
  };

  // Function to delete data
  const deleteData = async () => {
    try {
      await axios.delete(`http://localhost:8070/leave/delete/${submittedData._id}`);
      alert("Leave Request Deleted");
      setSubmittedData(null);
      setEditMode(false);
      // Clear the form fields after deletion
      setEmployeeName('');
      setEmployeeId('');
      setDescription('');
      setLeaveRequestType('');
    } catch (error) {
      alert(error);
    }
  };

  const fetchLeavesById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8070/leave/get/${id}`);
      setSubmittedData(response.data.leave);
    } catch (error) {
      console.error("Error fetching Tickets:", error);
    }
  };

  useEffect(() => {
    if (submittedData) {
      fetchLeavesById(submittedData._id);
    }
  }, [submittedData]);

  return (
    <div className='container'>
      <div className='middlein'>
        <div className='card'>
          <div className='card-body'>
      <form onSubmit={submitData}>
        <div className='mb-3'>
          <label className='form-label' htmlFor="employeeName">Employee Name</label><br/>
          <input
            type="text"
            className="form-control"
            id="employeeName"
            placeholder="Enter Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
          <br/>
          <label className='form-label' htmlFor="employeeId">Employee ID</label><br/>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        <br/>
          <label className='form-label' htmlFor="description">Description</label><br/>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <br/>
          <label className='form-label' htmlFor="LeaveRequestType">Leave Request Type</label><br/>
          <select
            id="LeaveRequestType"
            className="form-control"
            value={LeaveRequestType}
            onChange={(e) => setLeaveRequestType(e.target.value)}
            required
          >
            <option value=" -- "> -- </option>
            <option value="medicleLeave">Medicle Leave</option>
            <option value="harfDayLeave">HarfDay Leave</option>
            <option value="dutyLeave">Duty Leave</option>
          </select>
          <br/>
          {editMode ? (
            <div>
              <button type='submit'>Update</button>
              <button type='button' onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          ) : (
            <button type='submit' className='btn btn-primary'>Submit</button>
          )}
        </div>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data</h2><br/>
          <p>Employee Name: {submittedData.employeeName}</p>
          <p>Employee ID: {submittedData.employeeId}</p>
          <p>Description: {submittedData.description}</p>
          <p>Leave Request Type: {submittedData.LeaveRequestType}</p>

          {!editMode && (
            <div className='d-flex justify-content p-b-6 * 2.5'>
              <div className='row'>
                <div className='col-sm'>
                  <button onClick={editData} className='btn btn-success' >Edit</button>
                </div>
                <div className='col-sm'>
                  <button onClick={deleteData} className='btn btn-danger' >Delete</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      </div>
      </div>
      </div>
    </div>
  );
}

export default Leave;
