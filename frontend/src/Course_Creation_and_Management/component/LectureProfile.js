import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LectureProfile = (props) => {
  const [lecture, setLecture] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lectureId = props.match.params.id; // Assuming you have 'id' as a route parameter
    axios.get(`/api/lectures/${lectureId}`)
      .then((response) => {
        setLecture(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [props.match.params.id]);

  return (
    <div>
      <h2>Lecture Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>Title: {lecture.title}</h3>
          <p>Lecturer: {lecture.lecturer}</p>
          <p>Description: {lecture.description}</p>
          {/* You can display more lecture details here */}
        </div>
      )}
      <div className='bg-image hover-overlay'>
      <img src='https://mdbootstrap.com/img/new/fluid/city/055.webp' className='img-fluid' />
      <a href='#!'>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </div>
    </div>
    
  );
};

 export default LectureProfile;

// import React from 'react';

// export default function LectureProfile() {
//   return (
//     <div className='bg-image hover-overlay'>
//       <img src='https://mdbootstrap.com/img/new/fluid/city/055.webp' className='img-fluid' />
//       <a href='#!'>
//         <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
//       </a>
//     </div>
//   );
// }
