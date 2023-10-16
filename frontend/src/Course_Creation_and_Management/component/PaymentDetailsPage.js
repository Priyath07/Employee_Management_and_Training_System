import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

function PaymentDetailsPage() {
    const [paymentDetails, setPaymentDetails] = useState([]);

    useEffect(() => {
        const fetchPaymentDetails = async () => {
            try {
                const response = await axios.get('http://localhost:8070/Course_Creation_and_Management/CoursePayment/coursePaymentAll');
                setPaymentDetails(response.data);
            } catch (error) {
                console.error('Error fetching payment details:', error);
            }
        };

        fetchPaymentDetails();
    }, []);

    // Function to generate a PDF report
    const generateReport = () => {
        const reportData = paymentDetails.map((payment, index) => ({
            courseID: payment.courseID,
            courseName: payment.courseName,
            amount: typeof payment.amount === 'number' ? `$${payment.amount.toFixed(2)}` : 'N/A',
            paymentDate: new Date(payment.paymentDate).toLocaleDateString(),
        }));

        const styles = StyleSheet.create({
            page: {
                flexDirection: 'column',
                padding: 10,
            },
            header: {
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 16,
            },
            table: {
                display: 'table',
                width: '100%',
                borderCollapse: 'collapse',
            },
            row: {
                display: 'table-row',
            },
            cell: {
                padding: 8,
                borderBottom: '1px solid #000',
            },
        });

        const ReportDocument = (
            <Document>
                <Page size="A4" style={styles.page}>
                    <Text style={styles.header}>Payment Details Report</Text>
                    <View style={styles.table}>
                        <View style={styles.row}>
                            <Text style={styles.cell}>Course ID</Text>
                            <Text style={styles.cell}>Course Name</Text>
                            <Text style={styles.cell}>Amount</Text>
                            <Text style={styles.cell}>Payment Date</Text>
                        </View>
                        {reportData.map((data, index) => (
                            <View style={styles.row} key={index}>
                                <Text style={styles.cell}>{data.courseID}</Text>
                                <Text style={styles.cell}>{data.courseName}</Text>
                                <Text style={styles.cell}>{data.amount}</Text>
                                <Text style={styles.cell}>{data.paymentDate}</Text>
                            </View>
                        ))}
                    </View>
                </Page>
            </Document>
        );

        // Generate and display the PDF in a new window/tab
        const blob = new Blob([ReportDocument], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        window.open(url);

        // Allow the user to download the PDF
        const a = document.createElement('a');
        a.href = url;
        a.download = 'PaymentDetailsReport.pdf';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div>
            <h2>Payment Details</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Amount</th>
                        <th>Payment Date</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentDetails.map((payment, index) => (
                        <tr key={index}>
                            <td>{payment.courseID}</td>
                            <td>{payment.courseName}</td>
                            <td>{typeof payment.amount === 'number' ? `$${payment.amount.toFixed(2)}` : 'N/A'}</td>
                            <td>{new Date(payment.paymentDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
            <button className="btn btn-primary" onClick={generateReport}>
                Generate Report
            </button>

            <Link to={`/course`} className="btn btn-primary">
                Back
            </Link>
        </div>
    );
}

export default PaymentDetailsPage;
