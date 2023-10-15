/// Salary-and-Benefits-Management
// import "./App.css";
// //import React, { useState, useEffect, Link } from "react";
// //import Home from './components/Home';

// import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
// import Navbar from "./Salary_and_Benefits_Management/components/Navbar";
// import Forms from "./Salary_and_Benefits_Management/components/Forms";
// import ItemList from "./Salary_and_Benefits_Management/components/ItemList";
// //import ItemList from "./components/ItemList";
// //import Home from './components/Home';
// import EditEmployee from "./Salary_and_Benefits_Management/components/EditEmployee";
// import AdminDashboard from "./Salary_and_Benefits_Management/components/AdminDashboard";
// //import GeneratePDF from "./components/generatePDF";
// import Footer from "./Salary_and_Benefits_Management/components/Footer";
// //import SalaryCalculator from "./components/SalaryCalculator";

// function App() {


//   return (
//     <Router>
      
//       <div>
//         {/* <Navbar /> */}

//         <Route path="/p" component={AdminDashboard} />

//         <Routes>
      
        
//         <Route path="/add" exact Component={Forms} />
      
//     </Routes>  

       
//         <Routes>
//           <Route path="/" exact Component={ItemList} />
        
//         </Routes> 
//         <Routes>
//           <Route path="/New/:id" exact Component={EditEmployee} />
//         </Routes> 
        
 


      
         
//          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

//          <Routes><Route path="/add" exact Component={Footer} /></Routes>

        
       
//         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
//         {<Footer />}
//       </div>

    
//     </Router>
    
    
//   )


// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Salary_and_Benefits_Management/components/Navbar";
import Forms from "./Salary_and_Benefits_Management/components/Forms";
import ItemList from "./Salary_and_Benefits_Management/components/ItemList";
import EditEmployee from "./Salary_and_Benefits_Management/components/EditEmployee";
import AdminDashboard from "./Salary_and_Benefits_Management/components/AdminDashboard";
import Footer from "./Salary_and_Benefits_Management/components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/p" element={<AdminDashboard />} />
          <Route path="/add" element={<Forms />} />
          <Route path="/" element={<ItemList />} />
          <Route path="/New/:id" element={<EditEmployee />} />
        </Routes>

        <Routes>
          <Route path="/add" element={<Footer />} />
        </Routes>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
///

import {BrowserRouter , Routes , Route, Link} from "react-router-dom"

import EmployeeManagement from './EmployeeManagement';
// Transport
import AddShuttle from './Transportation Management/components/AddShuttle/Shuttle';
import Header from './Transportation Management/components/AddShuttle/Header';
import AllShuttles from './Transportation Management/components/AddShuttle/AllShuttle';
import ApplyShuttle from './Transportation Management/components/Apply/ApplyShuttle';
import Passenger from './Transportation Management/components/Apply/Passenger';
import DriverPassenger from './Transportation Management/components/Apply/DriverPassenger';
import PassengerReport from './Transportation Management/components/Apply/PassengerReport';
import Home from './Transportation Management/components/Home/Home';
import LearnMore from './Transportation Management/components/AddShuttle/LearnMore';

// Help
import AddFeedback from './Help and Support Management/components/Feedback/Feedback';
import SupportHome from './Help and Support Management/components/SupportHome';
import AllFeedbacks from './Help and Support Management/components/Feedback/AllFeedbacks';
import Ticket from './Help and Support Management/components/Ticket/Ticket';
import AllTickets from './Help and Support Management/components/Ticket/AllTickets';
import TicketDetail from './Help and Support Management/components/Ticket/TicketDetail';
import FAQ from './Help and Support Management/components/Faq/FAQ';
import Chat from './Help and Support Management/components/Chat';

//attendance
import Leave from './Attendance and Leave Management/components/leave/Leave';
import Attendance from './Attendance and Leave Management/components/attendance/attendance';
import HRleave from './Attendance and Leave Management/components/HRleave';
import AttendanceForm from './Attendance and Leave Management/components/attendance/AttendanceForm';
import AttendanceSheet from './Attendance and Leave Management/components/attendance/AttendanceSheet';
import ApprovedMedicFront from './Attendance and Leave Management/components/leave/ApprovedMedicFront';
import OffTimeForm from './Attendance and Leave Management/components/attendance/OffTimeForm';
import OffTimeTable from './Attendance and Leave Management/components/attendance/OffTimeTable';
import ApprovedHalfDayFront from './Attendance and Leave Management/components/leave/ApprovedHalfDayLvFront';
import ApprovedDutyLvFront from './Attendance and Leave Management/components/leave/ApprovedDutyLvFront';
import HRfront from './Attendance and Leave Management/components/HRfront';
import LeaveHistoryFront from './Attendance and Leave Management/components/leave/LeaveHistoryFront';
import LeaveHistory from './Attendance and Leave Management/components/leave/LeaveHistory';

//Kdeelz
import PersonList from './Customer Management/Components/PersonList';
import AddEmployee from './Customer Management/Components/AddEmployee';
import PersonDetails from './Customer Management/Components/PersonDetails';
import UpdatePersonForm from './Customer Management/Components/UpdatePersonForm';
import Login from './Customer Management/Components/Login';
import AdminProfile from './Customer Management/Components/AdminProfile';
import LecturerProfile from './Customer Management/Components/LecturerProfile';
import DriverProfile from './Customer Management/Components/DriverProfile';
import EmployeeProfile from './Customer Management/Components/EmployeeProfile';


       

function App() {
  return (
    <BrowserRouter>
   
      
        <Routes>
        <Route path="/" element={<EmployeeManagement />} />
 {/* Transport */}
          <Route path="/AddShuttle" exact element={<AddShuttle/>}/>
          <Route path='/AllShuttles' exact element = {<AllShuttles/>}/>
          <Route path="/ApplyShuttle" exact element={<ApplyShuttle/>}/>
          <Route path="/Passenger" exact element={<Passenger/>}/>
          <Route path="/DriverPassenger" exact element={<DriverPassenger/>}/>
          <Route path="/report" exact element={<PassengerReport/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/LearnMore" exact element = {<LearnMore/>}/>
        

 {/* Help */}
          <Route path="/Feedbackadd" exact element={<AddFeedback/>}/>
          <Route path='/AllFeedbacks' exact element = {<AllFeedbacks/>}/>
          <Route path='/SupportHome' exact element = {<SupportHome/>}/>
          <Route path='/Ticket' exact element = {<Ticket/>}/>
          <Route path='/AllTickets' exact element = {<AllTickets/>}/>
          <Route path='/FAQ' exact element = {<FAQ/>}/>
          <Route path="/TicketDetail/:id" exact element={<TicketDetail/>} />
 {/* Attendance */}
        <Route path='/attendance' exact element={<Attendance/>}/>
        <Route path='/leave/Leave' exact element={<Leave/>}/>
        <Route path='/HRleave' exact element={<HRleave/>}/>
        <Route path='/AttendanceForm' exact element={<AttendanceForm/>}/>
        <Route path='/AttendanceSheet' exact element={<AttendanceSheet/>}/>
        <Route path='/AM' exact element={<ApprovedMedicFront/>}/>
        <Route path='/OffTimeadd' exact element={<OffTimeForm/>}/>
        <Route path='/offTimeDis' exact element={<OffTimeTable/>}/>
        <Route path='/HDdis' exact element={<ApprovedHalfDayFront/>}/>
        <Route path='/addHD' exact element={<ApprovedHalfDayFront/>}/>
        <Route path='/DL' exact element={<ApprovedDutyLvFront/>}/>
        <Route path= '/HRfront' exact element={<HRfront/>}/>
        <Route path= '/LeaveHistoryFront' exact element={<LeaveHistoryFront/>}/>
        <Route path= '/leave/LeaveHistory' exact element={<LeaveHistory/>}/>

    {/* Customer */}
    <Route path="/person/personlist" element={<PersonList />} />
        <Route path="/person/add" element={<AddEmployee />} />
        <Route path="/person/:id" element={<PersonDetails />}/>
        <Route path="/person/nationalId/:nationalId" element={ <AdminProfile />}/>
        <Route path="/person/lecturer/nationalId/:nationalId" element={ <LecturerProfile />}/>
        <Route path="/person/driver/nationalId/:nationalId" element={ <DriverProfile />}/>
        <Route path="/person/employee/itNumber/:itNumber" element={ <EmployeeProfile />}/>
        <Route exact path="/login" element={<Login/>} />
        <Route path="/person/update/:id" element={<UpdatePersonForm />} />
    
      
          
        </Routes>
        <Chat/>
    </BrowserRouter>
/// main
  );
}

export default App;