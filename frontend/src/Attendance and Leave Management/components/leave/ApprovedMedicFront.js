
import React, {useState,useEffect} from "react";
import axios from 'axios';



function ApprovedMedicFront ()  {

    const [AMleaves, setAMleaves] = useState([]);


    useEffect(() => {
        function getAMleaves() {
            axios.get("http://localhost:8070/approvedMedicLv/AM").then((res) => {
                setAMleaves(res.data)
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAMleaves();
    }, []);

    return ( 
     <div className="container">
        <br/>
        <h1>Approved Medical Leaves</h1>
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
                    {AMleaves.map((AMleave, index) => (
                        <tr key={AMleave._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{AMleave.employeeId}</td>
                            <td>{AMleave.employeeName}</td>
                            <td>{AMleave.description}</td>
                            
                           
                        </tr>
                    ))}
                </tbody>
            </table>

     </div>

     );
}
 
export default ApprovedMedicFront ;