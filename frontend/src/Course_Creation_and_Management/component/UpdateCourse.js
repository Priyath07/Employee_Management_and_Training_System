// // UpdateCourse.js
// import React, { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import axios from "axios";

// export default function UpdateCourse() {
//   const { courseID } = useParams(); // Get the courseID from URL parameters
//   const history = useHistory();
  
//   const [editData, setEditData] = useState({
//     courseID: '',
//     courseName: '',
//     description: '',
//     duration: '',
//     courseImage: '',
//     price: '',
//     lectureName: '',
//     category: ''
//   });

//   useEffect(() => {
//     // Fetch the course data using the courseID
//     axios
//       .get(`http://localhost:8050/Course_Creation_and_Management/course/get/${courseID}`)
//       .then((res) => {
//         console.log(res.data);
//         setEditData(res.data.course); // Assuming your API returns the course under the 'course' key
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   }, [courseID]);

//   const handleSave = () => {
//     // Send a PUT request to update the data in your backend
//     axios
//       .put(`http://localhost:8050/Course_Creation_and_Management/course/update/${courseID}`, editData)
//       .then((res) => {
//         console.log("Data updated successfully:", res.data);
//         history.push("/"); // Redirect to the course list page after updating
//       })
//       .catch((err) => {
//         alert("Error updating data: " + err.message);
//       });
//   };

//   return (
//     <div>
//       <h1>Edit Course</h1>
//       {/* Render the course data for editing, e.g., input fields */}
//       <div>
//         <label>Course Name:</label>
//         <input
//           type="text"
//           value={editData.courseName}
//           onChange={(e) => setEditData({ ...editData, courseName: e.target.value })}
//         />
//       </div>
//       <div>
//         <label>Description:</label>
//         <input
//           type="text"
//           value={editData.description}
//           onChange={(e) => setEditData({ ...editData, description: e.target.value })}
//         />
//       </div>
//       {/* Add input fields for other course properties */}
//       {/* Add a "Save" button to save the edited data */}
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// }
