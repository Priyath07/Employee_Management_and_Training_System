import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Navbar from './Navbar/Navbar';
import Navrbar from "./Course_Creation_and_Management/component/Navrbar";
import Forms from "./Course_Creation_and_Management/component/Forms";
import AddedCourses from "./Course_Creation_and_Management/component/AddedCourses";
//import EditCourse from "./Course_Creation_and_Management/component/EditCourse";
import UpdateCourse from "./Course_Creation_and_Management/component/UpdateCourse";
import LectureList from "./Course_Creation_and_Management/component/LectureList";
import LectureProfile from "./Course_Creation_and_Management/component/LectureProfile";
import LectureForm from "./Course_Creation_and_Management/component/LectureForm";
import CourseHome from "./Course_Creation_and_Management/component/CourseHome";
import Footer from "./Course_Creation_and_Management/component/Footer";

function App() {
  return (
    <Router>
      <div>
        {/* <Navrbar /> */}
        
        

        <Navrbar/>
        {/* <h1>Lecture Profiles</h1> */}
        <Routes><Route path="/" exact Component={AddedCourses} /></Routes>
        <Routes><Route path="/update/:courseID" component={UpdateCourse} /></Routes>
        <Routes><Route path="/add" exact Component={Forms} /></Routes>
          
        <Routes><Route path="/lectureList" exact Component={LectureList} /></Routes>
        <Routes><Route path="/lectureProfile/:id" Component={LectureProfile} /></Routes>
        <Routes><Route path="/addLecture" exact Component={LectureForm} /></Routes>
        <Routes><Route path="/updateLecture/:id" Component={LectureForm} /></Routes>
        <Footer/>  
        
        {/* <Routes><Route path="" exact Component={}/></Routes> */}
      </div>
    </Router>

    

  );
}

export default App;
