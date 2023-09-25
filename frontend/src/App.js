import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Navbar from './Navbar/Navbar';
import Navrbar from "./Course_Creation_and_Management/component/Navrbar";
import Forms from "./Course_Creation_and_Management/component/Forms";
import AddedCourses from "./Course_Creation_and_Management/component/AddedCourses";
import EditCourse from "./Course_Creation_and_Management/component/EditCourse";
import UpdateCourse from "./Course_Creation_and_Management/component/UpdateCourse";

function App() {
  return (
    <Router>
      <div>
        <Navrbar />
        <Routes><Route path="/" exact Component={AddedCourses} />
        <Route path="/update/:courseID" component={UpdateCourse} /></Routes>
        <Routes><Route path="/add" exact Component={Forms} /></Routes>
        {/* <Routes><Route path="" exact Component={}/></Routes> */}
      </div>
    </Router>

  );
}

export default App;
