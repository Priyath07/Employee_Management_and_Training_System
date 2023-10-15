// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function ItemList() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     // Fetch data from your API endpoint
//     axios
//       .get('http://localhost:8070/Salary_and_Benefits_Management/employee')
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching employees:', error);
//       });
//   }, []);

  // const handleDelete = (employeeId) => {
    // const confirmDeletion = window.confirm('Are you sure you want to delete this employee?');

    // if (confirmDeletion) {
    //   axios
    //     .delete(`http://localhost:8070/Salary_and_Benefits_Management/employee/delete/${employeeId}`)
    //     .then((response) => {
    //       // Handle the response if needed
    //       // Remove the deleted employee from the employee list
    //       const updatedEmployees = employees.filter((employee) => employee._id !== employeeId);
    //       setEmployees(updatedEmployees);
    //     })
    //     .catch((error) => {
    //       console.error('Error deleting employee:', error);
    //       // Handle errors if needed
    //     });
    // }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-12">
//           <h2 className="mb-4">Paysheet List</h2>
//           <div className="shadow p-4">
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Age</th>
//                   <th>Department</th>
//                   <th>Work Days</th>
//                   <th>Daily Rate</th>
//                   <th>Loan Interests</th>
//                   <th>Bonus</th>
//                   <th>Total Salary</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {employees.map((employee) => (
//                   <tr key={employee._id}>
//                     <td>{employee.name}</td>
//                     <td>{employee.age}</td>
//                     <td>{employee.department}</td>
//                     <td>{employee.workDays}</td>
//                     <td>{employee.dailyRate}</td>
//                     <td>{employee.loanInterests}</td>
//                     <td>{employee.bonus}</td>
//                     <td>{employee.totalSalary}</td>
//                     <td>
                      // <div className="btn-group" role="group">
                      //   <button type="button" className="btn btn-sm btn-primary">
                      //     <Link to={`/New/${employee._id}`} className="text-white">
                      //       Edit
                      //     </Link>
                      //   </button>
                      //   <button
                      //     type="button"
                      //     className="btn btn-sm btn-danger"
                      //     onClick={() => handleDelete(employee._id)}
                      //   >
                      //     Delete
                      //   </button>
                      // </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ItemList;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ItemList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8070/Salary_and_Benefits_Management/employee')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const handleDelete = (id) => {
    const confirmDeletion = window.confirm('Are you sure you want to delete this employee?');

    if (confirmDeletion) {
      axios
        .delete(`http://localhost:8070/Salary_and_Benefits_Management/employee/delete/${id}`)
        .then((response) => {
          // Handle the response if needed
          // Remove the deleted employee from the employee list
          const updatedEmployees = employees.filter((employee) => employee._id !== id);
          setEmployees(updatedEmployees);
        })
        .catch((error) => {
          console.error('Error deleting employee:', error);
          // Handle errors if needed
        });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-300">
          <h2 className="mb-4">Paysheet List</h2>
          <div className="shadow p-4">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Department</th>
                  <th>Work Days</th>
                  <th>Daily Rate</th>
                  <th>Loan Interests</th>
                  <th>Bonus</th>
                  <th>Course Name</th>
                  <th>Course Fee</th>
                  <th>Total Salary</th>
                  <th>ETF Reduction</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee._id}>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.department}</td>
                    <td>{employee.workDays}</td>
                    <td>{employee.dailyRate}</td>
                    <td>{employee.loanInterests}</td>
                    <td>{employee.bonus}</td>
                    <td>{employee.courseName}</td>
                    <td>{employee.courseFee}</td>
                    <td>{employee.totalSalary}</td>
                    <td>{employee.etfReduction}</td>
                    <td>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-sm btn-primary">
                          <Link to={`/New/${employee._id}`} className="text-white">
                            Edit
                          </Link>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(employee._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;