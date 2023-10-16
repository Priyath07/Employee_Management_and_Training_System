import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {  useNavigate } from 'react-router-dom';


const HRfront = () =>{
  const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("");

      
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    navigate(e.target.value);
  };

    return(
        <>
        <div className="Normal">
            <section className="heading">
               <h1>Admin DashBoard</h1><br/>
               <ul>
               <Link to="/AttendanceSheet">Attendance Sheet:</Link><br></br><br></br>
               <Link to="/HRleave">Leave Requests</Link><br></br><br></br>
               <Link to="/offTimeDis"> Employee Off Time </Link><br></br><br></br>
           
               <label htmlFor="leaveType">Select Approved Leave Type:</label>
            <select id="leaveType" value={selectedOption} onChange={handleSelectChange}>
              <option value="">-/</option>
              <option value="AM">Approved Medical Leaves</option>
              <option value="HDdis">Approved Halfday Leaves</option>
              <option value="DL">Approved Duty Leaves</option>
            </select>
            <br /><br />
            
            {selectedOption === "approvedMedicalLeaves" && (
              <Link to="/AM">Approved Medical Leaves</Link>
            )}
            {selectedOption === "approvedHalfdayLeaves" && (
              <Link to="/HDdis">Approved Halfday Leaves</Link>
            )}
            {selectedOption === "approvedDutyLeaves" && (
              <Link to="/DL">Approved Duty Leaves</Link>
            ) }
            
          </ul>
               

           </section> 
        </div>
        </>
    );
}

export default HRfront;