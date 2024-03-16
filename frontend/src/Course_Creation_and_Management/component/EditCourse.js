// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function EditCourse() {
//   const { courseID } = useParams(); // Access the course ID from the URL
//   const [course, setEditData] = useState({ });

//   useEffect(() => {
//     // Fetch the course data based on the ID
//     axios
//       .get(`http://localhost:8050/Course_Creation_and_Management/course/get/${courseID}`)
//       .then((res) => {
//         setEditData(res.data.student); // Assuming your API response contains the student data
//       })
//       .catch((err) => {
//         alert("Error fetching data: " + err.message);
//       });
//   }, [courseID]);

//   const handleSave = () => {
//     // Send a PUT request to update the data in your backend
//     axios
//       .put(`http://localhost:8050/Course_Creation_and_Management/course/update/${courseID}`, editData)
//       .then((res) => {
//         console.log("Data updated successfully:", res.data);
//         // You can add a success message or redirect back to the previous page.
//       })
//       .catch((err) => {
//         alert("Error updating data: " + err.message);
//       });
//   };

//   return (
//     <div>
//       <h1>Edit Course</h1>
//       <p>Name :{editData.courseName}</p>
//       <form>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={editData.description}
//           onChange={(e) => setEditData({ ...course, name: e.target.value })}
//         />
//         <label>Age:</label>
//         <input
//           type="text"
//           value={editData.duration}
//           onChange={(e) => setEditData({ ...course, age: e.target.value })}
//         />
//         <label>Gender:</label>
//         <input
//           type="text"
//           value={editData.gender}
//           onChange={(e) => setEditData({ ...course, gender: e.target.value })}
//         />
//         <button type="button" onClick={handleSave}>Save</button>
//       </form>
//     </div>
//   );
// }

// export default EditCourse;
