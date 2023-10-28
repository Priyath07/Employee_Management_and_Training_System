import React, { useState } from 'react';
import axios from 'axios';

const LectureForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    lecturer: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server (e.g., using Axios) to create or edit a lecture
      const response = await axios.post('http://localhost:8070/Course_Creation_and_Management/lecture/addLecture', formData);

      // Handle the response as needed (e.g., redirect to the created/edited lecture)
      console.log('Lecture created/addLecture:', response.data);
      // You can use history.push() from react-router-dom to navigate to the lecture list or the created/edited lecture

      // Trigger the provided onSubmit callback (if available) and pass the response data
      if (onSubmit) {
        onSubmit(response.data);
      }
    } catch (error) {
      console.error('Error creating/updateLecture:', error);
    }
  };

  return (
    <div>
      <h2>Create/Edit Lecture</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="lecturer">Lecturer:</label>
          <input
            type="text"
            id="lecturer"
            value={formData.lecturer}
            onChange={(e) =>
              setFormData({ ...formData, lecturer: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LectureForm;
