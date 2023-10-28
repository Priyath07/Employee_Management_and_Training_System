import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './CourseBuy.css';
//import headerImageURL from './images/Logo.png'

function CourseBuy() {
    const [courseID, setCourseID] = useState('');
    const [courseName, setCourseName] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [bankSlip, setBankSlip] = useState(null);
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const courseOptions = [
        { id: 'IT2060', name: 'Software Engineer' },
        { id: 'IT2080', name: 'UI/UX Design' },
        { id: 'IT2050', name: 'Data Science' },
        { id: 'IT2090', name: 'Cyber Security' },
        { id: 'IT2010', name: 'Machine Learning' },
        { id: 'IT2070', name: 'Database Management System' },
    ];

    const validateForm = () => {
        const newErrors = {};

        if (!courseID) {
            newErrors.courseID = 'Course ID is required';
        } else {
            delete newErrors.courseID;
        }

        if (!courseName) {
            newErrors.courseName = 'Course Name is required';
        } else {
            delete newErrors.courseName;
        }

        if (!amount) {
            newErrors.amount = 'Amount is required';
        } else if (!/^\$?\d+(\.\d{2})?$/.test(amount)) {
            newErrors.amount = 'Amount must be in the format $XX.XX';
        } else {
            delete newErrors.amount;
        }

        if (!paymentDate) {
            newErrors.paymentDate = 'Payment Date is required';
        } else {
            delete newErrors.paymentDate;
        }

        if (!bankSlip) {
            newErrors.bankSlip = 'Bank Slip is required';
        } else {
            delete newErrors.bankSlip;
        }

        setErrors(newErrors);
    };

    const handleAmountChange = (value) => {
        setAmount(value);
        validateForm();
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        validateForm();

        if (Object.keys(errors).length === 0) {
            const amountValue = parseFloat(amount.replace('$', ''));
            const formData = new FormData();
            formData.append('courseID', courseID);
            formData.append('courseName', courseName);
            formData.append('amount', amountValue);
            formData.append('paymentDate', paymentDate);
            formData.append('bankSlip', bankSlip);

            const isConfirmed = window.confirm('Do you want to confirm the payment?');

            if (isConfirmed) {
                try {
                    const response = await axios.post('http://localhost:8070/Course_Creation_and_Management/CoursePayment/coursePaymentAdd', formData);

                    console.log('Server Response:', response.data);

                    if (response.data.success) {
                        setSubmittedData({
                            courseID,
                            courseName,
                            amount,
                            paymentDate,
                            bankSlip,
                        });

                        window.alert('Payment has been successfully added!');
                    } else {
                        window.alert('Payment could not be added. Please try again.');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    window.alert('An error occurred while processing your payment.');
                }
            }
        }
    };

    const Report = () => {
        if (!submittedData) {
            return null;
        }

        return (
            <div className="report-container">
                <h2>Submitted Data</h2>
                <p><strong>Course ID:</strong> {submittedData.courseID}</p>
                <p><strong>Course Name:</strong> {submittedData.courseName}</p>
                <p><strong>Amount:</strong> {submittedData.amount}</p>
                <p><strong>Payment Date:</strong> {submittedData.paymentDate}</p>
                <p><strong>Bank Slip:</strong> {submittedData.bankSlip}</p>
            </div>
        );
    };

    

    return (
        <div className="form-container">
            <h1>Course Payment</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="courseID">Course ID</label>
                    <select
                        id="courseID"
                        value={courseID}
                        onChange={(e) => setCourseID(e.target.value)}
                        required
                    >
                        <option value="">Select Course ID</option>
                        {courseOptions.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.id}
                            </option>
                        ))}
                    </select>
                    {errors.courseID && <span className="error-text">{errors.courseID}</span>}
                </div>
    
                <div className="form-group">
                    <label htmlFor="courseName">Course Name</label>
                    <select
                        id="courseName"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                    >
                        <option value="">Select Course Name</option>
                        {courseOptions.map(option => (
                            <option key={option.id} value={option.name}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                    {errors.courseName && <span className="error-text">{errors.courseName}</span>}
                </div>
    
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="text"
                        id="amount"
                        value={amount}
                        onChange={(e) => handleAmountChange(e.target.value)}
                        placeholder="$XX.XX"
                        required
                    />
                    {errors.amount && <span className="error-text">{errors.amount}</span>}
                </div>
    
                <div className="form-group">
                    <label htmlFor="paymentDate">Payment Date</label>
                    <input
                        type="date"
                        id="paymentDate"
                        value={paymentDate}
                        onChange={(e) => setPaymentDate(e.target.value)}
                        required
                    />
                    {errors.paymentDate && <span className="error-text">{errors.paymentDate}</span>}
                </div>
    
                <div className="form-group">
                    <label htmlFor="bankSlip">Bank Slip</label>
                    <input
                        type="file"
                        id="bankSlip"
                        onChange={(e) => setBankSlip(e.target.files[0])}
                        accept=".pdf, .jpg, .jpeg, .png"
                        required
                    />
                    {errors.bankSlip && <span className="error-text">{errors.bankSlip}</span>}
                </div>
    
                <button type="submit" className="submit-button" style={{ width: '150px', height: '40px' }}>
                    Submit Payment
                </button>
                <br />
                <br />
                <Link to="/coursePaymentAll" className="btn btn-primary" style={{ width: '150px', height: '40px' }}>
                    Details
                </Link>
            </form>
            <Report />
        </div>
    );
}

export default CourseBuy;
