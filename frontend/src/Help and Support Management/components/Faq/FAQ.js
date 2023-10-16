import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQ = () => {
  const [answers, setAnswers] = useState(Array(20).fill(false));

  const toggleAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = !updatedAnswers[index];
    setAnswers(updatedAnswers);
  };

  const faqData = [
    {
      question: "How do I log in to the employee management system?",
      answer: "To log in, visit the company's employee portal and enter your username and password. If it's your first time logging in, use the provided credentials from HR or follow the onboarding instruction"
    },
    {
      question: " What should I do if I forget my password?",
      answer: "If you forget your password, click the link on the login page. Follow the instructions to reset your password."
    },
    {
        question: "Can I change my username or password?",
        answer: "Yes, you can change your password by accessing the option in your profile settings. For username changes, please contact HR or IT support."
    },
    {
        question: "How can I contact the shuttle driver for a ride?",
        answer: " You can contact the shuttle driver by calling the provided shuttle service phone number or using the dedicated transport management form on the employee portal."
    },
    {
        question:"How can I share my location with the shuttle driver?",
        answer:"You can share your location by filling out the transport management form, providing your current address or nearby landmarks, and specifying your pickup location."
    },
    {
        question:"What is the schedule for the company shuttle service?",
        answer:"The shuttle service schedule is available in the 'Transportation Schedule' section of the portal. You can find information on pickup times and locations."
    },
    {
        question:" What should I do if I encounter issues with the employee management system?",
        answer:" If you encounter issues, please contact our support team through the 'Help and Support' section on the employee portal. They will assist you with resolving any problems."
    },
    {
        question:"How can I request assistance for HR-related matters?",
        answer:"You can request HR assistance by submitting a request through the 'Help and Support' section on the portal. HR will address your concerns promptly."
    },
    {
        question:"What is the process for reporting IT-related issues or technical problems?",
        answer:"To report IT-related issues, use the 'Technical Support' section on the portal. Describe the problem, and our IT team will work to resolve it."
    },
    {
        question:" How can I check my salary information?",
        answer:"You can view your salary details by accessing your profile page on the employee portal. It includes information on your monthly salary, pay stubs, and other related details."
    },
    {
        question:"When can I expect to receive my monthly salary?",
        answer:"Salaries are typically deposited on the last working day of the month. You can verify the exact payment date in the 'Salary Information' section."
    },
    {
        question:" Are there any opportunities for professional development or educational courses?",
        answer:"Yes, we offer a range of educational courses and professional development opportunities. You can find information on available courses and training programs in the 'Educational Courses' section of the employee portal."
    },
    {
        question:"How can I enroll in educational courses?",
        answer:"To enroll in educational courses, go to the 'Educational Courses' section, select the course of interest, and follow the enrollment instructions. If you need assistance, contact our HR or training department for guidance."
    },
    {
        question:"Can I request financial assistance for external educational courses or certifications?",
        answer:"Yes, you can submit a request for financial assistance through the 'Educational Support' section on the portal. Our HR team will review your request."
    },
    {
        question:"How can I request time off or leave?",
        answer:"You can request time off or leave by using the 'Leave Request' feature on the employee portal. Specify the dates and reason for your request, and it will be reviewed by your manager."
    },
    {
        question:"What is the process for approving time off or leave requests?",
        answer:"Leave requests are typically reviewed and approved by your manager. You will receive notification of the approval status through the portal."
    },
    {
        question:"Where can I find information about my employee benefits, such as health insurance and retirement plans?",
        answer:"You can access information about your employee benefits in the 'Employee Benefits' section. It includes details about health plans, retirement accounts, and other benefits."
    },
    {
        question:"How can I make changes to my benefits selections or update my beneficiary information?",
        answer:"You can make changes to your benefits and update beneficiary information through the 'Benefits Management' feature. Be sure to review changes during the open enrollment period."
    },
    {
        question:" How can I find contact information for colleagues or other employees?",
        answer:"You can search for contact information in the 'Employee Directory' section of the portal. It provides details about colleagues, including email addresses and phone numbers."
    },
    {
        question:"Can I update my contact information in the employee directory?",
        answer:"Yes, you can update your contact information by visiting the 'Profile Settings' page in the portal. Make sure your information is accurate and up to date."
    },
  ];

  return (
    <div className="faq-container">
       <div className="sidebar">
             
              <Link to={`/Home`}>View Shuttle</Link>
              <Link to={``}>View Progress</Link>
              <Link to={`/SupportHome`}>Help and Support</Link>
              <Link to={``}>View Salary</Link>
              <Link to={`/login`}>Log Out</Link>
            </div>
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="accordion" id="faqAccordion">
        {faqData.map((faq, index) => (
          <div className="card" key={index}>
            <div className="card-header" id={`question${index}`}>
              <h2 className="mb-0">
                <button
                  className={`btn btn-link ${answers[index] ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleAnswer(index)}
                  aria-expanded={answers[index]}
                >
                  {faq.question}
                </button>
              </h2>
            </div>
            <div
              id={`answer${index}`}
              className={`collapse ${answers[index] ? "show" : ""}`}
            >
              <div className="card-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
