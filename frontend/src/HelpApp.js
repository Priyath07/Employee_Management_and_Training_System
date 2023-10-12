import './App.css';
import AddFeedback from './Help and Support Management/components/Feedback/Feedback';
import Header from './Help and Support Management/components/Header';
import SupportHome from './Help and Support Management/components/SupportHome';
import AllFeedbacks from './Help and Support Management/components/Feedback/AllFeedbacks';
import {BrowserRouter , Routes , Route, Link} from "react-router-dom"
import Ticket from './Help and Support Management/components/Ticket/Ticket';
import AllTickets from './Help and Support Management/components/Ticket/AllTickets';
import TicketDetail from './Help and Support Management/components/Ticket/TicketDetail';
import FAQ from './Help and Support Management/components/Faq/FAQ';
import Chat from './Help and Support Management/components/Chat'; 

function HelpApp() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/add" exact element={<AddFeedback/>}/>
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

export default HelpApp;
