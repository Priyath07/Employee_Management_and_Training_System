import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Navbar from './Navbar/Navbar';
import Navrbar from "./Course_Creation_and_Management/component/Navrbar";
import Forms from "./Course_Creation_and_Management/component/Forms";
import AddedCourses from "./Course_Creation_and_Management/component/AddedCourses";
//import EditCourse from "./Course_Creation_and_Management/component/EditCourse";
// import UpdateCourse from "./Course_Creation_and_Management/component/UpdateCourse";
import LectureList from "./Course_Creation_and_Management/component/LectureList";
import LectureProfile from "./Course_Creation_and_Management/component/LectureProfile";
import LectureForm from "./Course_Creation_and_Management/component/LectureForm";
// import CourseHome from "./Course_Creation_and_Management/component/CourseHome";
import Footer from "./Course_Creation_and_Management/component/Footer";
import CourseEdit from "./Course_Creation_and_Management/component/CourseEdit";
import CourseHome from "./Course_Creation_and_Management/component/CourseHome";
import CourseDetail from "./Course_Creation_and_Management/component/CourseDetail";
import CourseBuy from "./Course_Creation_and_Management/component/CourseBuy";
import PaymentDetailsPage from "./Course_Creation_and_Management/component/PaymentDetailsPage";

function App() {
  return (
    <Router>
      <div>
        {/* <Navrbar /> */}
        
        

        <Navrbar/>
        {/* <h1>Lecture Profiles</h1> */}
        <Routes>
          <Route path="/" exact Component={AddedCourses} />
          {/* <Route path="/update/:courseID" component={UpdateCourse} /> */}
          <Route path="/add" exact Component={Forms} />
          <Route path="/update/:id" Component={CourseEdit}/>
          <Route path="/lectureList" exact Component={LectureList} />
          <Route path="/lectureProfile/:id" Component={LectureProfile} />
          <Route path="/addLecture" exact Component={LectureForm} />
          <Route path="/updateLecture/:id" Component={LectureForm} />
          <Route path="/course/:id" component={CourseDetail} />
          <Route path="/course" Component={CourseHome} />
          <Route path="/get/:id" Component={CourseDetail} />
          <Route path="/coursePaymentAdd" Component={CourseBuy}/>
          <Route path="/coursePaymentAll" Component={PaymentDetailsPage}/>
        </Routes>
        

        {/* <CourseHome/> */}
        <Routes>
        
        </Routes>
        <Footer/> 
        {/* <Routes><Route path="" exact Component={}/></Routes> */}
      </div>
        </Router>

    

  );
}

export default App;
