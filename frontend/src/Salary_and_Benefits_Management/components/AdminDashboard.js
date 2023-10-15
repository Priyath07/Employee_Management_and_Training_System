// import React, { useState } from 'react';
// import axios from 'axios';
// import ItemList from './ASD';

// const Home = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
 
//   // Function to submit new data or update existing data
//   const submitData = async (e) => {
//     e.preventDefault();

//     const data = {
//       name,
//       age,
//       gender,
   
//     };

//     if (editMode) {
//       // If in edit mode, send a PUT request to update the data
//       try {
//         await axios.put("http://localhost:8070/Salary_and_Benefits_Management/student//update/:id/${submittedData._id}", data);
//         alert("Employee Updated");
//         setEditMode(false);
//       } catch (error) {
//         alert(error);
//       }
//     } 



//   return (
//     <div>
//       <form onSubmit={submitData}>
//         <div>
//           <label htmlFor="employeeName">Employee Name</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Enter Name"
//             value={employeeName}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <label htmlFor="employeeId">Employee ID</label>
//           <input
//             type="text"
//             id="age"
//             value={employeeId}
//             onChange={(e) => setAge(e.target.value)}
//           />

//           <label htmlFor="description">Description</label>
//           <input
//             type="text"
//             id="gender"
//             placeholder="Enter description"
//             value={description}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           <label htmlFor="LeaveRequestType">Leave Request Type</label>
//           <select
//             id="LeaveRequestType"
//             value={LeaveRequestType}
//             onChange={(e) => setLeaveRequestType(e.target.value)}
//           >
//             <option value="medicleLeave">Medicle Leave</option>
//             <option value="harfDayLeave">HarfDay Leave</option>
//             <option value="dutyLeave">Duty Leave</option>
//           </select>

//           {editMode ? (
//             <div>
//               <button type='submit'>Update</button>
//               <button type='button' onClick={() => setEditMode(false)}>Cancel</button>
//             </div>
//           ) : (
//             <button type='submit'>Submit</button>
//           )}
//         </div>
//       </form>

//       {submittedData && (
//         <div>
//           <h2>Submitted Data</h2>
//           <p>Employee Name: {ItemList.name}</p>
//           <p>Employee ID: {ItemList.age}</p>
//           <p>Description: {ItemList.gender}</p>
     

//           {!editMode && (
//             <div>
//               <button onClick={editData}>Edit</button>
//               <button onClick={deleteData}>Delete</button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
// }
// export default Home

// import React from 'react';
// //import { Link } from 'react-router-dom';

// function AdminDashboard() {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar */}
//         <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
//           <div className="position-sticky">
//             {/* Logo */}
//             <div className="text-center mt-3 mb-4">
//               <img src="C:/SLIIT/ITP/Employee_Management_and_Training_System/frontend/src/1233.png" alt="Logo" width="80" height="80" />
//             </div>

//             {/* Navigation Menu */}
           
//           </div>
//         </nav>

//         {/* Main content */}
//         <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//             <h1 className="h2">Dashboard</h1>
//           </div>
//           {/* Content goes here */}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

// import React, { useState } from 'react';
// import './AdminDashboard.css';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// function AdminDashboard() {
//   const [employeeInfo, setEmployeeInfo] = useState({
//     basicSalary: 0,
//     workingHours: 0,
//     bonus: 0,
//     attendance: 0,
//   });

//   const [totalSalary, setTotalSalary] = useState(0);
//   const [deductedETF, setDeductedETF] = useState(0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEmployeeInfo({ ...employeeInfo, [name]: parseFloat(value) });
//   };

//   const calculateTotalSalary = () => {
//     // Calculation logic remains the same as before
//     // ...
//   };

//   const handleDownload = () => {
//     const { basicSalary, workingHours, bonus, attendance, totalSalary, deductedETF } = employeeInfo;
  
//     // Check if any of the required properties are undefined or null
//     if (basicSalary === undefined || totalSalary === undefined || deductedETF === undefined) {
//       console.error('Invalid paysheet data. Cannot generate PDF.');
//       return;
//     }
  
//     const doc = new jsPDF();
  
//     // Define the table columns and rows
//     const tableData = {
//       columns: ['Description', 'Amount'],
//       body: [
//         ['Basic Salary', `$${basicSalary.toFixed(2)}`],
//         ['Working Hours', `${workingHours} hours`],
//         ['Bonus', `$${bonus.toFixed(2)}`],
//         ['Attendance (in hours)', `${attendance} hours`],
//         ['Total Salary', `$${totalSalary.toFixed(2)}`],
//         ['ETF Deduction (12%)', `$${deductedETF.toFixed(2)}`],
//       ],
//     };
  
//     // Auto-generate the table from the data
//     doc.autoTable(tableData);
  
//     // Save the PDF file with the name 'paysheet.pdf'
//     doc.save('paysheet.pdf');
//   };
  

//   return (
//     <div className="AdminDashboard">
//       <h1>Employee Payroll Form</h1>
//       <div className="form-container">
//         <div className="form-group">
//           <label>Basic Salary:</label>
//           <input
//             type="number"
//             name="basicSalary"
//             value={employeeInfo.basicSalary}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Working Hours:</label>
//           <input
//             type="number"
//             name="workingHours"
//             value={employeeInfo.workingHours}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Bonus:</label>
//           <input
//             type="number"
//             name="bonus"
//             value={employeeInfo.bonus}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Attendance (in hours):</label>
//           <input
//             type="number"
//             name="attendance"
//             value={employeeInfo.attendance}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="button" onClick={calculateTotalSalary}>
//           Calculate Total Salary
//         </button>
//         <button type="button" onClick={handleDownload}>
//   Download Paysheet (PDF)
// </button>

//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import { ReactComponent as SunIcon } from 'C:/SLIIT/ITP/Employee_Management_and_Training_System/frontend/src/sun.svg'; // Replace './sun.svg' with the path to your sun icon
import { ReactComponent as MoonIcon } from 'C:/SLIIT/ITP/Employee_Management_and_Training_System/frontend/src/moon.svg'; // Replace './moon.svg' with the path to your moon icon
import Calculator from './Calculator';

const Dashboard = () => {
  const [greeting, setGreeting] = useState('');
  const currentTime = new Date().getHours();

  useEffect(() => {
    if (currentTime >= 5 && currentTime < 12) {
      setGreeting('Good Morning');
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Night');
    }
  }, [currentTime]);

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 10,
        padding: 0,
        backgroundColor: '#eff5f8',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Left side content */}
      <div
        style={{
          backgroundColor: '#fff',
          width: '100%',
          padding: '20px 0px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '30px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/1233.png" alt="Logo" style={{ width: '200px', marginRight: '10px' }} />
          <h1>Salary Management</h1>
        </div>
        <div style={{ marginTop: '30px', fontSize: '0px' }}>
          {(greeting === 'Good Morning' && <SunIcon style={{ width: '200px', height: '200px', marginRight: '10px' }} />) ||
            (greeting === 'Good Night' && <MoonIcon style={{ width: '100px', height: '100px', marginRight: '10px' }} />)}
          <p style={{ fontSize: '20px', fontWeight: 'thin', marginBottom: '00px' }}>{greeting}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <a href="/add">
            <button
              style={{
                margin: '20px 0px',
                padding: '10px 20px',
                fontSize: '18px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add
            </button>
          </a>
          <a href="/">
            <button
              style={{
                margin: '20px 10px',
                padding: '10px 20px',
                fontSize: '18px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Paysheet
            </button>
          </a>
        </div>
      </div>

      {/* Calculator at the bottom of the page */}
      <Calculator style={{ marginTop: '90px' }} />
    </div>
  );
};

export default Dashboard;

