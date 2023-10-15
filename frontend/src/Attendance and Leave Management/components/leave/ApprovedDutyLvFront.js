// import React,{useState,useEffect} from "react";
// import axios from 'axios';

// function ApprovedDutyLvFront(){

//     const[DLleaves,setDLleaves] = useState([]);
//     useEffect(() => {
//         function getDLleaves() {
//             axios.get("http://localhost:8070/approvedDutyLv/DL").then((res) => {
//                 setDLleaves(res.data)
//             }).catch((err) => {
//                 alert(err.message);
//             })
//         }
//         getDLleaves();
//     }, []);

// return ( 
//     <div className="container">
//        <br/>
//        <h1>Approved Duty-Leaves</h1>
//       <table className="table">
//                <thead>
//                    <tr className="table-success">  
//                        <th scope="col">No</th>
//                        <th scope="col">Employee ID</th>
//                        <th scope="col">Employee Name</th>
//                        <th scope="col">Description</th>
                      
//                    </tr>
//                </thead>
//                <tbody>
//                    {DLleaves.map((DLleave, index) => (
//                        <tr key={DLleave._id}>
//                            <th scope="row">{index + 1}</th>
//                            <td>{DLleave.employeeId}</td>
//                            <td>{DLleave.employeeName}</td>
//                            <td>{DLleave.description}</td>
                           
                          
//                        </tr>
//                    ))}
//                </tbody>
//            </table>

//     </div>

//     );

// }
// export default ApprovedDutyLvFront ;

import React,{useState,useEffect} from "react";
import axios from 'axios';

function ApprovedDutyLvFront(){

    const[DLleaves,setDLleaves] = useState([]);
    useEffect(() => {
        function getDLleaves() {
            axios.get("http://localhost:8070/approvedDutyLv/DL").then((res) => {
                setDLleaves(res.data)
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDLleaves();
    }, []);

return ( 
    <div className="container">
       <br/>
       <h1>Approved Duty-Leaves</h1>
      <table className="table">
               <thead>
                   <tr className="table-success">  
                       <th scope="col">No</th>
                       <th scope="col">Employee ID</th>
                       <th scope="col">Employee Name</th>
                       <th scope="col">Description</th>
                      
                   </tr>
               </thead>
               <tbody>
                   {DLleaves.map((DLleave, index) => (
                       <tr key={DLleave._id}>
                           <th scope="row">{index + 1}</th>
                           <td>{DLleave.employeeId}</td>
                           <td>{DLleave.employeeName}</td>
                           <td>{DLleave.description}</td>
                           
                          
                       </tr>
                   ))}
               </tbody>
           </table>

    </div>

    );

}
export default ApprovedDutyLvFront ;