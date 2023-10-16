import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const TicketDetail = () => {
  const { id } = useParams();
  const [ticketdata , setTicket] = useState({});
  const [replyContent, setReplyContent] = useState('');

  useEffect(() => {
    // Fetch the ticket details by ID when the component mounts
console.log("Erorr");

    axios
      .get(`http://localhost:8070/ticket/get/${id}`)
      .then((res) => {
        const [ticketObject] = res.data.ticket;
        setTicket(ticketObject);
        console.log(res.data.ticket);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleReply = () => {
    axios
      .post(`/reply/${id}`, { replyContent })
      .then((res) => {
        // Handle success
        console.log("Reply sent successfully");
      })
      .catch((error) => {
        // Handle error
        console.error("Error sending reply:", error);
      });
  };

  // Format date and time
  const formattedDate = new Date(ticketdata.date).toLocaleDateString('en-US');
  const formattedTime = new Date(`1970-01-01T${ticketdata.time}`).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Create a mailto link with the recipient's email
  const mailtoLink = `mailto:${ticketdata.email}?subject=Reply%20to%20Ticket&body=${encodeURIComponent(replyContent)}`;

  return (
    <div className="ticket-detail-container">
      <h2>Ticket Details</h2>
      <p><strong>Name:</strong> {ticketdata.name}</p>
      <p><strong>ID:</strong> {ticketdata.id}</p>
      <p><strong>Subject:</strong> {ticketdata.subject}</p>
      <p><strong>Date:</strong> {formattedDate}</p>
      <p><strong>Time:</strong> {formattedTime}</p>
      <p><strong>Email:</strong> {ticketdata.email}</p>
      <p><strong>Inquiry:</strong> {ticketdata.description}</p>

      <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
        <button className="reply-button">Reply via Email</button>
      </a>
    </div>
  );
};

export default TicketDetail;


