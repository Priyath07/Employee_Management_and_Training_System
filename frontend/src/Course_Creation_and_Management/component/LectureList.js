// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const LectureList = () => {
//   const [lectures, setLectures] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLectures = async () => {
//       try {
//         const response = await axios.get("http://localhost:8050/Course_Creation_and_Management/lecture/LectureList");
//         setLectures(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };

//     fetchLectures();
//   }, []);

//   return (
//     <div>
//       <h2>Lecture List</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {lectures.length > 0 ? (
//             lectures.map((lecture) => (
//               <li key={lecture._id}>
//                 <Link to={`/lecture/${lecture._id}`}>{lecture.title}</Link>
//               </li>
//             ))
//           ) : (
//             <p>No lectures available.</p>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default LectureList;

// import React from 'react';
// import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBTable align='middle'>
//       <MDBTableHead>
//         <tr>
//           <th scope='col'>Name</th>
//           <th scope='col'>Title</th>
//           <th scope='col'>Status</th>
//           <th scope='col'>Position</th>
//           <th scope='col'>Actions</th>
//         </tr>
//       </MDBTableHead>
//       <MDBTableBody>
//         <tr>
//           <td>
//             <div className='d-flex align-items-center'>
//               <img
//                 src='https://mdbootstrap.com/img/new/avatars/8.jpg'
//                 alt=''
//                 style={{ width: '45px', height: '45px' }}
//                 className='rounded-circle'
//               />
//               <div className='ms-3'>
//                 <p className='fw-bold mb-1'>John Doe</p>
//                 <p className='text-muted mb-0'>john.doe@gmail.com</p>
//               </div>
//             </div>
//           </td>
//           <td>
//             <p className='fw-normal mb-1'>Software engineer</p>
//             <p className='text-muted mb-0'>IT department</p>
//           </td>
//           <td>
//             <MDBBadge color='success' pill>
//               Active
//             </MDBBadge>
//           </td>
//           <td>Senior</td>
//           <td>
//             <MDBBtn color='link' rounded size='sm'>
//               Edit
//             </MDBBtn>
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <div className='d-flex align-items-center'>
//               <img
//                 src='https://mdbootstrap.com/img/new/avatars/6.jpg'
//                 alt=''
//                 style={{ width: '45px', height: '45px' }}
//                 className='rounded-circle'
//               />
//               <div className='ms-3'>
//                 <p className='fw-bold mb-1'>Alex Ray</p>
//                 <p className='text-muted mb-0'>alex.ray@gmail.com</p>
//               </div>
//             </div>
//           </td>
//           <td>
//             <p className='fw-normal mb-1'>Consultant</p>
//             <p className='text-muted mb-0'>Finance</p>
//           </td>
//           <td>
//             <MDBBadge color='primary' pill>
//               Onboarding
//             </MDBBadge>
//           </td>
//           <td>Junior</td>
//           <td>
//             <MDBBtn color='link' rounded size='sm'>
//               Edit
//             </MDBBtn>
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <div className='d-flex align-items-center'>
//               <img
//                 src='https://mdbootstrap.com/img/new/avatars/7.jpg'
//                 alt=''
//                 style={{ width: '45px', height: '45px' }}
//                 className='rounded-circle'
//               />
//               <div className='ms-3'>
//                 <p className='fw-bold mb-1'>Kate Hunington</p>
//                 <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
//               </div>
//             </div>
//           </td>
//           <td>
//             <p className='fw-normal mb-1'>Designer</p>
//             <p className='text-muted mb-0'>UI/UX</p>
//           </td>
//           <td>
//             <MDBBadge color='warning' pill>
//               Awaiting
//             </MDBBadge>
//           </td>
//           <td>Senior</td>
//           <td>
//             <MDBBtn color='link' rounded size='sm'>
//               Edit
//             </MDBBtn>
//           </td>
//         </tr>
//       </MDBTableBody>
//     </MDBTable>
//   );
// }


import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBBadge } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LectureList = () => {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await axios.get("http://localhost:8050/Course_Creation_and_Management/lecture/LectureList");
        setLectures(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchLectures();
  }, []);

  return (
    <div>
      <h2>Lecture List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MDBTable align='middle'>
          <MDBTableHead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Status</th>
              <th scope='col'>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {lectures.length > 0 ? (
              lectures.map((lecture) => (
                <tr key={lecture._id}>
                  <td>{lecture.title}</td>
                  <td>
                    <MDBBadge color='success' pill>
                      Active
                    </MDBBadge>
                  </td>
                  <td>
                    <Link to={`/lecture/${lecture._id}`}>
                      <MDBBtn color='link' rounded size='sm'>
                        Edit
                      </MDBBtn>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No lectures available.</td>
              </tr>
            )}
          </MDBTableBody>
        </MDBTable>
      )}
    </div>
  );
};

export default LectureList;
