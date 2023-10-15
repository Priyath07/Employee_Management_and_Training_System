import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './AllFeedbacks.css';
import { PieChart, Pie, Tooltip } from 'recharts';

const AllFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackCounts, setFeedbackCounts] = useState({});
  const [supportCounts, setSupportCounts] = useState({});
  const [transportCounts, setTransportCounts] = useState({});
  const [courseCounts, setCourseCounts] = useState({}); // Add state for Course counts

  useEffect(() => {
    const getFeedbacks = () => {
      axios
        .get("http://localhost:8070/feedback")
        .then((res) => {
          setFeedbacks(res.data);
          // Calculate feedback counts
          const counts = {};

          res.data.forEach((feedback) => {
            const { subject, feedbackType } = feedback;
            if (!counts[subject]) {
              counts[subject] = {};
            }
            if (!counts[subject][feedbackType]) {
              counts[subject][feedbackType] = 1;
            } else {
              counts[subject][feedbackType]++;
            }
          });

          setFeedbackCounts(counts);

          // Filter feedbacks for the "Support" subject
          const supportFeedbacks = res.data.filter(
            (feedback) => feedback.subject === "Support"
          );

          // Calculate counts for the "Support" subject
          const supportCounts = {};
          supportFeedbacks.forEach((feedback) => {
            const { feedbackType } = feedback;
            if (!supportCounts[feedbackType]) {
              supportCounts[feedbackType] = 1;
            } else {
              supportCounts[feedbackType]++;
            }
          });

          setSupportCounts(supportCounts);

          // Filter feedbacks for the "Transport" subject
          const transportFeedbacks = res.data.filter(
            (feedback) => feedback.subject === "Transport"
          );

          // Calculate counts for the "Transport" subject
          const transportCounts = {};
          transportFeedbacks.forEach((feedback) => {
            const { feedbackType } = feedback;
            if (!transportCounts[feedbackType]) {
              transportCounts[feedbackType] = 1;
            } else {
              transportCounts[feedbackType]++;
            }
          });

          setTransportCounts(transportCounts);

          // Filter feedbacks for the "Courses" subject
          const courseFeedbacks = res.data.filter(
            (feedback) => feedback.subject === "Courses"
          );

          // Calculate counts for the "Courses" subject
          const courseCounts = {};
          courseFeedbacks.forEach((feedback) => {
            const { feedbackType } = feedback;
            if (!courseCounts[feedbackType]) {
              courseCounts[feedbackType] = 1;
            } else {
              courseCounts[feedbackType]++;
            }
          });

          setCourseCounts(courseCounts); // Set state for Course counts
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    getFeedbacks();
  }, []);

  const data01 = [
    { name: 'Good', value: supportCounts.Good || 0, fill: 'green' }, // Specify color for Good
    { name: 'Bad', value: supportCounts.Bad || 0, fill: 'red' }, // Specify color for Bad
  ];

  const data02 = [
    // Data for Transport pie chart
    { name: 'Good', value: transportCounts.Good || 0, fill: 'green' }, // Specify color for Good
    { name: 'Bad', value: transportCounts.Bad || 0, fill: 'red' }, // Specify color for Bad
  ];

  const data03 = [
    // Data for Courses pie chart
    { name: 'Good', value: courseCounts.Good || 0, fill: 'green' }, // Specify color for Good
    { name: 'Bad', value: courseCounts.Bad || 0, fill: 'red' }, // Specify color for Bad
  ];

  return (
    <div className="feedback-container">
      <h1>All Feedbacks</h1>
      <div className="table-container">
        <table className="Feedback-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Time</th>
              <th>Feedback Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.name}</td>
                <td>{feedback.id}</td>
                <td>{feedback.subject}</td>
                <td>{feedback.date}</td>
                <td>{feedback.time}</td>
                <td>{feedback.feedbackType}</td>
                <td>{feedback.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="feedback-counts">
        <h2>Feedback Report</h2>
        {Object.keys(feedbackCounts).map((subject, subjectIndex) => (
          <div key={subjectIndex}>
            <h3>{subject}</h3>
            {Object.keys(feedbackCounts[subject]).map((feedbackType, feedbackTypeIndex) => (
              <p key={feedbackTypeIndex}>
                {feedbackType}: {feedbackCounts[subject][feedbackType]}
              </p>
            ))}
            {/* Pie chart for Support */}
            {subject === 'Support' && (
              <div className="pie-chart-container">
               
                <PieChart width={300} height={300}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>
            )}

            {/* Pie chart for Transport */}
            {subject === 'Transport' && (
              <div className="pie-chart-container">
                
                <PieChart width={300} height={300}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data02}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>
            )}

            {/* Pie chart for Courses */}
            {subject === 'Courses' && (
              <div className="pie-chart-container">
                
                <PieChart width={300} height={300}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data03}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFeedbacks;
