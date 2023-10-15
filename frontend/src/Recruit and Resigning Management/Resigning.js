// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Resigning() {
//   const [formData, setFormData] = useState({
//     employeeId: '',
//     name: '',
//     years: '',
//     reasonOfResigning: '',
//   });

//   const [submissionStatus, setSubmissionStatus] = useState(null);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };



// const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post(
//         'http://localhost:8070/resigning/resignations',
//         formData
//       );
//       console.log('Resigning data submitted:', response.data);
//       setSubmissionStatus('Resigning is submitted');
//       alert('Resigning is submitted');
//     } catch (error) {
//       console.error('Error submitting resigning data:', error.message);
//       setSubmissionStatus('Error submitting resigning data');
//       alert('Error submitting resigning data');
//     }
//   };
  
  

//   return (
//     <div>
//       <h2>Resigning Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="employeeId">Employee ID:</label>
//         <input
//           type="text"
//           id="employeeId"
//           name="employeeId"
//           value={formData.employeeId}
//           onChange={handleChange}
//           required
//         /><br />

//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         /><br />

//         <label htmlFor="years">Years of Service:</label>
//         <input
//           type="text"
//           id="years"
//           name="years"
//           value={formData.years}
//           onChange={handleChange}
//           required
//         /><br />

//         <label htmlFor="reasonOfResigning">Reason of Resigning:</label>
//         <input
//           type="text"
//           id="reasonOfResigning"
//           name="reasonOfResigning"
//           value={formData.reasonOfResigning}
//           onChange={handleChange}
//           required
//         /><br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Resigning() {
//   const [formData, setFormData] = useState({
//     employeeId: '',
//     name: '',
//     years: '',
//     reasonOfResigning: '',
//   });

//   const [submissionStatus, setSubmissionStatus] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [submittedData, setSubmittedData] = useState(null);
     
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   useEffect(() => {
//     if (isEditing) {
//         // Pre-fill the form with submitted data when in edit mode
//         setFormData({
//     employeeId:submittedData.employeeId,
//     name: submittedData.name,
//     years: submittedData.years,
//     reasonOfResigning: submittedData.reasonOfResigning,
//            });
//     }
// }, [isEditing, submittedData]);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//         try {
//       const response = await axios.post(
//         'http://localhost:8070/resigning/resignations',
//         formData
//       );
//       console.log('Resigning data submitted:', response.data);
//       setSubmissionStatus('Resigning is submitted');
//       alert('Resigning is submitted');
//     } catch (error) {
//       console.error('Error submitting resigning data:', error.message);
//       setSubmissionStatus('Error submitting resigning data');
//       alert('Error submitting resigning data');
//     }
//   };
//   const handleDelete = () => {
//     if (submittedData) {
//         axios
//             .delete(`http://localhost:8070/resigning/resignations/${submittedData._id}`)
//             .then(() => {
//                 alert("Recruit deleted successfully");
//                 setSubmittedData(null);
//             })
//             .catch((error) => {
//                 alert("Error deleting recruit: " + error.message);
//             });
//     }
// };

// const handleEdit = () => {
//     setIsEditing(true);
    
// };

// const handleSave = (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     axios
//         .put(`http://localhost:8070/resigning/resignations/${submittedData._id}`, formData)
//         .then((response) => {
//             alert("Resigning updated successfully");
//             setSubmittedData(response.data);
//             setIsEditing(false);
//         })
//         .catch((error) => {
//             alert("Error updating recruit: " + error.message);
//         });
// };

//   return (
//     <div>
//       <h2>Resigning Form</h2>
//       <form >
//         <label htmlFor="employeeId">Employee ID:</label>
//         <input
//           type="text"
//           id="employeeId"
//           name="employeeId"
//           value={formData.employeeId}
//           onChange={handleChange}
//           required
//         /><br />

//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         /><br />

//         <label htmlFor="years">Years of Service:</label>
//         <input
//           type="text"
//           id="years"
//           name="years"
//           value={formData.years}
//           onChange={handleChange}
//           required
//         /><br />

//         <label htmlFor="reasonOfResigning">Reason of Resigning:</label>
//         <input
//           type="text"
//           id="reasonOfResigning"
//           name="reasonOfResigning"
//           value={formData.reasonOfResigning}
//           onChange={handleChange}
//           required
//         /><br />

// {isEditing ? (
//                     <input type="submit" value="Save" onClick={handleSave} />
//                 ) : (
//                     <input type="submit" value="Submit" onClick={handleSubmit} />
//                 )}
//       </form>

//       {submissionStatus && (
//         <div>
//           <h3>{submissionStatus}</h3>
//           <div>
//             <h4>Submitted Data:</h4>
//             <p>Employee ID: {submittedData.employeeId}</p>
//             <p>Name: {submittedData.name}</p>
//             <p>Years of Service: {submittedData.years}</p>
//             <p>Reason of Resigning: {submittedData.reasonOfResigning}</p>
//           </div>
//           <button onClick={handleEdit}>Edit</button>
//           <button onClick={handleDelete}>Delete</button>
                      
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Resigning() {
  const [formData, setFormData] = useState({
    employeeId: '',
    name: '',
    years: '',
    reasonOfResigning: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (isEditing && submittedData) {
      // Pre-fill the form with submitted data when in edit mode
      setFormData({
        employeeId: submittedData.employeeId,
        name: submittedData.name,
        years: submittedData.years,
        reasonOfResigning: submittedData.reasonOfResigning,
      });
    }
  }, [isEditing, submittedData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8070/resigning/resignations',
        formData
      );
      console.log('Resigning data submitted:', response.data);
      setSubmittedData(response.data); // Set submitted data after successfully creating
      setSubmissionStatus('Resigning is submitted');
      alert('Resigning is submitted');
    } catch (error) {
      console.error('Error submitting resigning data:', error.message);
      setSubmissionStatus('Error submitting resigning data');
      alert('Error submitting resigning data');
    }
  };

  const handleDelete = () => {
    if (submittedData) {
      axios
        .delete(`http://localhost:8070/resigning/resignations/${submittedData._id}`)
        .then(() => {
          alert('Resigning deleted successfully');
          setSubmittedData(null); // Clear submitted data after successful deletion
        })
        .catch((error) => {
          alert('Error deleting resigning: ' + error.message);
        });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8070/resigning/resignations/${submittedData._id}`, formData)
      .then((response) => {
        alert('Resigning updated successfully');
        setSubmittedData(response.data); // Update submitted data after successfully editing
        setIsEditing(false);
      })
      .catch((error) => {
        alert('Error updating resigning: ' + error.message);
      });
  };

  return (
    <div>
      <h2>Resigning Form</h2>
      <form>
        <label htmlFor="employeeId">Employee ID:</label>
        <input
          type="text"
          id="employeeId"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="years">Years of Service:</label>
        <input
          type="text"
          id="years"
          name="years"
          value={formData.years}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="reasonOfResigning">Reason of Resigning:</label>
        <input
          type="text"
          id="reasonOfResigning"
          name="reasonOfResigning"
          value={formData.reasonOfResigning}
          onChange={handleChange}
          required
        />
        <br />

        {isEditing ? (
          <input type="submit" value="Save" onClick={handleSave} />
        ) : (
          <input type="submit" value="Submit" onClick={handleSubmit} />
        )}
      </form>

      {submissionStatus && (
        <div>
          <h3>{submissionStatus}</h3>
          {submittedData && (
            <div>
              <h4>Submitted Data:</h4>
              <p>Employee ID: {submittedData.employeeId}</p>
              <p>Name: {submittedData.name}</p>
              <p>Years of Service: {submittedData.years}</p>
              <p>Reason of Resigning: {submittedData.reasonOfResigning}</p>
            </div>
          )}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
