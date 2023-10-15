// import React, { useState } from 'react';
// import axios from 'axios';

// function OffTimeForm() {
//   const [employeeName, setEmployeeName] = useState('');
//   const [employeeId, setEmployeeId] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//       // Create an object with the employee data
//       const offTimeMark = {
//         employeeName,
//         employeeId,
//       };

//       // Send a POST request to your backend to save the attendance data
//        axios.post("http://localhost:8070/offTime/OffTimeadd", offTimeMark)
//      .then((response)=>{
//   alert("Off Time Marked!");
//   // Clear the form fields after submission
//   setEmployeeName('');
//   setEmployeeId('');
// })
//   .catch( (error) =>{
//       console.error('Error marking attendance:', error);
//       alert('Failed to mark attendance. Please try again.');
//     })
//   };

//   return (
//     <div className='container'>
//       <div className='middlein'>
//         <div className='card'>
//           <div className='card-body'>
//       <br/>
//       <h2>MARK Off Time</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="employeeName" className="form-label">Employee Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="employeeName"
//             value={employeeName}
//             onChange={(e) => setEmployeeName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="employeeId" className="form-label">Employee ID</label>
//           <input
//             type="text"
//             className="form-control"
//             id="employeeId"
//             value={employeeId}
//             onChange={(e) => setEmployeeId(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default OffTimeForm;

import React, { useState } from 'react';
import axios from 'axios';

function OffTimeForm() {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

      // Create an object with the employee data
      const offTimeMark = {
        employeeName,
        employeeId,
      };

      // Send a POST request to your backend to save the attendance data
       axios.post("http://localhost:8070/offTime/OffTimeadd", offTimeMark)
     .then((response)=>{
  alert("Off Time Marked!");
  // Clear the form fields after submission
  setEmployeeName('');
  setEmployeeId('');
})
  .catch( (error) =>{
      console.error('Error marking attendance:', error);
      alert('Failed to mark attendance. Please try again.');
    })
  };

  return (
    <div className='container'>
      <div className='middlein'>
        <div className='card'>
          <div className='card-body'>
      <br/>
      <h2>MARK Off Time</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="employeeName" className="form-label">Employee Name</label>
          <input
            type="text"
            className="form-control"
            id="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="employeeId" className="form-label">Employee ID</label>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
}

export default OffTimeForm;
