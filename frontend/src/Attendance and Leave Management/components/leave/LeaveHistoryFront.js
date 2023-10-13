
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const { createFactory } = require("react");

// function LeaveHistoryFront() {
//   const [leavesHistory, setLeavesHistory] = useState([]);
 

//   useEffect(() => {
//     const getLeavesHistory = async () => {
//       try {
//         const response = await axios.get('http://localhost:8070/leave/fetch/:id');
//         setLeavesHistory(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     getLeavesHistory();
//   }, []);

//   return (
//     <div className="container">
//     <br/>
//     <h1>Leaves History</h1>
//    <table className="table">
//             <thead>
//                 <tr className="table-success">  
//                     <th scope="col">No</th>
//                     <th scope="col">Employee ID</th>
//                     <th scope="col">Employee Name</th>
//                     <th scope="col">Description</th>
                   
//                 </tr>
//             </thead>
//             <tbody>
//                 {leavesHistory.map((Hleave, index) => (
//                     <tr key={Hleave._id}>
//                         <th scope="row">{index + 1}</th>
//                         <td>{Hleave.employeeId}</td>
//                         <td>{Hleave.employeeName}</td>
//                         <td>{Hleave.description}</td>
                        
                       
//                     </tr>
//                 ))}
//             </tbody>
//         </table>

//  </div>
//   );
// }

// export default LeaveHistoryFront;

const LeaveHistoryFront = () => {
  return (
    <h1>Dfd</h1>
    );
}
 
export default LeaveHistoryFront;