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
       
          
          
        </Routes>
        <Chat/>
    </BrowserRouter>
  );
}

export default App;