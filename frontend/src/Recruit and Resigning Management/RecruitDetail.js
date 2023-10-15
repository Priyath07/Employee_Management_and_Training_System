
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';

// // function RecruitDetail() {
// //   const [recruitData, setRecruitData] = useState([]);
  
// //   useEffect(() => {
// //     // Fetch the recruit data when the component mounts
// //     axios.get("http://localhost:8070/recruit/recruits")
// //       .then((response) => {
// //         setRecruitData(response.data);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching recruit data: " + error.message);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Recruit Details</h1>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Full Name</th>
// //             <th>Email</th>
// //             <th>NIC</th> {/* Add the NIC field */}
// //             <th>Education</th> {/* Add the Education field */}
// //             {/* Add more table headers for other fields */}
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {recruitData.map((recruit) => (
// //             <tr key={recruit._id}>
// //               <td>{recruit.fullName}</td>
// //               <td>{recruit.email}</td>
// //               <td>{recruit.nic}</td> {/* Display the NIC field */}
// //               <td>{recruit.education}</td> {/* Display the Education field */}
// //               <td>
// //           <Link to={`/recruit/${recruit._id}`}>View</Link>
// //          </td>{/* Add more table cells for other fields */}
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default RecruitDetail;
// // RecruitDetail.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const RecruitDetail = () => {
//   const { id } = useParams();
//   const [recruitData, setRecruitData] = useState({});

//   useEffect(() => {
//     // Fetch recruit details by ID when the component mounts
//     axios.get(`http://localhost:8070/recruit/recruits/${id}`)
//       .then((res) => {
//         setRecruitData(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching recruit details: ' + error);
//       });
//   }, [id]);

//   return (
//     <div className="recruit-detail-container">
//       <h2>Recruit Details</h2>
//       <p><strong>Full Name:</strong> {recruitData.fullName}</p>
//       <p><strong>Email:</strong> {recruitData.email}</p>
//       <p><strong>NIC:</strong> {recruitData.nic}</p>
//       <p><strong>Education:</strong> {recruitData.education}</p>
//       <p><strong>High School:</strong> {recruitData.highSchool}</p>
//       <p><strong>City:</strong> {recruitData.city}</p>
//       <p><strong>Graduate:</strong> {recruitData.graduate}</p>
//       <p><strong>Diploma:</strong> {recruitData.diploma}</p>
      
//     </div>
//   );
// };

// export default RecruitDetail;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const RecruitDetail = () => {
//   const { id } = useParams();
//   const [recruitData, setRecruitData] = useState({});
//   const [replyContent, setReplyContent] = useState('');

//   useEffect(() => {
//     axios.get(`http://localhost:8070/recruit/recruits/${id}`)
//       .then((res) => {
//         setRecruitData(res.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [id]);

//   const handleReply = () => {
//     const emailSubject = 'Reply to Recruit'; // You can customize the subject
//     const mailtoLink = `mailto:${recruitData.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(replyContent)}`;
//     window.location.href = mailtoLink;
//   };

//   return (
//     <div className="recruit-detail-container">
//       <h2>Recruit Details</h2>
//       <p><strong>Full Name:</strong> {recruitData.fullName}</p>
//       <p><strong>Email:</strong> {recruitData.email}</p>
//       <p><strong>NIC:</strong> {recruitData.nic}</p>
//       <p><strong>Education:</strong> {recruitData.education}</p>
//       <p><strong>High School:</strong> {recruitData.highSchool}</p>
//       <p><strong>City:</strong> {recruitData.city}</p>
//       <p><strong>Graduate:</strong> {recruitData.graduate}</p>
//       <p><strong>Diploma:</strong> {recruitData.diploma}</p>
//       <div className="reply-section">
//         <h3>Reply via Email</h3>
//         <textarea
//           placeholder="Type your reply here..."
//           value={replyContent}
//           onChange={(e) => setReplyContent(e.target.value)}
//         />
//         <button onClick={handleReply}>Reply via Email</button>
//       </div>
//     </div>
//   );
// };

// export default RecruitDetail;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';

const RecruitDetail = () => {
  const { id } = useParams();
  const [recruitData, setRecruitData] = useState({});
  const [replyContent, setReplyContent] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8070/recruit/recruits/${id}`)
      .then((res) => {
        setRecruitData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleReply = () => {
    const emailSubject = 'Reply to Recruit'; // You can customize the subject
    const mailtoLink = `mailto:${recruitData.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(replyContent)}`;
    window.location.href = mailtoLink;
  };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    pdf.text("Recruit Details", 10, 10);

    const fields = [
      "Full Name",
      "Email",
      "NIC",
      "Education",
      "High School",
      "City",
      "Graduate",
      "Diploma",
    ];

    const data = [
      recruitData.fullName,
      recruitData.email,
      recruitData.nic,
      recruitData.education,
      recruitData.highSchool,
      recruitData.city,
      recruitData.graduate,
      recruitData.diploma,
    ];

    const startY = 20;
    const rowHeight = 10;
    const colWidth = 50;

    for (let i = 0; i < fields.length; i++) {
      pdf.text(fields[i], 10, startY + i * rowHeight);
      pdf.text(data[i], colWidth, startY + i * rowHeight);
    }

    pdf.save("RecruitDetails.pdf");
  };

  return (
    <div className="recruit-detail-container">
      <h2>Recruit Details</h2>
      <p><strong>Full Name:</strong> {recruitData.fullName}</p>
      <p><strong>Email:</strong> {recruitData.email}</p>
      <p><strong>NIC:</strong> {recruitData.nic}</p>
      <p><strong>Education:</strong> {recruitData.education}</p>
      <p><strong>High School:</strong> {recruitData.highSchool}</p>
      <p><strong>City:</strong> {recruitData.city}</p>
      <p><strong>Graduate:</strong> {recruitData.graduate}</p>
      <p><strong>Diploma:</strong> {recruitData.diploma}</p>
       <p><strong>Uploaded CV:</strong>{recruitData.cv}</p>
        <a href={`http://localhost:8070/${recruitData.cv}`} target="_blank" rel="noopener noreferrer">View CV</a>
      
      
      <div className="reply-section">
        <h3>Reply via Email</h3>
        <textarea
          placeholder="Type your reply here..."
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
        />
        <button onClick={handleReply}>Reply via Email</button>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
    </div>
  );
};

export default RecruitDetail;


