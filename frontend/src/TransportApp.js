import './App.css';
import {BrowserRouter , Routes , Route, Link} from "react-router-dom"
import AddShuttle from './Transportation Management/components/AddShuttle/Shuttle';
import Header from './Transportation Management/components/AddShuttle/Header';
import AllShuttles from './Transportation Management/components/AddShuttle/AllShuttle';
import ApplyShuttle from './Transportation Management/components/Apply/ApplyShuttle';
import Passenger from './Transportation Management/components/Apply/Passenger';
import DriverPassenger from './Transportation Management/components/Apply/DriverPassenger';
import PassengerReport from './Transportation Management/components/Apply/PassengerReport';
import Home from './Transportation Management/components/Home/Home';
import LearnMore from './Transportation Management/components/AddShuttle/LearnMore';
function TransportApp() {
  return (
    <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route path="/add" exact element={<AddShuttle/>}/>
          <Route path='/AllShuttles' exact element = {<AllShuttles/>}/>
          <Route path="/ApplyShuttle" exact element={<ApplyShuttle/>}/>
          <Route path="/Passenger" exact element={<Passenger/>}/>
          <Route path="/DriverPassenger" exact element={<DriverPassenger/>}/>
          <Route path="/report" exact element={<PassengerReport/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/LearnMore" exact element = {<LearnMore/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default TransportApp;