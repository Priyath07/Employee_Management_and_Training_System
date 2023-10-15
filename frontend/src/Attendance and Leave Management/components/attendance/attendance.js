// import React, { useEffect,useState } from "react";
// import './attendanceStyle.css'
// import{Link} from 'react-router-dom'
// import axios from "axios";

// const Attendance = () => {

//   const [attendanceCount, setAttendanceCount] = useState(0);
//   const [leaveCount, setLeaveCount] = useState(0);

//   useEffect(()=> {
//     function getAttendance(){
//       axios.get("http://localhost:8070/attendance")
//       .then((res)=>{
//         setAttendanceCount(res.data.length);
//       })
//       .catch((err)=>{
//         alert(err.message);
//       });
//     }
//     getAttendance();
//   }, []);

//   //count leaves
//   useEffect(()=> {
//     function getLeaves(){
//       axios.get("http://localhost:8070/leave")
//       .then((res)=>{
//         setLeaveCount(res.data.length);
//       })
//       .catch((err)=>{
//         alert(err.message);
//       });
//     }
//     getLeaves();
//   }, []);

//     return ( 
//         <>
//                 <div className="Normal">
//                 <section className="heading">
//                 <h1>Attendance And Leave</h1><br/>
//                 <ul>
                
                
                
//                 Number of attendance for month:  {attendanceCount}<br/><br/>
//                  <Link to="/AttendanceSheet">Attendance Sheet</Link> <br/><br/>
//                 Number of Leaving for month: {leaveCount}<br/><br/>
//                 <Link to="/leave/Leave">Requests for Leaving</Link><br/><br/>
//                 Number of leavings remaining for month: <br/><br/>
//                 <Link to="/leave/LeaveHistory">Leave history</Link> <br/><br/>
//                 Total overtime Works: <br/><br/>
                
//                 <Link to="/HRleave">Show Leave Requests</Link> <br/><br/>
//                 <Link to="/AttendanceForm">AttendanceForm</Link> 
               
//                </ul>
//                </section>
//                 </div>
//               <br></br>  
                
//         </>
//      );
// }
 
// export default Attendance;



import React, { useEffect,useState } from "react";
import './attendanceStyle.css'
import{Link} from 'react-router-dom'
import axios from "axios";

const Attendance = () => {

  const [attendanceCount, setAttendanceCount] = useState(0);
  const [leaveCount, setLeaveCount] = useState(0);

  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [OffTimeViews, setOffTimeViews] = useState([]);
  const [overTime, setoverTime] = useState();

  const employeeId="200531003173"

  useEffect(()=> {
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

  const   getAttendance = async () => {
    try {
      const response = await axios.get('http://localhost:8070/attendance');
      setAttendanceRecords(response.data);
      setAttendanceCount(response.data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


 


  useEffect(() => {
      function getOffTimeViews() {
          axios.get("http://localhost:8070/offTime/offTimeDis").then((res) => {
              setOffTimeViews(res.data)
          }).catch((err) => {
              alert(err.message);
          })
      }
      getOffTimeViews();
  }, []);

  const GetDatenadTme=(value)=>{
    const date = new Date(value);

    // Format the date as "YYYY/MM/DD"
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Add 1 to the month and format with leading zeros
    const day = date.getUTCDate().toString().padStart(2, '0'); // Format with leading zeros
    const formattedDate = `${year}/${month}/${day}`;
    
    // Format the time as "HH:MM:SS"
    const hours = date.getUTCHours().toString().padStart(2, '0'); // Format with leading zeros
    const minutes = date.getUTCMinutes().toString().padStart(2, '0'); // Format with leading zeros
    const seconds = date.getUTCSeconds().toString().padStart(2, '0'); // Format with leading zeros
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return {
date:formattedDate,
time:formattedTime,

    }

  }

  useEffect(() => {
    const currentMonth = new Date().getMonth(); // Get the current month (0-indexed)

    const filteredAttendanceRecords = attendanceRecords.filter(item => item.employeeId === employeeId);
    const filteredOffTimeViews = OffTimeViews.filter(item => item.employeeId === employeeId);

    const attendanceRecordTimestamps = filteredAttendanceRecords.map(item => item.timestamp);
    const OffTimeTimestamps = filteredOffTimeViews.map(item => item.timestamp);

    const attendanRecord = attendanceRecordTimestamps.map(timestamp => GetDatenadTme(timestamp));
    const OffTime = OffTimeTimestamps.map(timestamp => GetDatenadTme(timestamp));

    // Create an array to store the differences
    const timeDifferences = [];
    let totalDifference = 0;

    for (let i = 0; i < Math.min(attendanRecord.length, OffTime.length); i++) {
        const attendanRecordDate = attendanRecord[i].date;
        const attendanRecordTime = attendanRecord[i].time;
        const OffTimeDate = OffTime[i].date;
        const OffTimeTime = OffTime[i].time;

        // Create Date objects for the date and time
        const attendanRecordDateTime = new Date(`${attendanRecordDate} ${attendanRecordTime}`);
        const OffTimeDateTime = new Date(`${OffTimeDate} ${OffTimeTime}`);

        // Check if the date falls within the current month
        if (attendanRecordDateTime.getMonth() === currentMonth) {
            // Calculate the time difference in milliseconds
            const timeDifference = OffTimeDateTime - attendanRecordDateTime;

            // Check if the time difference is more than 8 hours (28800000 milliseconds)
            if (timeDifference > 28800000) {
                // Add the time difference to the array
                timeDifferences.push(timeDifference);
                totalDifference += timeDifference;
            }
        }
    }

    console.log("Time Differences for the current month:", timeDifferences);
    const totalHours = Math.floor(totalDifference / (60 * 60 * 1000)); 
    setoverTime(totalHours);

}, [attendanceRecords, OffTimeViews]);


    return ( 
        <>
                <div className="Normal">
                <section className="heading">
                <h1>Attendance And Leave</h1><br/>
                <ul>
                
                
                
                Number of attendance for month:  {attendanceCount}<br/><br/>
                 {/* <Link to="/AttendanceSheet">Attendance Sheet</Link> <br/><br/> */}
                Number of Leaving for month: {leaveCount}<br/><br/>
                Total overtime Works:{overTime} <br/><br/>
                <Link to="/leave/Leave">Requests for Leaving</Link><br/><br/>
                {/* Number of leavings remaining for month: <br/><br/> */}
               
                <Link to="/leave/LeaveHistory">Leave history</Link> <br/><br/>
               
                
                {/* <Link to="/HRleave">Show Leave Requests</Link> <br/><br/> */}
                <Link to="/AttendanceForm">AttendanceForm</Link> 
               
               </ul>
               </section>
                </div>
              <br></br>  
                
        </>
     );
}
 
export default Attendance;
