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
  );
}

export default App;
