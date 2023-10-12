import React,{useState,useEffect} from "react";
import axios from 'axios';

function ApprovedHalfDayFront(){

    const[HDleaves,setHDleaves] = useState([]);
    useEffect(() => {
        function getHDleaves() {
            axios.get("http://localhost:8070/approvedHalfDayLv/HDdis").then((res) => {
                setHDleaves(res.data)
            }).catch((err) => {
                alert(err.message);
            })
        }
        getHDleaves();
    }, []);

return ( 
    <div className="container">
       <br/>
       <h1>Approved Halfday Leaves</h1>
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
                   {HDleaves.map((HDleave, index) => (
                       <tr key={HDleave._id}>
                           <th scope="row">{index + 1}</th>
                           <td>{HDleave.employeeId}</td>
                           <td>{HDleave.employeeName}</td>
                           <td>{HDleave.description}</td>
                           
                          
                       </tr>
                   ))}
               </tbody>
           </table>

    </div>

    );

}
export default ApprovedHalfDayFront ;