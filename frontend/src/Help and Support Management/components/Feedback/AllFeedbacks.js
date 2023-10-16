import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip } from 'recharts';

const AllFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackCounts, setFeedbackCounts] = useState({});
  const [supportCounts, setSupportCounts] = useState({});
  const [transportCounts, setTransportCounts] = useState({});
  const [courseCounts, setCourseCounts] = useState({});

  useEffect(() => {
    const getFeedbacks = () => {
      axios
        .get("http://localhost:8070/feedback")
        .then((res) => {
          setFeedbacks(res.data);

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

          const supportFeedbacks = res.data.filter(
            (feedback) => feedback.subject === "Support"
          );

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

          const transportFeedbacks = res.data.filter(
            (feedback) => feedback.subject === "Transport"
          );

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

          const courseFeedbacks = res.data.filter(
            (feedback) => feedback.subject === "Courses"
          );

          const courseCounts = {};
          courseFeedbacks.forEach((feedback) => {
            const { feedbackType } = feedback;
            if (!courseCounts[feedbackType]) {
              courseCounts[feedbackType] = 1;
            } else {
              courseCounts[feedbackType]++;
            }
          });

          setCourseCounts(courseCounts);
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    getFeedbacks();
  }, []);

  const data01 = [
    { name: 'Good', value: supportCounts.Good || 0, fill: 'green' },
    { name: 'Bad', value: supportCounts.Bad || 0, fill: 'red' },
  ];

  const data02 = [
    { name: 'Good', value: transportCounts.Good || 0, fill: 'green' },
    { name: 'Bad', value: transportCounts.Bad || 0, fill: 'red' },
  ];

  const data03 = [
    { name: 'Good', value: courseCounts.Good || 0, fill: 'green' },
    { name: 'Bad', value: courseCounts.Bad || 0, fill: 'red' },
  ];

  return (
    <div className="all-feedbacks-container">
     
      
      <h1 className="all-feedbacks-title">All Feedbacks</h1>
      <div className="all-feedbacks-table-container">
        <table className="all-feedbacks-table">
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
      <div className="feedback-counts-container">
        <h2 className="feedback-counts-title">Feedback Report</h2>
        {Object.keys(feedbackCounts).map((subject, subjectIndex) => (
          <div key={subjectIndex}>
            <h3 className="feedback-subject-title">{subject}</h3>
            <div className="pie-chart-container">
              <PieChart width={300} height={300}>
                <Pie
                  dataKey="value"
                  isAnimationActive={true}
                  data={subject === 'Support' ? data01 : subject === 'Transport' ? data02 : data03}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFeedbacks;
