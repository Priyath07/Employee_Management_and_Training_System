import React, { useEffect,useState } from "react";
import './attendanceStyle.css'
import{Link} from 'react-router-dom'
import axios from "axios";

const Attendance = () => {

  const [attendanceCount, setAttendanceCount] = useState(0);
  const [leaveCount, setLeaveCount] = useState(0);

  useEffect(()=> {
    function getAttendance(){
      axios.get("http://localhost:8070/attendance")
      .then((res)=>{
        setAttendanceCount(res.data.length);
      })
      .catch((err)=>{
        alert(err.message);
      });
    }
    getAttendance();
  }, []);

  //count leaves
  useEffect(()=> {
    function getLeaves(){
      axios.get("http://localhost:8070/leave")
      .then((res)=>{
        setLeaveCount(res.data.length);
      })
      .catch((err)=>{
        alert(err.message);
      });
    }
    getLeaves();
  }, []);

    return ( 
        <>
                <div className="Normal">
                <section className="heading">
                <h1>Attendance And Leave</h1><br/>
                <ul>
                
                
                
                Number of attendance for month:  {attendanceCount}<br/><br/>
                 <Link to="/AttendanceSheet">Attendance Sheet</Link> <br/><br/>
                Number of Leaving for month: {leaveCount}<br/><br/>
                <Link to="/leave/Leave">Requests for Leaving</Link><br/><br/>
                Number of leavings remaining for month: <br/><br/>
                <Link to="/leave/LeaveHistory">Leave history</Link> <br/><br/>
                Total overtime Works: <br/><br/>
                
                <Link to="/HRleave">Show Leave Requests</Link> <br/><br/>
                <Link to="/AttendanceForm">AttendanceForm</Link> 
               
               </ul>
               </section>
                </div>
              <br></br>  
                
        </>
     );
}
 
export default Attendance;
