import './App.css';
import {BrowserRouter , Routes , Route, Link} from "react-router-dom"

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



       

function App() {
  return (
    <BrowserRouter>
    <Header/>
      
        <Routes>
 {/* Transport */}
          <Route path="/add" exact element={<AddShuttle/>}/>
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
          <Route path='/' exact element = {<SupportHome/>}/>
          <Route path='/Ticket' exact element = {<Ticket/>}/>
          <Route path='/AllTickets' exact element = {<AllTickets/>}/>
          <Route path='/FAQ' exact element = {<FAQ/>}/>
          <Route path="/TicketDetail/:id" exact element={<TicketDetail/>} />
 {/* Attendance */}
        <Route path='/Attendance' exact element={<Attendance/>}/>
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
        <Route path="/AddEmployee" element={<AddEmployee />} />
        <Route path="/person/:id" element={<PersonDetails />}/>
        <Route path="/person/nationalId/:nationalId" element={ <AdminProfile />}/>
        <Route exact path="/person/login" element={<Login/>} />
        <Route path="/person/update/:id" element={<UpdatePersonForm />}/>
    
      
          
        </Routes>
        <Chat/>
    </BrowserRouter>
  );
}

export default App;